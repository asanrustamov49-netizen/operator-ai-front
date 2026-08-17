import {
  Archive,
  ChevronLeft,
  ChevronRight,
  File,
  Inbox,
  MailPlus,
  Search,
  Send,
  Star,
  Trash2,
} from "lucide-react";

import scss from "./gmail.module.scss";

const emails = [
  {
    id: 1,
    sender: "John Smith",
    subject: "Project update",
    message:
      "Hi! I've finished the latest changes and would like you to review them.",
    time: "10:42",
    unread: true,
  },
  {
    id: 2,
    sender: "Design Team",
    subject: "New dashboard design",
    message:
      "We've prepared a new version of the dashboard. Please take a look.",
    time: "09:15",
    unread: true,
  },
  {
    id: 3,
    sender: "Sarah Johnson",
    subject: "Meeting tomorrow",
    message: "Just confirming our meeting tomorrow at 11:00. See you there!",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 4,
    sender: "GitHub",
    subject: "New pull request",
    message: "A new pull request was opened in your Operator AI repository.",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 5,
    sender: "Figma",
    subject: "You were invited to a project",
    message: "You've been invited to collaborate on a new design project.",
    time: "Aug 16",
    unread: false,
  },
];

const Gmail = () => {
  return (
    <main className={scss.gmail}>
      <header className={scss.header}>
        <div>
          <p className={scss.subtitle}>Email workspace</p>
          <h1>Gmail</h1>
        </div>

        <button className={scss.composeButton}>
          <MailPlus size={18} />
          Compose
        </button>
      </header>

      <div className={scss.mailLayout}>
        <aside className={scss.sidebar}>
          <button className={`${scss.menuItem} ${scss.active}`}>
            <Inbox size={18} />
            <span>Inbox</span>
            <b>12</b>
          </button>

          <button className={scss.menuItem}>
            <Star size={18} />
            <span>Starred</span>
          </button>

          <button className={scss.menuItem}>
            <Send size={18} />
            <span>Sent</span>
          </button>

          <button className={scss.menuItem}>
            <Archive size={18} />
            <span>Archived</span>
          </button>

          <button className={scss.menuItem}>
            <Trash2 size={18} />
            <span>Trash</span>
          </button>
        </aside>

        <section className={scss.mailContent}>
          <div className={scss.search}>
            <Search size={19} />

            <input type="text" placeholder="Search emails..." />
          </div>

          <div className={scss.mailTop}>
            <div>
              <h2>Inbox</h2>
              <span>12 unread messages</span>
            </div>

            <div className={scss.navigation}>
              <button>
                <ChevronLeft size={19} />
              </button>

              <button>
                <ChevronRight size={19} />
              </button>
            </div>
          </div>

          <div className={scss.emails}>
            {emails.map((email) => (
              <button
                className={`${scss.email} ${email.unread ? scss.unread : ""}`}
                key={email.id}
              >
                <div className={scss.avatar}>{email.sender.charAt(0)}</div>

                <div className={scss.emailInfo}>
                  <div className={scss.emailHeader}>
                    <strong>{email.sender}</strong>
                    <time>{email.time}</time>
                  </div>

                  <b>{email.subject}</b>

                  <p>{email.message}</p>
                </div>

                {email.unread && <span className={scss.unreadDot} />}
              </button>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Gmail;
