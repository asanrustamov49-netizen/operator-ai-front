import {
  CalendarDays,
  CheckSquare,
  Cloud,
  Mail,
  MoveRight,
  Plus,
  Sparkles,
} from "lucide-react";

import scss from "./dashboard.module.scss";

const stats = [
  {
    id: 1,
    title: "Today's events",
    value: "4",
    description: "2 upcoming",
    icon: CalendarDays,
  },
  {
    id: 2,
    title: "Unread emails",
    value: "12",
    description: "5 important",
    icon: Mail,
  },
  {
    id: 3,
    title: "My tasks",
    value: "8",
    description: "3 in progress",
    icon: CheckSquare,
  },
  {
    id: 4,
    title: "Cloud files",
    value: "24",
    description: "Updated today",
    icon: Cloud,
  },
];

const events = [
  {
    id: 1,
    time: "09:00",
    title: "Team meeting",
    description: "Weekly team discussion",
  },
  {
    id: 2,
    time: "11:30",
    title: "Project review",
    description: "Operator AI progress review",
  },
  {
    id: 3,
    time: "15:00",
    title: "Client call",
    description: "Discuss project requirements",
  },
];

const emails = [
  {
    id: 1,
    sender: "John Smith",
    subject: "Project update",
    text: "I've sent the latest project updates...",
    time: "10 min ago",
  },
  {
    id: 2,
    sender: "Design Team",
    subject: "New dashboard design",
    text: "Please review the latest version...",
    time: "1 hour ago",
  },
  {
    id: 3,
    sender: "Sarah Johnson",
    subject: "Meeting tomorrow",
    text: "Just confirming our meeting...",
    time: "2 hours ago",
  },
];

const tasks = [
  {
    id: 1,
    title: "Finish Dashboard page",
    status: "In progress",
  },
  {
    id: 2,
    title: "Connect Calendar API",
    status: "To do",
  },
  {
    id: 3,
    title: "Prepare project presentation",
    status: "To do",
  },
];

const Dashboard = () => {
  return (
    <main className={scss.dashboard}>
      <header className={scss.header}>
        <div>
          <p className={scss.subtitle}>Workspace overview</p>
          <h1>Good morning 👋</h1>
          <span>Here's what's happening in your workspace today.</span>
        </div>

        <button className={scss.actionButton}>
          <Plus size={18} />
          Create
        </button>
      </header>

      <section className={scss.stats}>
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div className={scss.statCard} key={item.id}>
              <div className={scss.statTop}>
                <div className={scss.icon}>
                  <Icon size={20} />
                </div>

                <span>{item.title}</span>
              </div>

              <strong>{item.value}</strong>

              <p>{item.description}</p>
            </div>
          );
        })}
      </section>

      <section className={scss.mainGrid}>
        <div className={scss.card}>
          <div className={scss.cardHeader}>
            <div>
              <h2>
                <CalendarDays size={20} />
                Today's schedule
              </h2>
              <span>Your upcoming events</span>
            </div>

            <button className={scss.viewButton}>
              View calendar
              <MoveRight size={16} />
            </button>
          </div>

          <div className={scss.events}>
            {events.map((event) => (
              <div className={scss.event} key={event.id}>
                <div className={scss.eventTime}>{event.time}</div>

                <div className={scss.eventInfo}>
                  <strong>{event.title}</strong>
                  <span>{event.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${scss.card} ${scss.aiCard}`}>
          <div className={scss.cardHeader}>
            <div>
              <h2>
                <Sparkles size={20} />
                Operator AI
              </h2>
              <span>Your workspace assistant</span>
            </div>
          </div>

          <div className={scss.aiContent}>
            <p>
              You have <strong>3 upcoming events</strong> and{" "}
              <strong>2 unfinished tasks</strong> today.
            </p>

            <button>
              Ask Operator AI
              <MoveRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <section className={scss.bottomGrid}>
        <div className={scss.card}>
          <div className={scss.cardHeader}>
            <div>
              <h2>
                <Mail size={20} />
                Recent emails
              </h2>
              <span>Latest messages from Gmail</span>
            </div>

            <button className={scss.viewButton}>
              Open Gmail
              <MoveRight size={16} />
            </button>
          </div>

          <div className={scss.list}>
            {emails.map((email) => (
              <div className={scss.email} key={email.id}>
                <div className={scss.avatar}>{email.sender.charAt(0)}</div>

                <div className={scss.emailInfo}>
                  <div>
                    <strong>{email.sender}</strong>
                    <span>{email.time}</span>
                  </div>

                  <b>{email.subject}</b>
                  <p>{email.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={scss.card}>
          <div className={scss.cardHeader}>
            <div>
              <h2>
                <CheckSquare size={20} />
                My tasks
              </h2>
              <span>Tasks from your workspace</span>
            </div>

            <button className={scss.viewButton}>
              View all
              <MoveRight size={16} />
            </button>
          </div>

          <div className={scss.tasks}>
            {tasks.map((task) => (
              <div className={scss.task} key={task.id}>
                <div className={scss.checkbox} />

                <div>
                  <strong>{task.title}</strong>
                  <span>{task.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
