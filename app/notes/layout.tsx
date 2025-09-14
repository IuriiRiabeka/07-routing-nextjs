
 import { ReactNode } from "react";
 import SidebarNotes from "./filter/@sidebar/SidebarNotes";

 import css from "./LayoutNotes.module.css";

 export default function NotesLayout({ children,modal, }: { children: ReactNode;
    modal: ReactNode }) {
   return (
     <div className={css.container}>
      
        <div className={css.sidebar}><SidebarNotes /></div> 
       <main className={css.notesWrapper} >{children}
        {modal}
       </main>
 
    </div>
  );
 }

// import { ReactNode } from "react";

// export default function NotesLayout({
//   children,
//   modal,
// }: {
//   children: ReactNode;
//   modal: ReactNode;
// }) {
//   return (
//     <>
//       {children}
//       {modal}
//     </>
//   );
// }
