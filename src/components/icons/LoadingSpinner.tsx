export function LoadingSpinner() {
  return (
    <svg
      className="animate-spin h-12 w-12 text-primary"
      viewBox="0 0 50 50"
      role="status"
      aria-label="Carregando"
    >
      <circle
        className="opacity-25"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
      <circle
        className="opacity-75"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="30 130"
        strokeDashoffset="35"
      />
    </svg>
  );
}
