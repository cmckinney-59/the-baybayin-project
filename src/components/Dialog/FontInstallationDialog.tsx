interface FontInstallationDialogProps {
  onClose: () => void;
  onConfirm: () => void;
}

export default function FontInstallationDialog({
  onConfirm,
}: FontInstallationDialogProps) {
  return (
    <dialog className="dialog-overlay" open>
      <div className="dialog-box">
        <div className="dialog-header">
          <div className="dialog-header-top-row">
            <h3>Font Required</h3>
          </div>
        </div>
        <div className="dialog-content">
          <p>
            Font must be downloaded and installed to work properly in Word and
            Excel. See the How To Use section for more information.
          </p>
          <div className="dialog-buttons">
            <button className="cancel-button" onClick={onConfirm}>
              Okay
            </button>
            <button className="confirm-button" onClick={onConfirm}>
              Download
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
