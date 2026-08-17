import { Bot, Send, User } from "lucide-react";

import scss from "./aiChat.module.scss";

const AiChat = () => {
  return (
    <main className={scss.page}>
      <div className={scss.chat}>
        {/* Header */}
        <header className={scss.header}>
          <div className={scss.aiIcon}>
            <Bot size={19} />
          </div>

          <div>
            <h1>AI Assistant</h1>
            <span>
              <i />
              Online
            </span>
          </div>
        </header>

        {/* Messages */}
        <div className={scss.messages}>
          <div className={`${scss.messageRow} ${scss.aiRow}`}>
            <div className={scss.messageIcon}>
              <Bot size={15} />
            </div>

            <div className={scss.message}>
              <p>Hello! 👋 I&apos;m your AI operator.</p>

              <span>10:42</span>
            </div>
          </div>

          <div className={`${scss.messageRow} ${scss.userRow}`}>
            <div className={`${scss.message} ${scss.userMessage}`}>
              <p>What can you help me with?</p>

              <span>10:43</span>
            </div>

            <div className={scss.userIcon}>
              <User size={15} />
            </div>
          </div>

          <div className={`${scss.messageRow} ${scss.aiRow}`}>
            <div className={scss.messageIcon}>
              <Bot size={15} />
            </div>

            <div className={scss.message}>
              <p>
                I can help you manage tasks, emails, notes, calendar events and
                other workspace activities.
              </p>

              <span>10:43</span>
            </div>
          </div>
        </div>

        {/* Input */}
        <form className={scss.inputArea}>
          <input type="text" placeholder="Message your AI assistant..." />

          <button type="submit" aria-label="Send message">
            <Send size={17} />
          </button>
        </form>
      </div>
    </main>
  );
};

export default AiChat;
