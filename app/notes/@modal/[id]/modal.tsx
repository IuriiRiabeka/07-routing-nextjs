"use client";
import Modal from "@/components/Modal/Modal";

import { fetchNoteById } from "@/lib/api";

import NotePreviewModal from "@/components/NotePreviewModal";


type Props = {
  params: { id: string };
};
export default async function NoteModal({ params }: Props) {
  const note = await fetchNoteById(params.id);

  return (
    <Modal isOpen={true} onClose={() => {}}>
      <NotePreviewModal note={note} />
    </Modal>
  );
}