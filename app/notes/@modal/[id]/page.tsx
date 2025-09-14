
import NotePreviewModal from "@/components/NotePreviewModal";
import { fetchNoteById } from "@/lib/api";
import type { Note } from "@/types/note";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function NotePreviewPage({ params }: PageProps) {
  const resolvedParams = await params;
  const note: Note = await fetchNoteById(resolvedParams.id);

  return <NotePreviewModal note={note} />;
}

