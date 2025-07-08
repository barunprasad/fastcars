export function SkipToMain() {
  return (
    <a
      href="#main-content"
      className="
            absolute top-0 left-0 
            -translate-y-full 
            px-4 py-2
            m-1 
            bg-transparent text-white 
            focus:translate-y-0 
            focus:outline-none 
            focus:ring-1 focus:ring-blue-400
            z-51
            transition-transform
          "
    >
      Skip to main content
    </a>
  );
}
