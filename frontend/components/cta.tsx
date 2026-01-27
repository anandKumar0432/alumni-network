// "use client";

// import Link from "next/link";
// import { MoveRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";

// export const CTA = () => {
//   return (
//     <section className="w-full py-28">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-gray-50 via-white to-gray-100 px-8 py-20 md:px-16 text-center shadow-sm"
//         >
//           {/* soft decoration */}
//           <div className="absolute top-0 right-0 w-80 h-80 bg-black/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
//           <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

//           <div className="relative z-10 max-w-2xl mx-auto space-y-6">
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
//               Ready to be part of the KEC alumni network?
//             </h2>

//             <p className="text-lg text-gray-600">
//               Create your profile, get verified, and start connecting with students
//               and alumni from Katihar Engineering College.
//             </p>

//             <div className="flex flex-wrap justify-center gap-4 pt-4">
//               <Button size="lg" className="gap-2 px-8" asChild>
//                 <Link href="/register">
//                   Get Started <MoveRight size={18} />
//                 </Link>
//               </Button>

//               <Button size="lg" variant="outline" className="px-8" asChild>
//                 <Link href="/alumni">
//                   Explore Alumni
//                 </Link>
//               </Button>
//             </div>

//             <p className="text-sm text-gray-500 pt-2">
//               Official platform of KEC Katihar • Admin verified network
//             </p>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };


"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const CTA = () => {
  return (
    <section className="w-full py-32 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-gray-50 via-white to-gray-100 px-8 py-24 md:px-20 text-center shadow-lg"
        >
          {/* animated background blobs */}
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-96 h-96 bg-black/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"
          />
          <motion.div
            animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"
          />

          <div className="relative z-10 max-w-2xl mx-auto space-y-7">
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900"
            >
              Ready to be part of the KEC alumni network?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
              className="text-lg text-gray-600"
            >
              Create your profile, get verified, and start connecting with students
              and alumni from Katihar Engineering College.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.18 }}
              className="flex flex-wrap justify-center gap-4 pt-4"
            >
              <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="gap-2 px-9 shadow-md" asChild>
                  <Link href="/register">
                    Get Started <MoveRight size={18} />
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="px-9" asChild>
                  <Link href="/alumni">
                    Explore Alumni
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
              className="text-sm text-gray-500 pt-2"
            >
              Official platform of KEC Katihar • Admin verified network
            </motion.p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
