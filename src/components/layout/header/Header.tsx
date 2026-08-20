"use client";
import { Bell, PanelLeft, Search } from "lucide-react";
import scss from "./header.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const { push } = useRouter();
  return (
    <header className={scss.container}>
      {/* <div className="container"> */}
        <div className={scss.mainContainer}>
          <div onClick={() => push("/")} className={scss.logo1}>
            <Image
              className={scss.image}
              src="/operator.png"
              alt="operator ai"
              width={40}
              height={40}
            />
            <h2>Operator</h2>
          </div>
          <div className={scss.actions}>
            <button
              className={scss.searchButton}
              type="button"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => push("/notifications")}
              className={scss.notificationButton}
              type="button"
            >
              <Bell size={20} />
            </button>
            <button className={scss.googleButton} type="button">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="#4285F4"
                  d="M21.35 12.27c0-.79-.07-1.55-.2-2.27H12v4.3h5.23a4.47 4.47 0 0 1-1.94 2.93v2.79h3.14c1.84-1.69 2.92-4.19 2.92-7.75Z"
                />
                <path
                  fill="#34A853"
                  d="M12 21.75c2.62 0 4.82-.87 6.43-2.36l-3.14-2.79c-.87.58-1.99.92-3.29.92-2.53 0-4.67-1.71-5.44-4.01H3.31v2.88A9.72 9.72 0 0 0 12 21.75Z"
                />
                <path
                  fill="#FBBC05"
                  d="M6.56 13.51A5.85 5.85 0 0 1 6.25 12c0-.52.09-1.02.31-1.51V7.61H3.31A9.75 9.75 0 0 0 2.25 12c0 1.57.38 3.05 1.06 4.39l3.25-2.88Z"
                />
                <path
                  fill="#EA4335"
                  d="M12 6.48c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.81 3.55 14.62 2.25 12 2.25a9.72 9.72 0 0 0-8.69 5.36l3.25 2.88c.77-2.3 2.91-4.01 5.44-4.01Z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>
        </div>
      {/* </div> */}
    </header>
  );
};

export default Header;
