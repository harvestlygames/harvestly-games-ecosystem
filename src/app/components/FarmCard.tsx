interface Props {
  title: string;
  level: number;
}

export default function FarmCard({
  title,
  level
}: Props) {
  return (
    <div className="border rounded-xl p-5">
      <h2 className="text-xl font-bold">
        {title}
      </h2>

      <p>Farm Level: {level}</p>
    </div>
  );
}
