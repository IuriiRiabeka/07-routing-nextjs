
 import { ReactNode } from "react";
 import SidebarNotes from "./filter/@sidebar/SidebarNotes";
 

 import css from "./LayoutNotes.module.css";


 export default function NotesLayout({ children,modal, }: { children: ReactNode;
    modal?: ReactNode
    
    }) {
   return (
     <div className={css.container}>
      
        <aside className={css.sidebar}><SidebarNotes /></aside> 
       < main className={css.notesWrapper}>{children}
        {modal}
        
       </ main>
 
    </div>
  );
 }


