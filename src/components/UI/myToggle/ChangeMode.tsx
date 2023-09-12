"use client";

import useTheme from "@/hooks/useTheme";

import styles from './ChangeMode.module.css'

export const ChangeMode = () => {
  const { isDark, setIsDark } = useTheme();

  return (
    <div className={styles.div}>
      <button
      className={styles.button}
        onClick={() => setIsDark(!isDark)}
      >
        {isDark ? "🌙" : "☀️"}
      </button>
    </div>
  );
};
