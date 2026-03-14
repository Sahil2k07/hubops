import "@/styles/loadingState.css";

function LoadingState() {
  return (
    <section aria-busy="true" aria-label="Loading services…">
      <div className="skeleton-grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="skeleton-card" />
        ))}
      </div>
    </section>
  );
}

export default LoadingState;
