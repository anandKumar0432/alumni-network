"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

type Student = {
  id: string;
  name: string;
  email: string;
  branch: string;
  session: string;
};

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchStudents = async (pageNum: number) => {
    try {
      setLoading(true);

      const res: any = await axios.get(
        `${BACKEND_URL}/admin/students?page=${pageNum}&limit=8`,
        { withCredentials: true },
      );

      setStudents(res.data.students);
      setTotalPages(res.data.totalPages);
      setPage(res.data.currentPage);
    } catch (error) {
      console.error("Failed to fetch students", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents(1);
  }, []);

  const goToPage = (p: number) => {
    if (p < 1 || p > totalPages) return;
    fetchStudents(p);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-6">Students Directory</h1>

        {/* Loading */}
        {loading ? (
          <div className="text-center py-20">Loading students...</div>
        ) : students.length === 0 ? (
          <div className="text-center py-20">No students found</div>
        ) : (
          <>
            {/* Table */}
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-100 text-left">
                  <tr>
                    <th className="p-4">Name</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Branch</th>
                    <th className="p-4">Session</th>
                  </tr>
                </thead>

                <tbody>
                  {students.map((s) => (
                    <tr key={s.id} className="border-t">
                      <td className="p-4 font-medium">{s.name}</td>
                      <td className="p-4">{s.email}</td>
                      <td className="p-4">{s.branch}</td>
                      <td className="p-4">{s.session}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => goToPage(page - 1)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Prev
              </button>

              <span className="px-4 py-2">
                Page {page} of {totalPages}
              </span>

              <button
                onClick={() => goToPage(page + 1)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
