// "use client";

// import { useEffect, useState } from "react";
// import { X } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";

// type Filters = {
//   search: string;
//   branch: string;
//   year: string;
//   session: string;
// };

// type Props = {
//   isOpen: boolean;
//   onClose: () => void;
//   currentFilters: Filters;
//   onApply: (filters: Filters) => void;
// };

// export default function MobileFilterDrawer({
//   isOpen,
//   onClose,
//   currentFilters,
//   onApply,
// }: Props) {
//   const [temp, setTemp] = useState<Filters>(currentFilters);

//   // Sync when opening
//   useEffect(() => {
//     if (isOpen) setTemp(currentFilters);
//   }, [isOpen, currentFilters]);

//   // Lock body scroll
//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 md:hidden">
//       {/* Overlay */}
//       <div
//         onClick={onClose}
//         className="absolute inset-0 bg-black/40 backdrop-blur-sm"
//       />

//       {/* Drawer */}
//       <div
//         className={cn(
//           "absolute bottom-0 left-0 right-0 bg-background rounded-t-2xl",
//           "max-h-[85vh] flex flex-col",
//           "animate-in slide-in-from-bottom duration-300"
//         )}
//       >
//         {/* Handle */}
//         <div className="flex justify-center py-2">
//           <div className="h-1.5 w-12 rounded-full bg-muted" />
//         </div>

//         {/* Header */}
//         <div className="flex items-center justify-between px-4 pb-2 border-b">
//           <h2 className="text-lg font-semibold">Filters</h2>
//           <button onClick={onClose}>
//             <X className="h-5 w-5" />
//           </button>
//         </div>

//         {/* Content */}
//         <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">

//           {/* Search */}
//           <div className="space-y-1">
//             <label className="text-sm font-medium">Search</label>
//             <input
//               placeholder="Search by name..."
//               className="w-full border rounded-lg px-3 py-2"
//               value={temp.search}
//               onChange={(e) =>
//                 setTemp((t) => ({ ...t, search: e.target.value }))
//               }
//             />
//           </div>

//           {/* Branch */}
//           <div className="space-y-1">
//             <label className="text-sm font-medium">Branch</label>
//             <select
//               className="w-full border rounded-lg px-3 py-2"
//               value={temp.branch}
//               onChange={(e) =>
//                 setTemp((t) => ({ ...t, branch: e.target.value }))
//               }
//             >
//               <option value="">All Branches</option>
//               <option value="CSE">CSE</option>
//               <option value="IT">IT</option>
//               <option value="ECE">ECE</option>
//               <option value="ME">ME</option>
//               <option value="EEE">EEE</option>
//               <option value="CE">CE</option>
//               <option value="VLSI">VLSI</option>
//               <option value="FPP">FPP</option>
//             </select>
//           </div>

//           {/* Session */}
//           <div className="space-y-1">
//             <label className="text-sm font-medium">Session</label>
//             <input
//               placeholder="e.g. 2019-23"
//               className="w-full border rounded-lg px-3 py-2"
//               value={temp.session}
//               onChange={(e) =>
//                 setTemp((t) => ({ ...t, session: e.target.value }))
//               }
//             />
//           </div>

//           {/* Year */}
//           <div className="space-y-1">
//             <label className="text-sm font-medium">Passing year</label>
//             <input
//               type="number"
//               placeholder="e.g. 2023"
//               className="w-full border rounded-lg px-3 py-2"
//               value={temp.year}
//               onChange={(e) =>
//                 setTemp((t) => ({ ...t, year: e.target.value }))
//               }
//             />
//           </div>

//         </div>

//         {/* Sticky actions */}
//         <div className="sticky bottom-0 bg-background border-t px-4 py-3 flex gap-3">
//           <Button
//             variant="outline"
//             className="w-1/2"
//             onClick={() =>
//               setTemp({ search: "", branch: "", year: "", session: "" })
//             }
//           >
//             Reset
//           </Button>

//           <Button
//             className="w-1/2"
//             onClick={() => {
//               onApply(temp);
//               onClose();
//             }}
//           >
//             Apply
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function MobileFilterDrawer({
  isOpen,
  onClose,
  title = "Filters",
  children,
}: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl p-5"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{title}</h3>
              <button onClick={onClose}>
                <X className="h-5 w-5" />
              </button>
            </div>

            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
