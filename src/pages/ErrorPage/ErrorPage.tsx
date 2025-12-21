import {
  useRouteError,
  useNavigate,
  isRouteErrorResponse,
} from "react-router-dom";
import { AiOutlineHome, AiOutlineReload } from "react-icons/ai";
import "./ErrorPage.css";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  let errorMessage = "An unexpected error occurred";
  let errorStatus: number | undefined;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorMessage = error.statusText || error.data?.message || errorMessage;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div className="error-page">
      <div className="error-content">
        <h1 className="error-title">
          {errorStatus ? `${errorStatus}` : "Oops!"}
        </h1>
        <h2 className="error-subtitle">
          {errorStatus === 404 ? "Page Not Found" : "Something went wrong"}
        </h2>
        <p className="error-message">{errorMessage}</p>
        <div className="error-actions">
          <button
            className="error-button"
            onClick={() => navigate("/")}
            aria-label="Go to home page"
          >
            <AiOutlineHome className="error-button-icon" />
            Go Home
          </button>
          <button
            className="error-button secondary"
            onClick={() => window.location.reload()}
            aria-label="Reload page"
          >
            <AiOutlineReload className="error-button-icon" />
            Reload
          </button>
        </div>
      </div>
    </div>
  );
}
