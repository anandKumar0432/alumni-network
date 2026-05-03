"use client";

import { Student } from "@/lib/type";

export default function StudentCard({ student }: { student: Student }) {
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-lg font-semibold text-gray-500">
          {student.imageUrl ? (
            <img
              src={student.imageUrl}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            student.name.charAt(0)
          )}
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            {student.name}
          </h2>
          <p className="text-sm text-gray-500">{student.email}</p>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1 text-sm text-gray-600">
        <p> {student.branch}</p>
        <p> {student.session}</p>
        <p> {student.regNo}</p>
      </div>

      {/* Extra Info (NEW - important) */}
      <div className="mt-3 text-sm">
        <p className="text-gray-700">
          Year: <span className="font-medium">{student.student.currentYear}</span>
        </p>

        {student.student.interest && (
          <p className="text-gray-500 text-xs mt-1">
            💡 {student.student.interest}
          </p>
        )}
      </div>

      {/* Status Badge */}
      <span className="inline-block mt-3 px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
        {student.student.status}
      </span>

      {/* CTA */}
      <button className="mt-4 w-full py-2 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition">
        View Profile
      </button>
    </div>
  );
}