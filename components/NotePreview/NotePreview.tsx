"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import Loader from "@/components/Loader/Loader";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";

interface NotePreviewProps {
  id: string;
  
}

export default function NotePreview({ id }: NotePreviewProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage name="noteError" />;

  return (
    <div>
      <h2>{data?.title}</h2>
      <p>{data?.content}</p>
      <p><strong>Tag:</strong> {data?.tag}</p>
      
    </div>
  );
}
