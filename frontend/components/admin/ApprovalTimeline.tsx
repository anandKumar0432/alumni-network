import { CheckCircle, XCircle } from "lucide-react";
import ApprovalLogSkeleton from "./ApprovalLogSkeleton";

type Props = {
  logs: any[];
  loading: boolean;
  onSelectUser: (id: string) => void;

  // optional (only for bulk/select mode)
  selectedIds?: string[];
  onToggleSelect?: (id: string) => void;
};

function isSameDay(a: Date, b: Date) {
  return (
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear()
  );
}

function groupLogsByDate(logs: any[]) {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const groups: Record<string, any[]> = {};

  logs.forEach((log) => {
    const logDate = new Date(log.createdAt);

    let label = "";

    if (isSameDay(logDate, today)) {
      label = "Today";
    } else if (isSameDay(logDate, yesterday)) {
      label = "Yesterday";
    } else {
      label = logDate.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    }

    if (!groups[label]) groups[label] = [];
    groups[label].push(log);
  });

  return groups;
}

export default function ApprovalTimeline({
  logs,
  loading,
  onSelectUser,
  selectedIds,
  onToggleSelect,
}: Props) {
  if (loading) {
    return (
      <div className="bg-white border rounded-xl p-6">
        <ol className="relative border-l border-gray-200 space-y-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <ApprovalLogSkeleton key={i} />
          ))}
        </ol>
      </div>
    );
  }

  if (logs.length === 0) {
    return (
      <div className="bg-white border rounded-xl p-6 text-gray-500 text-center">
        No approval logs yet.
      </div>
    );
  }

  const groupedLogs = groupLogsByDate(logs);

  return (
    <div className="bg-white border rounded-xl p-6">
      <ol className="relative border-l border-gray-200 space-y-10">
        {Object.entries(groupedLogs).map(([date, items]) => (
          <div key={date} className="space-y-6">
            <div className="ml-6 text-sm font-semibold text-gray-500">
              {date}
            </div>

            {items.map((log) => {
              const approved = log.newStatus === "VERIFIED";
              const isSelected = selectedIds?.includes(log.targetId);

              return (
                <li key={log.id} className="ml-6">
                  <span
                    className={`absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full ring-8 ring-white
                    ${approved ? "bg-green-100" : "bg-red-100"}`}
                  >
                    {approved ? (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-600" />
                    )}
                  </span>

                  {/* Card */}
                  <div
                    onClick={() => onSelectUser(log.targetId)}
                    className={`p-4 rounded-xl border space-y-1 cursor-pointer transition
                      ${
                        isSelected
                          ? "bg-blue-50 border-blue-300"
                          : "bg-gray-50 hover:bg-gray-100"
                      }`}
                  >
                    {/* Checkbox (only if bulk mode enabled) */}
                    {onToggleSelect && (
                      <div className="flex items-center gap-2 mb-2">
                        <input
                          type="checkbox"
                          checked={!!isSelected}
                          onClick={(e) => e.stopPropagation()}
                          onChange={() => onToggleSelect(log.targetId)}
                          className="h-4 w-4 accent-blue-600"
                        />
                        <span className="text-xs text-gray-500">Select</span>
                      </div>
                    )}

                    <p className="text-sm text-gray-800">
                      <span className="font-medium">
                        {log.actionBy?.name}
                      </span>{" "}
                      ({log.actionBy?.email}){" "}
                      {approved ? "approved" : "rejected"} a{" "}
                      <span className="font-medium lowercase">
                        {log.targetType}
                      </span>
                    </p>

                    <p className="text-sm text-gray-600">
                      Status changed from{" "}
                      <span className="font-medium">{log.oldStatus}</span> →{" "}
                      <span
                        className={`font-medium ${
                          approved ? "text-green-700" : "text-red-700"
                        }`}
                      >
                        {log.newStatus}
                      </span>
                    </p>

                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(log.createdAt).toLocaleString()}
                    </p>
                  </div>
                </li>
              );
            })}
          </div>
        ))}
      </ol>
    </div>
  );
}
