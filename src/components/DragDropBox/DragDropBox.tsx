import { useState } from "react";

interface DragDropBoxProps {
  onFileLoad: (fileContent: string) => void;
  accept?: string;
  fileType?: string;
}

export default function DragDropBox({
  onFileLoad,
  accept = ".txt,text/plain",
  fileType = ".txt",
}: DragDropBoxProps) {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type === "text/plain" || file.name.endsWith(fileType)) {
        try {
          const fileContent = await file.text();
          onFileLoad(fileContent);
        } catch (error) {
          console.error("Error reading file:", error);
        }
      } else {
        alert(`Please drop a text file (${fileType})`);
      }
    }
  };

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type === "text/plain" || file.name.endsWith(fileType)) {
        try {
          const fileContent = await file.text();
          onFileLoad(fileContent);
        } catch (error) {
          console.error("Error reading file:", error);
        }
      } else {
        alert(`Please select a text file (${fileType})`);
      }
    }
  };

  return (
    <div
      className={`drag-drop-box ${isDragging ? "drag-over" : ""}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="drag-drop-content">
        <p className="drag-drop-text">
          Drag and drop a text file here, or{" "}
          <label className="drag-drop-label">
            <input
              type="file"
              accept={accept}
              onChange={handleFileInput}
              style={{ display: "none" }}
            />
            <span className="drag-drop-link">browse</span>
          </label>
        </p>
      </div>
    </div>
  );
}
