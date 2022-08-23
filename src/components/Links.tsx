const Links = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <a
        href={'https://github.com/ilyasudakov'}
        className="rounded bg-stone-600 px-4 py-2"
        target="_blank"
        rel="noreferrer noopener"
      >
        Github
      </a>
      <button className="rounded bg-stone-600 px-4 py-2">
        Customize links
      </button>
    </div>
  );
};

export default Links;
