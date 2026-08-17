import {
  CalendarDays,
  Check,
  Circle,
  Clock3,
  Flag,
  Plus,
  Search,
  MoreHorizontal,
  ListFilter,
} from "lucide-react";

import scss from "./tasks.module.scss";

const tasks = [
  {
    id: 1,
    title: "Review today's emails",
    description: "Check important messages and reply to pending requests.",
    priority: "High",
    status: "In Progress",
    date: "Today, 10:30",
  },
  {
    id: 2,
    title: "Prepare project presentation",
    description: "Finish the slides for the upcoming project meeting.",
    priority: "Medium",
    status: "Pending",
    date: "Today, 14:00",
  },
  {
    id: 3,
    title: "Update CRM contacts",
    description: "Add new contacts and update existing customer information.",
    priority: "Low",
    status: "Pending",
    date: "Tomorrow",
  },
  {
    id: 4,
    title: "Send weekly report",
    description: "Prepare and send the weekly performance report.",
    priority: "High",
    status: "Completed",
    date: "Yesterday",
  },
];

const Tasks = () => {
  return (
    <main className={scss.page}>
      <div className={scss.container}>
        {/* Header */}
        <header className={scss.header}>
          <div>
            <span className={scss.eyebrow}>WORKSPACE</span>
            <h1>Tasks</h1>
            <p>Manage your work and stay focused on what matters.</p>
          </div>

          <button className={scss.createButton}>
            <Plus size={18} />
            New task
          </button>
        </header>

        {/* Statistics */}
        <section className={scss.stats}>
          <div className={`${scss.statCard} ${scss.active}`}>
            <div className={scss.statIcon}>
              <ListFilter size={18} />
            </div>

            <div>
              <span>All tasks</span>
              <strong>24</strong>
            </div>
          </div>

          <div className={scss.statCard}>
            <div className={scss.statIcon}>
              <Clock3 size={18} />
            </div>

            <div>
              <span>In progress</span>
              <strong>8</strong>
            </div>
          </div>

          <div className={scss.statCard}>
            <div className={scss.statIcon}>
              <Check size={18} />
            </div>

            <div>
              <span>Completed</span>
              <strong>16</strong>
            </div>
          </div>
        </section>

        {/* Toolbar */}
        <section className={scss.toolbar}>
          <div className={scss.search}>
            <Search size={18} />
            <input placeholder="Search tasks..." />
          </div>

          <button className={scss.filterButton}>
            <Flag size={17} />
            Priority
          </button>

          <button className={scss.filterButton}>
            <CalendarDays size={17} />
            Date
          </button>
        </section>

        {/* Content */}
        <section className={scss.content}>
          <div className={scss.taskSection}>
            <div className={scss.sectionHeader}>
              <div>
                <h2>My tasks</h2>
                <span>4 tasks</span>
              </div>

              <button className={scss.viewButton}>View all</button>
            </div>

            <div className={scss.taskList}>
              {tasks.map((task) => (
                <article className={scss.taskCard} key={task.id}>
                  <button className={scss.checkbox}>
                    {task.status === "Completed" && <Check size={15} />}
                  </button>

                  <div className={scss.taskInfo}>
                    <div className={scss.taskTop}>
                      <h3
                        className={
                          task.status === "Completed" ? scss.completed : ""
                        }
                      >
                        {task.title}
                      </h3>

                      <button className={scss.more}>
                        <MoreHorizontal size={19} />
                      </button>
                    </div>

                    <p>{task.description}</p>

                    <div className={scss.taskMeta}>
                      <span className={scss.date}>
                        <CalendarDays size={14} />
                        {task.date}
                      </span>

                      <span
                        className={`${scss.priority} ${
                          scss[task.priority.toLowerCase()]
                        }`}
                      >
                        <Flag size={13} />
                        {task.priority}
                      </span>

                      <span
                        className={`${scss.status} ${
                          scss[task.status.toLowerCase().replace(" ", "")]
                        }`}
                      >
                        <Circle size={7} fill="currentColor" />
                        {task.status}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Today's focus */}
          <aside className={scss.focus}>
            <div className={scss.focusHeader}>
              <div>
                <span className={scss.eyebrow}>TODAY</span>
                <h2>Today's focus</h2>
              </div>

              <div className={scss.focusIcon}>
                <Check size={18} />
              </div>
            </div>

            <div className={scss.progress}>
              <div className={scss.progressInfo}>
                <span>Daily progress</span>
                <strong>68%</strong>
              </div>

              <div className={scss.progressBar}>
                <span />
              </div>
            </div>

            <div className={scss.focusTask}>
              <div className={scss.focusCheck}>
                <Check size={14} />
              </div>

              <div>
                <strong>Review today's emails</strong>
                <span>10:30 AM</span>
              </div>
            </div>

            <div className={scss.focusTask}>
              <div className={scss.focusCheck} />

              <div>
                <strong>Prepare presentation</strong>
                <span>2:00 PM</span>
              </div>
            </div>

            <button className={scss.aiButton}>
              <span>✦</span>
              Ask AI to organize my tasks
            </button>
          </aside>
        </section>
      </div>
    </main>
  );
};

export default Tasks;
