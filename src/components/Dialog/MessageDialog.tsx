interface MessageDialogProps {
  message: string;
  onClose: () => void;
}

export default function MessageDialog({
  message,
  onClose,
}: MessageDialogProps) {
  return (
    <dialog className="dialog-overlay" open>
      <div className="dialog-box">
        <div className="dialog-header">
          <div className="dialog-header-top-row">
            <h3>Notice</h3>
          </div>
        </div>
        <div className="dialog-content">
          <p>{message}</p>
          <div className="dialog-buttons">
            <button className="confirm-button" onClick={onClose}>
              Okay
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
