type ChipsProps = {
  strings: Array<string>;
  color?: string;
};

export default function Chips({ strings, color }: ChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {strings.map((chipText, index) => (
        <div
          key={index}
          className="px-3 py-1.5 text-xs rounded-full text-nowrap bg-black/20"
          style={color ? { background: color } : undefined}
        >
          {chipText}
        </div>
      ))}
    </div>
  );
}
