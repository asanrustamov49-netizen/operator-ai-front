import {
  Bell,
  Bot,
  ChevronRight,
  Globe,
  KeyRound,
  Moon,
  Palette,
  ShieldCheck,
  Sparkles,
  Sun,
  Trash2,
  User,
} from "lucide-react";

import scss from "./settings.module.scss";

const Settings = () => {
  return (
    <main className={scss.page}>
      <div className={scss.container}>
        {/* Header */}
        <header className={scss.header}>
          <div>
            <span className={scss.eyebrow}>WORKSPACE</span>

            <h1>Settings</h1>

            <p>Manage your account, workspace and AI preferences.</p>
          </div>
        </header>

        <div className={scss.layout}>
          {/* Sidebar navigation */}
          <aside className={scss.navigation}>
            <button className={`${scss.navItem} ${scss.active}`}>
              <User size={17} />
              <span>Profile</span>
            </button>

            <button className={scss.navItem}>
              <Palette size={17} />
              <span>Appearance</span>
            </button>

            <button className={scss.navItem}>
              <Bot size={17} />
              <span>AI Assistant</span>
            </button>

            <button className={scss.navItem}>
              <Bell size={17} />
              <span>Notifications</span>
            </button>

            <button className={scss.navItem}>
              <ShieldCheck size={17} />
              <span>Security</span>
            </button>
          </aside>

          {/* Settings content */}
          <div className={scss.content}>
            {/* Profile */}
            <section className={scss.section}>
              <div className={scss.sectionHeader}>
                <div className={scss.sectionIcon}>
                  <User size={18} />
                </div>

                <div>
                  <h2>Profile</h2>
                  <p>Your personal information and account details.</p>
                </div>
              </div>

              <div className={scss.profile}>
                <div className={scss.avatar}>AS</div>

                <div className={scss.profileInfo}>
                  <strong>Asan Rustamov</strong>
                  <span>Change profile picture</span>
                </div>

                <button className={scss.secondaryButton}>Change</button>
              </div>

              <div className={scss.formGrid}>
                <div className={scss.field}>
                  <label>First name</label>

                  <input type="text" defaultValue="Asan" />
                </div>

                <div className={scss.field}>
                  <label>Last name</label>

                  <input type="text" defaultValue="Rustamov" />
                </div>

                <div className={`${scss.field} ${scss.full}`}>
                  <label>Email address</label>

                  <input type="email" defaultValue="asan@example.com" />
                </div>
              </div>
            </section>

            {/* Appearance */}
            <section className={scss.section}>
              <div className={scss.sectionHeader}>
                <div className={scss.sectionIcon}>
                  <Palette size={18} />
                </div>

                <div>
                  <h2>Appearance</h2>
                  <p>Customize how Operator AI looks for you.</p>
                </div>
              </div>

              <div className={scss.appearance}>
                <button className={`${scss.themeCard} ${scss.themeActive}`}>
                  <div className={scss.lightPreview}>
                    <div />
                    <div />
                    <div />
                  </div>

                  <div className={scss.themeName}>
                    <Sun size={15} />
                    Light
                  </div>
                </button>

                <button className={scss.themeCard}>
                  <div className={scss.darkPreview}>
                    <div />
                    <div />
                    <div />
                  </div>

                  <div className={scss.themeName}>
                    <Moon size={15} />
                    Dark
                  </div>
                </button>

                <button className={scss.themeCard}>
                  <div className={scss.systemPreview}>
                    <div />
                    <div />
                    <div />
                  </div>

                  <div className={scss.themeName}>
                    <Globe size={15} />
                    System
                  </div>
                </button>
              </div>
            </section>

            {/* AI Assistant */}
            <section className={scss.section}>
              <div className={scss.sectionHeader}>
                <div className={scss.sectionIcon}>
                  <Sparkles size={18} />
                </div>

                <div>
                  <h2>AI Assistant</h2>
                  <p>Configure how your AI operator behaves.</p>
                </div>
              </div>

              <div className={scss.settingRow}>
                <div>
                  <strong>Smart suggestions</strong>

                  <span>Let AI suggest actions based on your activity.</span>
                </div>

                <div className={`${scss.toggle} ${scss.on}`}>
                  <span />
                </div>
              </div>

              <div className={scss.settingRow}>
                <div>
                  <strong>Automatic task creation</strong>

                  <span>
                    Allow AI to create tasks from emails and messages.
                  </span>
                </div>

                <div className={`${scss.toggle} ${scss.on}`}>
                  <span />
                </div>
              </div>

              <div className={scss.settingRow}>
                <div>
                  <strong>Daily AI summary</strong>

                  <span>
                    Receive a summary of your workspace every morning.
                  </span>
                </div>

                <div className={scss.toggle}>
                  <span />
                </div>
              </div>
            </section>

            {/* Notifications */}
            <section className={scss.section}>
              <div className={scss.sectionHeader}>
                <div className={scss.sectionIcon}>
                  <Bell size={18} />
                </div>

                <div>
                  <h2>Notifications</h2>
                  <p>Control how and when you receive notifications.</p>
                </div>
              </div>

              <div className={scss.settingRow}>
                <div>
                  <strong>Email notifications</strong>

                  <span>Receive important updates by email.</span>
                </div>

                <div className={`${scss.toggle} ${scss.on}`}>
                  <span />
                </div>
              </div>

              <div className={scss.settingRow}>
                <div>
                  <strong>Task reminders</strong>

                  <span>Get reminded about upcoming deadlines.</span>
                </div>

                <div className={`${scss.toggle} ${scss.on}`}>
                  <span />
                </div>
              </div>

              <div className={scss.settingRow}>
                <div>
                  <strong>AI activity</strong>

                  <span>Get notified when AI completes an action.</span>
                </div>

                <div className={scss.toggle}>
                  <span />
                </div>
              </div>
            </section>

            {/* Security */}
            <section className={scss.section}>
              <div className={scss.sectionHeader}>
                <div className={scss.sectionIcon}>
                  <ShieldCheck size={18} />
                </div>

                <div>
                  <h2>Security</h2>
                  <p>Protect your account and manage access.</p>
                </div>
              </div>

              <button className={scss.actionRow}>
                <div className={scss.actionIcon}>
                  <KeyRound size={17} />
                </div>

                <div>
                  <strong>Change password</strong>

                  <span>Update your account password.</span>
                </div>

                <ChevronRight size={17} />
              </button>

              <button className={scss.actionRow}>
                <div className={scss.actionIcon}>
                  <ShieldCheck size={17} />
                </div>

                <div>
                  <strong>Two-factor authentication</strong>

                  <span>Add an additional layer of security.</span>
                </div>

                <span className={scss.securityStatus}>Disabled</span>
              </button>
            </section>

            {/* Save */}
            <div className={scss.saveBar}>
              <span>Your changes have not been saved yet.</span>

              <div>
                <button className={scss.cancelButton}>Cancel</button>

                <button className={scss.saveButton}>Save changes</button>
              </div>
            </div>

            {/* Danger zone */}
            <section className={`${scss.section} ${scss.danger}`}>
              <div className={scss.sectionHeader}>
                <div className={scss.dangerIcon}>
                  <Trash2 size={18} />
                </div>

                <div>
                  <h2>Danger zone</h2>
                  <p>These actions can permanently affect your account.</p>
                </div>
              </div>

              <div className={scss.dangerRow}>
                <div>
                  <strong>Delete account</strong>

                  <span>
                    Permanently delete your account and all associated data.
                  </span>
                </div>

                <button className={scss.deleteButton}>Delete account</button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Settings;
