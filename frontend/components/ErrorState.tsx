"use client";

import "@/styles/errorState.css";
import { useRouter } from "next/navigation";

function ErrorState() {
  const router = useRouter();

  return (
    <div className="error-wrapper" role="alert" aria-live="assertive">
      <div className="error-icon" aria-hidden="true">
        ⚠
      </div>
      <h2 className="error-title">Something went wrong</h2>
      <p className="error-body">
        We couldn't load our services at this moment. Please try again shortly
        or contact support if the problem persists.
      </p>
      <button className="retry-btn" onClick={() => router.refresh()}>
        Try Again
      </button>
    </div>
  );
}

export default ErrorState;
