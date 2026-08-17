import {
  Bell,
  Check,
  CheckCheck,
  ChevronRight,
  Clock3,
  Mail,
  MessageSquare,
  MoreHorizontal,
  Search,
  Settings,
  Sparkles,
  UserPlus,
} from "lucide-react";

import scss from "./notifications.module.scss";

const notifications = [
  {
    id: 1,
    type: "ai",
    title: "AI completed your task",
    description:
      'The task "Review today\'s emails" has been completed successfully.',
    time: "5 min ago",
    unread: true,
  },
  {
    id: 2,
    type: "message",
    title: "New message from Sarah",
    description: "Sarah mentioned you in the project discussion.",
    time: "24 min ago",
    unread: true,
  },
  {
    id: 3,
    type: "mail",
    title: "New email received",
    description: "You received a new email from the Marketing team.",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 4,
    type: "task",
    title: "Task deadline approaching",
    description:
      'Your task "Prepare project presentation" is due today at 14:00.',
    time: "2 hours ago",
    unread: false,
  },
];

const yesterdayNotifications = [
  {
    id: 5,
    type: "user",
    title: "New team member",
    description: "Alex joined your workspace.",
    time: "Yesterday, 18:42",
    unread: false,
  },
  {
    id: 6,
    type: "ai",
    title: "AI generated a daily summary",
    description: "Your daily workspace summary is ready to review.",
    time: "Yesterday, 17:20",
    unread: false,
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case "ai":
      return <Sparkles size={17} />;

    case "message":
      return <MessageSquare size={17} />;

    case "mail":
      return <Mail size={17} />;

    case "task":
      return <Clock3 size={17} />;

    case "user":
      return <UserPlus size={17} />;

    default:
      return <Bell size={17} />;
  }
};

const Notifications = () => {
  return (
    <main className={scss.page}>
      <div className={scss.container}>
        {/* Header */}
        <header className={scss.header}>
          <div>
            <span className={scss.eyebrow}>WORKSPACE</span>

            <h1>Notifications</h1>

            <p>Stay up to date with everything happening in your workspace.</p>
          </div>

          <button className={scss.markButton}>
            <CheckCheck size={17} />
            Mark all as read
          </button>
        </header>

        {/* Stats */}
        <section className={scss.stats}>
          <div className={`${scss.statCard} ${scss.active}`}>
            <div className={scss.statIcon}>
              <Bell size={18} />
            </div>

            <div>
              <span>All notifications</span>
              <strong>18</strong>
            </div>
          </div>

          <div className={scss.statCard}>
            <div className={scss.statIcon}>
              <Mail size={18} />
            </div>

            <div>
              <span>Unread</span>
              <strong>4</strong>
            </div>
          </div>

          <div className={scss.statCard}>
            <div className={scss.statIcon}>
              <MessageSquare size={18} />
            </div>

            <div>
              <span>Mentions</span>
              <strong>3</strong>
            </div>
          </div>
        </section>

        {/* Toolbar */}
        <section className={scss.toolbar}>
          <div className={scss.search}>
            <Search size={18} />

            <input placeholder="Search notifications..." />
          </div>

          <button className={`${scss.filterButton} ${scss.selected}`}>
            All
          </button>

          <button className={scss.filterButton}>Unread</button>

          <button className={scss.filterButton}>Mentions</button>
        </section>

        {/* Main content */}
        <section className={scss.content}>
          <div className={scss.notificationSection}>
            <div className={scss.sectionHeader}>
              <div>
                <h2>Today</h2>
                <span>4 notifications</span>
              </div>

              <button className={scss.moreButton}>
                <MoreHorizontal size={19} />
              </button>
            </div>

            <div className={scss.notificationList}>
              {notifications.map((notification) => (
                <article
                  key={notification.id}
                  className={`${scss.notification} ${
                    notification.unread ? scss.unread : ""
                  }`}
                >
                  <div className={`${scss.icon} ${scss[notification.type]}`}>
                    {getIcon(notification.type)}
                  </div>

                  <div className={scss.notificationBody}>
                    <div className={scss.notificationTop}>
                      <h3>{notification.title}</h3>

                      {notification.unread && (
                        <span className={scss.unreadDot} />
                      )}
                    </div>

                    <p>{notification.description}</p>

                    <span className={scss.time}>
                      <Clock3 size={12} />
                      {notification.time}
                    </span>
                  </div>

                  <button className={scss.notificationMore}>
                    <MoreHorizontal size={18} />
                  </button>
                </article>
              ))}
            </div>

            <div className={scss.sectionHeader}>
              <div>
                <h2>Yesterday</h2>
                <span>2 notifications</span>
              </div>

              <button className={scss.moreButton}>
                <MoreHorizontal size={19} />
              </button>
            </div>

            <div className={scss.notificationList}>
              {yesterdayNotifications.map((notification) => (
                <article key={notification.id} className={scss.notification}>
                  <div className={`${scss.icon} ${scss[notification.type]}`}>
                    {getIcon(notification.type)}
                  </div>

                  <div className={scss.notificationBody}>
                    <div className={scss.notificationTop}>
                      <h3>{notification.title}</h3>
                    </div>

                    <p>{notification.description}</p>

                    <span className={scss.time}>
                      <Clock3 size={12} />
                      {notification.time}
                    </span>
                  </div>

                  <button className={scss.notificationMore}>
                    <MoreHorizontal size={18} />
                  </button>
                </article>
              ))}
            </div>
          </div>

          {/* Settings */}
          <aside className={scss.settingsCard}>
            <div className={scss.settingsHeader}>
              <div className={scss.settingsIcon}>
                <Settings size={18} />
              </div>

              <div>
                <h2>Notification settings</h2>
                <p>Choose what you want to be notified about.</p>
              </div>
            </div>

            <div className={scss.setting}>
              <div>
                <strong>AI activity</strong>
                <span>Updates from your AI assistant</span>
              </div>

              <div className={`${scss.toggle} ${scss.on}`}>
                <span />
              </div>
            </div>

            <div className={scss.setting}>
              <div>
                <strong>Messages</strong>
                <span>New messages and mentions</span>
              </div>

              <div className={`${scss.toggle} ${scss.on}`}>
                <span />
              </div>
            </div>

            <div className={scss.setting}>
              <div>
                <strong>Tasks</strong>
                <span>Deadlines and task updates</span>
              </div>

              <div className={`${scss.toggle} ${scss.on}`}>
                <span />
              </div>
            </div>

            <div className={scss.setting}>
              <div>
                <strong>Email</strong>
                <span>Important email notifications</span>
              </div>

              <div className={scss.toggle}>
                <span />
              </div>
            </div>

            <button className={scss.manageButton}>
              Manage preferences
              <ChevronRight size={15} />
            </button>

            <div className={scss.aiNotice}>
              <div className={scss.aiNoticeIcon}>
                <Sparkles size={16} />
              </div>

              <div>
                <strong>AI smart notifications</strong>

                <p>
                  Operator AI can prioritize important notifications
                  automatically.
                </p>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
};

export default Notifications;
