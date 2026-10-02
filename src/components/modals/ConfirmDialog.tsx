export function ConfirmDialog({
  message,
  confirmLabel,
  onCancel,
  onConfirm,
}: {
  message: string;
  confirmLabel: string;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <div className="overlay" role="dialog" aria-modal="true">
      <div className="panel">
        <p>{message}</p>
        <div className="button-row">
          <button type="button" className="btn btn-outline" onClick={onCancel}>Cancelar</button>
          <button type="button" className="btn btn-primary" onClick={onConfirm}>{confirmLabel}</button>
        </div>
      </div>
    </div>
  );
}
