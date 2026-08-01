export type ServiceColumn = {
  title: string;
  items: string[];
};

type ServicesColumnsProps = {
  columns: [ServiceColumn, ServiceColumn];
};

function ServiceColumnBlock({ column }: { column: ServiceColumn }) {
  const guards = Array.from({ length: 6 - column.items.length }, (_, index) => (
    <p
      key={`guard-${index}`}
      className="text-accent text-center text-[16px] leading-[1.14em]"
      aria-hidden="true"
    >
      &nbsp;
    </p>
  ));
  return (
    <>
      <h2
        className="font-bignoodle text-accent text-center text-[34px] leading-[1.15em]"
        style={{ letterSpacing: '0.35em' }}
      >
        {column.title}
      </h2>
      <p className="text-center text-[16px] leading-[0.5em]">&nbsp;</p>
      {column.items.map((item) => (
        <p
          key={item}
          className="text-accent text-center text-[16px] leading-[1.14em] font-[var(--font-worksans)] font-extralight"
          style={{ letterSpacing: 0 }}
        >
          {item}
        </p>
      ))}
      {guards}
    </>
  );
}

export default function ServicesColumns({ columns }: ServicesColumnsProps) {
  return (
    <>
      <div className="relative mx-auto hidden h-[160px] w-full max-w-[980px] md:block">
        {columns.map((column, index) => (
          <div
            key={column.title}
            className={`absolute top-0 w-[310px] ${index === 0 ? 'left-[140px]' : 'left-[631px]'}`}
          >
            <ServiceColumnBlock column={column} />
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-8 px-4 py-8 md:hidden">
        {columns.map((column) => (
          <div key={column.title} className="w-full max-w-[310px]">
            <ServiceColumnBlock column={column} />
          </div>
        ))}
      </div>
    </>
  );
}
