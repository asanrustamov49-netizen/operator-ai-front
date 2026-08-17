import {
  Clock3,
  FileText,
  MoreHorizontal,
  Plus,
  Search,
  Star,
} from "lucide-react";

import scss from "./notes.module.scss";

const notes = [
  {
    id: 1,
    title: "Operator AI project",
    text: "Dashboard, Calendar, Gmail, OneDrive and Notes pages...",
    date: "Today",
    active: true,
  },
  {
    id: 2,
    title: "Meeting notes",
    text: "Discuss project structure and upcoming tasks...",
    date: "Today",
  },
  {
    id: 3,
    title: "New ideas",
    text: "Features that could improve Operator AI...",
    date: "Yesterday",
  },
  {
    id: 4,
    title: "Weekly plan",
    text: "Finish the frontend and start backend development...",
    date: "Aug 15",
  },
  {
    id: 5,
    title: "Important tasks",
    text: "Authentication, database and API integration...",
    date: "Aug 12",
  },
];

const Notes = () => {
  const activeNote = notes[0];

  return (
    <main className={scss.notes}>
      <header className={scss.pageHeader}>
        <div>
          <p>Personal workspace</p>
          <h1>Notes</h1>
        </div>

        <button className={scss.newButton}>
          <Plus size={18} />
          New note
        </button>
      </header>

      <section className={scss.notesLayout}>
        <aside className={scss.notesSidebar}>
          <div className={scss.search}>
            <Search size={18} />

            <input type="text" placeholder="Search notes..." />
          </div>

          <div className={scss.categories}>
            <button className={scss.categoryActive}>
              <FileText size={17} />
              <span>All notes</span>
              <b>12</b>
            </button>

            <button>
              <Star size={17} />
              <span>Favorites</span>
              <b>3</b>
            </button>

            <button>
              <Clock3 size={17} />
              <span>Recent</span>
            </button>
          </div>

          <div className={scss.notesListHeader}>
            <span>MY NOTES</span>

            <button>
              <Plus size={16} />
            </button>
          </div>

          <div className={scss.notesList}>
            {notes.map((note) => (
              <button
                key={note.id}
                className={`${scss.noteItem} ${
                  note.active ? scss.activeNote : ""
                }`}
              >
                <div className={scss.noteIcon}>
                  <FileText size={17} />
                </div>

                <div className={scss.noteItemInfo}>
                  <strong>{note.title}</strong>

                  <p>{note.text}</p>

                  <span>{note.date}</span>
                </div>
              </button>
            ))}
          </div>
        </aside>

        <article className={scss.editor}>
          <div className={scss.editorTop}>
            <div className={scss.editorStatus}>
              <span className={scss.statusDot} />
              Saved
            </div>

            <button className={scss.moreButton}>
              <MoreHorizontal size={21} />
            </button>
          </div>

          <div className={scss.editorContent}>
            <div className={scss.noteMeta}>
              <span>Today</span>
              <span>•</span>
              <span>Last edited 10 min ago</span>
            </div>

            <h2>{activeNote.title}</h2>

            <p>
              This is your workspace for keeping important notes, project ideas
              and information in one place.
            </p>

            <p>
              You can use notes to plan your work, write down ideas, keep
              meeting information and organize everything related to your
              projects.
            </p>

            <h3>Current project</h3>

            <p>
              Operator AI is a workspace where you can manage your calendar,
              files, emails and notes from one application.
            </p>

            <div className={scss.callout}>
              <FileText size={19} />

              <p>
                <strong>Quick note:</strong> Later we can add real note
                creation, editing, deleting and saving to the database.
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Notes;
