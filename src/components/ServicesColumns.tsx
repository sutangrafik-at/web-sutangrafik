export type ServiceColumn = {
  title: string;
  items: string[];
};

type ServicesColumnsProps = {
  columns: [ServiceColumn, ServiceColumn];
};

function ServiceColumnBlock({ column }: { column: ServiceColumn }) {
  return (
    <>
      <h2
        className="text-center font-bignoodle text-[34px] leading-[1.5em] text-accent"
        style={{ letterSpacing: '0.35em' }}
      >
        {column.title}
      </h2>
      <p className="text-center text-[16px] leading-[0.5em]">&nbsp;</p>
      {column.items.map((item) => (
        <p
          key={item}
          className="text-center font-[var(--font-worksans)] text-[16px] font-bold leading-[1.5em] text-accent"
          style={{ letterSpacing: 0 }}
        >
          {item}
        </p>
      ))}
      <p className="text-center text-[16px] leading-[1.5em]">&nbsp;</p>
      <p className="text-center text-[16px] leading-[1.5em]">&nbsp;</p>
    </>
  );
}

export default function ServicesColumns({ columns }: ServicesColumnsProps) {
  return (
    <>
      <div className="relative mx-auto hidden h-[237px] w-full max-w-[980px] md:block">
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
