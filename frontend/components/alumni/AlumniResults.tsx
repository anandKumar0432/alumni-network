type Props = {
  page: number;
  total: number;
  pageSize?: number;
};

export default function AlumniResults({
  page,
  total,
  pageSize = 8,
}: Props) {
  if (total === 0) return null;

  const start = (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, total);

  return (
    <div className="mb-4 text-sm text-muted-foreground">
      Showing{" "}
      <span className="font-medium text-foreground">{start}</span>
      {" – "}
      <span className="font-medium text-foreground">{end}</span> of{" "}
      <span className="font-medium text-foreground">{total}</span> alumni
    </div>
  );
}
