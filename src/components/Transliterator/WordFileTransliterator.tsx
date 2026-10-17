import { useRef, useState } from "react";
import { AiOutlineFileWord } from "react-icons/ai";
import { downloadTransliteratedDocx } from "../../utils/SaveActions/transliterateDocx";
import "./WordFileTransliterator.css";

type WordFileTransliteratorProps = {
  processText: (text: string) => Promise<string>;
  fontName: string;
  alphabetName: string;
};

export default function WordFileTransliterator({
  processText,
  fontName,
  alphabetName,
}: WordFileTransliteratorProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "working" | "done" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  const onPick = () => inputRef.current?.click();

  const onFile = async (file: File | undefined) => {
    if (!file) return;
    if (!/\.(docx|odt)$/i.test(file.name)) {
      setStatus("error");
      setError("Please choose a .docx or .odt file.");
      setFileName(null);
      return;
    }

    setFileName(file.name);
    setStatus("working");
    setError(null);

    try {
      await downloadTransliteratedDocx(file, {
        processText,
        fontName,
      });
      setStatus("done");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Could not transliterate that document.",
      );
    } finally {
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <section
      className="wordFileTransliterator"
      aria-label="Document file transliteration"
    >
      <div className="wordFileTransliteratorHeader">
        <h3 className="wordFileTransliteratorTitle">
          Transliterate a document file
        </h3>
        <p className="wordFileTransliteratorHelp">
          Upload a .docx or .odt to convert its text to {alphabetName}.
          Paragraphs, spacing, and font sizes are kept; the output uses{" "}
          {fontName}.
        </p>
      </div>
      <div className="wordFileTransliteratorActions">
        <input
          ref={inputRef}
          type="file"
          accept=".docx,.odt,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.oasis.opendocument.text"
          hidden
          onChange={(e) => void onFile(e.target.files?.[0])}
        />
        <button
          type="button"
          className="wordFileTransliteratorButton"
          onClick={onPick}
          disabled={status === "working"}
        >
          <AiOutlineFileWord aria-hidden="true" />
          {status === "working" ? "Working…" : "Choose .docx / .odt"}
        </button>
        {fileName ? (
          <span className="wordFileTransliteratorFileName">{fileName}</span>
        ) : null}
      </div>
      {status === "done" ? (
        <p className="wordFileTransliteratorStatus is-success">
          Download started. Open the file with {fontName} installed to view the
          script.
        </p>
      ) : null}
      {status === "error" && error ? (
        <p className="wordFileTransliteratorStatus is-error" role="alert">
          {error}
        </p>
      ) : null}
    </section>
  );
}
