// lib/api.ts
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Note, NoteInput } from '@/types/note';
import type { NoteTag } from '@/types/note';

// Створюємо інстанс axios із базовим URL
const api: AxiosInstance = axios.create({
  baseURL: 'https://notehub-public.goit.study/api',
});

// Додаємо токен, якщо він заданий
const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN?.trim();
if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// --- Типи ---
export interface FetchNotesParams {
  page?: number;
  perPage?: number;
  search?: string;
  tag?: NoteTag;
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

// --- API функції ---
export const fetchNotes = async (
  params: FetchNotesParams
): Promise<FetchNotesResponse> => {
  const { data }: AxiosResponse<FetchNotesResponse> = await api.get('/notes', { params });
  return data;
};

export const createNote = async (note: NoteInput): Promise<Note> => {
  const { data }: AxiosResponse<Note> = await api.post('/notes', note);
  return data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const { data }: AxiosResponse<Note> = await api.delete(`/notes/${id}`);
  return data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const { data }: AxiosResponse<Note> = await api.get(`/notes/${id}`);
  return data;
};
