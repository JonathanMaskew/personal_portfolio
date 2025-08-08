type ChipsProps = {
  strings: Array<string>;
};

export default function Chips({ strings }: ChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {strings.map((chipText, index) => (
        <div
          key={index}
          className="px-3 py-1.5 bg-white/20 text-xs rounded-full text-nowrap"
        >
          {chipText}
        </div>
      ))}
    </div>
  );
}
