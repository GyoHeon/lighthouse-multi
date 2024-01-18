type TProps = {
  url: string;
  title: string;
  desc: string;
};

export const Menu = ({ url, title, desc }: TProps) => (
  <a
    href={url}
    className="group rounded-lg border border-gray-300 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2 className="mb-3 text-2xl font-semibold">
      {title}{" "}
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>
    </h2>
    <p className="m-0 max-w-[30ch] text-sm opacity-50">{desc}</p>
  </a>
);
