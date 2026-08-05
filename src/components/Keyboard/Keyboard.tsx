import { useState } from "react";
import styles from "./keyboard.module.css";
import { useKeyboardKeySize } from "../../contexts/KeyboardKeySizeContext";

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
  /** Called with Latin/phonetic text for the input field and the glyph for the output field. */
  onInsert: (payload: { inputValue: string; outputValue: string }) => void;
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
  const { keySize } = useKeyboardKeySize();
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
      onInsert({ inputValue: " ", outputValue: " " });
      if (shift) setShift(false);
      return;
    }

    const inputValue = useShifted
      ? (key.shiftValue ?? key.value ?? "")
      : (key.value ?? "");
    const outputValue = useShifted
      ? (key.shiftLabel ?? key.label)
      : key.label;
    if (inputValue || outputValue) {
      onInsert({ inputValue, outputValue });
    }
    if (shift) setShift(false);
  };

  const sizeClass =
    keySize === "small"
      ? styles.sizeSmall
      : keySize === "large"
        ? styles.sizeLarge
        : styles.sizeMedium;

  return (
    <div
      className={`${styles.keyboard} ${sizeClass} ${className}`.trim()}
      role="group"
      aria-label="On-screen keyboard"
    >
      {layout.map((row, rowIndex) => {
        const isLetterRow = row.every((key) => !key.action);
        return (
          <div
            key={rowIndex}
            className={isLetterRow ? styles.rowLetters : styles.row}
          >
            {row.map((key) => {
              const label = useShifted
                ? (key.shiftLabel ?? key.label)
                : key.label;
              const isActive =
                (key.action === "shift" && shift) ||
                (key.action === "caps" && caps);
              const isLetterKey = !key.action;

              return (
                <button
                  key={key.id}
                  type="button"
                  className={`${styles.key} ${isActive ? styles.keyActive : ""} ${
                    key.action ? styles.keyAction : styles.keyLetter
                  } ${fontClass}`.trim()}
                  style={isLetterKey ? undefined : { flex: key.width ?? 1 }}
                  onPointerDown={(event) => {
                    // Keep focus off the device soft keyboard / avoid stealing
                    // caret focus from the input on touch devices.
                    event.preventDefault();
                  }}
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
        );
      })}
    </div>
  );
}
