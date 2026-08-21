"use client";

import { FormEvent, useState } from "react";
import {
  ArrowLeft,
  Bot,
  ImagePlus,
  MessageCircle,
  Plus,
  Send,
  Sparkles,
} from "lucide-react";

import scss from "./aiChat.module.scss";

type Screen = "welcome" | "chat" | "history";

interface ChatItem {
  id: number;
  title: string;
}

const AiChat = () => {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [message, setMessage] = useState("");

  const [chats, setChats] = useState<ChatItem[]>([]);

  const [currentChat, setCurrentChat] = useState<ChatItem | null>(null);

  const createChat = () => {
    setCurrentChat(null);
    setScreen("chat");
    setMessage("");
  };

  const openChat = (chat: ChatItem) => {
    setCurrentChat(chat);
    setScreen("chat");
    setMessage("");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = message.trim();

    if (!text) return;

    // Если это новый пустой чат —
    // создаём его только после первого сообщения
    if (!currentChat) {
      const newChat = {
        id: Date.now(),
        title: text.length > 28 ? `${text.slice(0, 28)}...` : text,
      };

      setChats((prev) => [newChat, ...prev]);
      setCurrentChat(newChat);
    }

    setMessage("");
    setScreen("chat");
  };

  return (
    <main className={scss.page}>
      <section className={scss.chat}>
        {/* ================= WELCOME ================= */}

        {screen === "welcome" && (
          <>
            <header className={scss.welcomeHeader}>
              <div className={scss.brand}>
                <div className={scss.brandIcon}>
                  <Bot size={22} />
                </div>

                <span>AI Assistant</span>
              </div>

              <button
                className={scss.historyButton}
                onClick={() => setScreen("history")}
              >
                <MessageCircle size={18} />
                Chats
              </button>
            </header>

            <div className={scss.welcome}>
              <div className={scss.welcomeIcon}>
                <Sparkles size={30} />
              </div>

              <h1>What can I help you with?</h1>

              <p>
                Ask questions, manage your workspace, create ideas and more.
              </p>

              <div className={scss.actions}>
                <button className={scss.actionCard} onClick={createChat}>
                  <div className={scss.actionIcon}>
                    <MessageCircle size={21} />
                  </div>

                  <div>
                    <h3>Create chat</h3>
                    <span>Start a new conversation</span>
                  </div>
                </button>

                <button className={scss.actionCard} onClick={createChat}>
                  <div className={scss.actionIcon}>
                    <ImagePlus size={21} />
                  </div>

                  <div>
                    <h3>Create image</h3>
                    <span>Turn your ideas into images</span>
                  </div>
                </button>

                <button className={scss.actionCard} onClick={createChat}>
                  <div className={scss.actionIcon}>
                    <Sparkles size={21} />
                  </div>

                  <div>
                    <h3>Manage workspace</h3>
                    <span>Tasks, notes, calendar and more</span>
                  </div>
                </button>
              </div>
            </div>

            <ChatInput
              message={message}
              setMessage={setMessage}
              onSubmit={handleSubmit}
              placeholder="Ask anything..."
            />
          </>
        )}

        {/* ================= CHAT ================= */}

        {screen === "chat" && (
          <>
            <header className={scss.chatHeader}>
              <button
                className={scss.backButton}
                onClick={() => setScreen("history")}
                aria-label="Back to chats"
              >
                <ArrowLeft size={21} />
              </button>

              <div className={scss.chatTitle}>
                <div className={scss.smallBotIcon}>
                  <Bot size={17} />
                </div>

                <div>
                  <h2>{currentChat?.title || "New chat"}</h2>
                  <span>AI Assistant</span>
                </div>
              </div>

              <button className={scss.newChatButton} onClick={createChat}>
                <Plus size={18} />
                New chat
              </button>
            </header>

            <div className={scss.emptyChat}>
              <div className={scss.emptyBot}>
                <Bot size={30} />
              </div>

              <h1>{currentChat?.title || "New chat"}</h1>

              <p>This is a new conversation. Send a message to get started.</p>
            </div>

            <ChatInput
              message={message}
              setMessage={setMessage}
              onSubmit={handleSubmit}
              placeholder="Message AI Assistant..."
            />
          </>
        )}

        {/* ================= HISTORY ================= */}

        {screen === "history" && (
          <>
            <header className={scss.historyHeader}>
              <button
                className={scss.backButton}
                onClick={() => setScreen("welcome")}
                aria-label="Back"
              >
                <ArrowLeft size={21} />
              </button>

              <h1>Recent chats</h1>
            </header>

            <div className={scss.history}>
              <button className={scss.createChatButton} onClick={createChat}>
                <Plus size={18} />
                New chat
              </button>

              <span className={scss.historyLabel}>RECENT</span>

              <div className={scss.chatList}>
                {chats.map((chat) => (
                  <button
                    key={chat.id}
                    className={scss.chatItem}
                    onClick={() => openChat(chat)}
                  >
                    <div className={scss.chatItemIcon}>
                      <MessageCircle size={18} />
                    </div>

                    <span>{chat.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

interface ChatInputProps {
  message: string;
  setMessage: (value: string) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  placeholder: string;
}

const ChatInput = ({
  message,
  setMessage,
  onSubmit,
  placeholder,
}: ChatInputProps) => {
  return (
    <form className={scss.inputArea} onSubmit={onSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={placeholder}
      />

      <button
        type="submit"
        aria-label="Send message"
        disabled={!message.trim()}
      >
        <Send size={18} />
      </button>
    </form>
  );
};

export default AiChat;
