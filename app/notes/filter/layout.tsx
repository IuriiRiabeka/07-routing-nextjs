import { ReactNode } from "react";


import css from "../LayoutNotes.module.css";

export default function FilterLayout({
  children
}: {
  children: ReactNode;
  
}) {
  return (
    <div className={css.container}>
     

      <div className={css.notesWrapper}>
        {children}
      </div>

      
      
    </div>
  );
}
