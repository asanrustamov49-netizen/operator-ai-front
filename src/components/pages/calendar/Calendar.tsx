import scss from "./calendar.module.scss";

const tasks = [
  {
    id: 1,
    time: "09:00",
    title: "Team meeting",
    description: "Discuss today's tasks and priorities",
  },
  {
    id: 2,
    time: "11:00",
    title: "Work on Operator AI",
    description: "Continue developing the Calendar page",
  },
  {
    id: 3,
    time: "14:00",
    title: "AI Chat research",
    description: "Think about new features for AI Chat",
  },
  {
    id: 4,
    time: "17:00",
    title: "Review tasks",
    description: "Check completed tasks and plan tomorrow",
  },
];

const hours = Array.from({ length: 12 }, (_, index) => index + 8);

const Calendar = () => {
  return (
    <main className={scss.calendar}>
      <div className={scss.top}>
        <div>
          <p className={scss.subtitle}>Your schedule</p>
          <h1>Calendar</h1>
        </div>

        <button className={scss.addButton}>+ Add task</button>
      </div>

      <div className={scss.dateNavigation}>
        <button className={scss.arrow}>←</button>

        <div className={scss.today}>
          <span>Monday</span>
          <strong>August 17, 2026</strong>
        </div>

        <button className={scss.arrow}>→</button>
      </div>

      <section className={scss.calendarBox}>
        <div className={scss.dayHeader}>
          <span>Time</span>

          <div>
            <span className={scss.dayName}>MONDAY</span>
            <strong className={scss.dayNumber}>17</strong>
          </div>
        </div>

        <div className={scss.hours}>
          {hours.map((hour) => {
            const task = tasks.find(
              (task) => Number(task.time.split(":")[0]) === hour,
            );

            return (
              <div className={scss.hour} key={hour}>
                <div className={scss.time}>
                  {String(hour).padStart(2, "0")}:00
                </div>

                <div className={scss.slot}>
                  {task && (
                    <div className={scss.task}>
                      <strong>{task.title}</strong>
                      <span>{task.description}</span>
                      <small>{task.time}</small>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Calendar;
