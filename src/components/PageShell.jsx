export default function PageShell({ title, subtitle, children }) {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {(title || subtitle) && (
        <div className="mb-6 sm:mb-8">
          {title && (
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
              {title}
            </h1>
          )}
          {subtitle && <p className="mt-2 text-neutral-600">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
