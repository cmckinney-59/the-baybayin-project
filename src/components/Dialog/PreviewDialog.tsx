interface PreviewDialogProps {
  fileUrl: string;
  onClose: () => void;
}

export default function PreviewDialog({
  fileUrl,
  onClose,
}: PreviewDialogProps) {
  return (
    <dialog className="dialog-overlay" open>
      <div className="dialog-box">
        <div className="dialog-header">
          <div className="dialog-header-top-row">
            <h3>Preview</h3>
          </div>
        </div>
        <div className="dialog-content">
          <iframe src={fileUrl} title="Preview" />
        </div>
        <div className="dialog-buttons">
          <button className="confirm-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
}
