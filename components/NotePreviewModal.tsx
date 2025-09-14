"use client";

import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/navigation";
import type { Note } from "@/types/note";

interface NotePreviewModalProps {
  note: Note;
}

export default function NotePreviewModal({ note }: NotePreviewModalProps) {
  const router = useRouter();

  const handleClose = () => router.back();

  return (
    <Modal isOpen={true} onClose={handleClose}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <span>Tag: {note.tag}</span>
      <p>{note.updatedAt ?? note.createdAt}</p>
      
      <button onClick={handleClose}>Закрити</button>
    </Modal>
  );
}
