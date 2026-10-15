interface PreviewDialogProps {
  fileUrl: string;
  onClose: () => void;
}

function isImageUrl(fileUrl: string): boolean {
  return /\.(png|jpe?g|gif|webp|svg)(\?|#|$)/i.test(fileUrl);
}

export default function PreviewDialog({
  fileUrl,
  onClose,
}: PreviewDialogProps) {
  const imagePreview = isImageUrl(fileUrl);

  return (
    <dialog className="dialog-overlay" open>
      <div className="dialog-box">
        <div className="dialog-header">
          <div className="dialog-header-top-row">
            <h3>Preview</h3>
          </div>
        </div>
        <div className="dialog-content">
          {imagePreview ? (
            <img src={fileUrl} alt="Preview" className="dialog-preview-image" />
          ) : (
            <iframe src={fileUrl} title="Preview" />
          )}
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
