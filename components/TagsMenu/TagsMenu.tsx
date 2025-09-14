"use client";

import Link from "next/link";
import { useState } from "react";
import css from "./TagsMenu.module.css";

const tags = ["All notes", "Work", "Personal", "Meeting", "Shopping", "Todo"];


export default function TagsMenu() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (

    <div className={css.menuContainer}>
      <button className={css.menuButton} onClick={toggleMenu} >
        Notes ▾
      </button>
      {isOpen &&(
      <ul className={css.menuList}>
          {tags.map((tag) => (
            <li key={tag} className={css.menuItem}>
              <Link
                href={tag === "All notes" ? "/notes" : `/notes/filter/${tag}`}
                className={css.menuLink}
                onClick={() => setIsOpen(false)} 
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}