import { useState } from "react";
import styles from "./keyboard.module.css";

export type KeyboardKeyAction =
  | "shift"
  | "caps"
  | "backspace"
  | "space"
  | "enter";

export type KeyboardKey = {
  id: string;
  /** Label shown on the key (unshifted). */
  label: string;
  /** Value inserted when pressed (unshifted). */
  value?: string;
  /** Label shown when shift/caps is active. */
  shiftLabel?: string;
  /** Value inserted when shift/caps is active. */
  shiftValue?: string;
  /** Flex grow relative to a normal key (default 1). */
  width?: number;
  action?: KeyboardKeyAction;
};

export type KeyboardLayout = KeyboardKey[][];

type KeyboardProps = {
  layout: KeyboardLayout;
  onInsert: (value: string) => void;
  onBackspace?: () => void;
  onEnter?: () => void;
  /** Optional font class for key labels (e.g. deseret-font). */
  fontClass?: string;
  className?: string;
};

export default function Keyboard({
  layout,
  onInsert,
  onBackspace,
  onEnter,
  fontClass = "",
  className = "",
}: KeyboardProps) {
  const [shift, setShift] = useState(false);
  const [caps, setCaps] = useState(false);
  const useShifted = shift || caps;

  const handleKey = (key: KeyboardKey) => {
    if (key.action === "shift") {
      setShift((current) => !current);
      return;
    }
    if (key.action === "caps") {
      setCaps((current) => !current);
      setShift(false);
      return;
    }
    if (key.action === "backspace") {
      onBackspace?.();
      return;
    }
    if (key.action === "enter") {
      onEnter?.();
      return;
    }
    if (key.action === "space") {
      onInsert(" ");
      if (shift) setShift(false);
      return;
    }

    const value = useShifted
      ? (key.shiftValue ?? key.value ?? "")
      : (key.value ?? "");
    if (value) {
      onInsert(value);
    }
    if (shift) setShift(false);
  };

  return (
    <div className={`${styles.keyboard} ${className}`.trim()} role="group" aria-label="On-screen keyboard">
      {layout.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((key) => {
            const label = useShifted
              ? (key.shiftLabel ?? key.label)
              : key.label;
            const isActive =
              (key.action === "shift" && shift) ||
              (key.action === "caps" && caps);

            return (
              <button
                key={key.id}
                type="button"
                className={`${styles.key} ${isActive ? styles.keyActive : ""} ${
                  key.action ? styles.keyAction : ""
                } ${fontClass}`.trim()}
                style={{ flex: key.width ?? 1 }}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => handleKey(key)}
                aria-label={key.action ?? label}
                aria-pressed={
                  key.action === "shift" || key.action === "caps"
                    ? isActive
                    : undefined
                }
              >
                {label}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
