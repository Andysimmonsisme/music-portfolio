function Projects() {
  return (
    <nav aria-label="Projects Navigation" className="py-2">
      <ul className="space-y-2">
        <li>
          <button
            className="w-full px-4 py-2 text-lg border bg-primary rounded-md"
          >
            STEV
          </button>
        </li>
        <li>
          <button
            className="w-full px-4 py-2 text-lg border hover:bg-hover rounded-md"
          >
            Touch the Sky
          </button>
        </li>
        <li>
          <button
            className="w-full px-4 py-2 text-lg border hover:bg-hover rounded-md"
          >
            Andy Simmons
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Projects;
