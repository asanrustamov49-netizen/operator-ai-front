"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react";

import scss from "./login.module.scss";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className={scss.login}>
      <section className={scss.card}>
        <div className={scss.logo}>
          <div className={scss.logoIcon}>AI</div>
          <span>Operator AI</span>
        </div>

        <div className={scss.heading}>
          <h1>Welcome back</h1>

          <p>Enter your details to access your workspace.</p>
        </div>

        <button className={scss.googleButton} type="button">
          <svg width="19" height="19" viewBox="0 0 24 24" aria-hidden="true">
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
          Continue with Google
        </button>

        <div className={scss.divider}>
          <span>or continue with email</span>
        </div>

        <form className={scss.form}>
          <div className={scss.field}>
            <label htmlFor="email">Email</label>

            <div className={scss.inputWrapper}>
              <Mail size={18} />

              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                autoComplete="email"
              />
            </div>
          </div>

          <div className={scss.field}>
            <div className={scss.passwordLabel}>
              <label htmlFor="password">Password</label>

              <Link href="/forgot-password">Forgot password?</Link>
            </div>

            <div className={scss.inputWrapper}>
              <Lock size={18} />

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
              />

              <button
                type="button"
                className={scss.passwordButton}
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button type="submit" className={scss.submitButton}>
            Sign in
            <ArrowRight size={18} />
          </button>
        </form>

        <p className={scss.signUp}>
          Don&apos;t have an account?
          <Link href="/register">Create account</Link>
        </p>
      </section>
    </main>
  );
};

export default Login;
