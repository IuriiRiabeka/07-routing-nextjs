import { ReactNode } from "react";

import css from "../LayoutNotes.module.css";

export default function FilterLayout({
  children,
  modal, 
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div className={css.container}>
     

      <main className={css.notesWrapper}>
        {children}
      </main>

      
      {modal}
    </div>
  );
}
