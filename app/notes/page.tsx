import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/lib/getQueryClient";
import { fetchNotes } from "@/lib/api";
import NotesClient from "@/app/notes/filter/[...slug]/Notes.client";

const PER_PAGE = 12;

interface PageProps {
 searchParams: Promise<Record<string, string>>;
}

export default async function NotesPage({ searchParams }: PageProps) {
    const params = await searchParams;
  const page = Number(params.page || "1");

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", { page, perPage: PER_PAGE }],
    queryFn: () =>
      fetchNotes({
        page,
        perPage: PER_PAGE,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient initialPage={page} />
    </HydrationBoundary>
  );
}
