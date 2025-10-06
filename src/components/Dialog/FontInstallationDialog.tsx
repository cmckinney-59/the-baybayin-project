interface FontInstallationDialogProps {
  onClose: () => void;
  onConfirm: () => void;
}

export default function FontInstallationDialog({
  onClose,
  onConfirm,
}: FontInstallationDialogProps) {
  return (
    <dialog className="dialog-overlay" open>
      <div className="dialog-box">
        <div className="dialog-header">
          <div className="dialog-header-top-row">
            <button onClick={onClose}>x</button>
            <h3>Font Installation Required</h3>
          </div>
        </div>
        <div className="dialog-content">
          <p>
            Font must be downloaded and installed to render properly in Word and
            Excel. See the How To Use section for more information.
          </p>
          <div className="dialog-buttons">
            <button className="confirm-button" onClick={onConfirm}>
              Okay
            </button>
            <button className="confirm-button" onClick={onConfirm}>
              Download Font
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
