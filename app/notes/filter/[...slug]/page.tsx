import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/lib/getQueryClient";
import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";
import type { NoteTag } from "@/types/note";

const PER_PAGE = 12;

interface PageProps {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<Record<string, string>>;
}

export default async function NotesPage({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const page = Number(resolvedSearchParams.page || "1");
  const tag = resolvedParams.slug?.[0];
  const validTags: NoteTag[] = ["Work", "Personal", "Meeting", "Shopping", "Todo"];
  const safeTag: NoteTag | undefined =
    tag && validTags.includes(tag as NoteTag) ? (tag as NoteTag) : undefined;

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", { page, perPage: PER_PAGE, tag: safeTag }],
    queryFn: () =>
      fetchNotes({
        page,
        perPage: PER_PAGE,
        ...(safeTag ? { tag: safeTag } : {}),
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient initialPage={page} tag={safeTag} />
    </HydrationBoundary>
  );
}


