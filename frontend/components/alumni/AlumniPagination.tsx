"use client";

import MobilePagination from "@/components/alumni/MobilePagination";

type Props = {
  page: number;
  totalPages: number;
  onPageChange: (p: number) => void;
};

export default function AlumniPagination({
  page,
  totalPages,
  onPageChange,
}: Props) {
  if (totalPages <= 1) return null;

  return (
    <>
      <MobilePagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />

      <div className="hidden sm:flex justify-center items-center gap-2 mt-10 flex-wrap">
        <button
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
          className="px-4 py-2 rounded-lg border cursor-pointer bg-white disabled:bg-gray-200"
        >
          ← Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => onPageChange(i + 1)}
            className={`px-4 py-2 rounded-lg border cursor-pointer ${
              page === i + 1 ? "bg-black text-white" : "bg-white"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
          className="px-4 py-2 rounded-lg border cursor-pointer bg-white disabled:bg-gray-200"
        >
          Next →
        </button>
      </div>
    </>
  );
}
