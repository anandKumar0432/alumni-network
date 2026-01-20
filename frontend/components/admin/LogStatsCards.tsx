type Props = {
    stats: any | null;
    loading: boolean;
};

export default function LogstatsCards({ stats, loading }: Props) {
    if (loading || !stats) {
        return (
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-24 bg-gray-100 animate-pulse rounded-xl" />
        ))}
      </div>
    );
  }

  const cards = [
    { label: "Total Logs", value: stats.totalLogs },
    { label: "Today", value: stats.todayLogs },
    { label: "Approved", value: stats.approvedCount },
    { label: "Rejected", value: stats.rejectedCount },
    // { label: "Pending Users", value: stats.pendingUsers },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {cards.map((c) => (
        <div
          key={c.label}
          className="bg-white rounded-xl p-4 shadow-sm border"
        >
          <p className="text-sm text-gray-500">{c.label}</p>
          <p className="text-2xl font-semibold text-gray-900 mt-1">
            {c.value}
          </p>
        </div>
      ))}
    </div>
  );
}