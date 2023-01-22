export type Props = {
  header: string;
  content: string | number;
};

export function Card({ header, content }: Props) {
  return (
    <div className="flex flex-col justify-between w-full border rounded-lg p-5 shadow-sm border-t-nord7 border-t-4">
      <h1 className="text-md text-nord2">{header}</h1>
      <h2 className="text-3xl font-bold text-nord3">{content}</h2>
    </div>
  );
}
