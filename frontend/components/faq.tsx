// "use client";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Badge } from "@/components/ui/badge";
// import { motion } from "framer-motion";

// const faqs = [
//   {
//     q: "Who can register on KEC Connect?",
//     a: "Only students and alumni of Katihar Engineering College are allowed to register. This ensures that the platform remains a trusted and closed academic community.",
//   },
//   {
//     q: "How does the verification process work?",
//     a: "After registration, every profile goes into a pending state. Admins manually verify the details before approving or rejecting the account. Only verified users can access the platform.",
//   },
//   {
//     q: "How long does approval usually take?",
//     a: "Approval time depends on admin review, but most requests are processed within 24–48 hours. This ensures authenticity while keeping onboarding smooth.",
//   },
//   {
//     q: "What can students do on KEC Connect?",
//     a: "Students can explore verified alumni profiles, connect with seniors, seek mentorship, discover career paths, and grow their professional network within the KEC community.",
//   },
//   {
//     q: "What can alumni do on the platform?",
//     a: "Alumni can connect with juniors, share guidance, highlight their professional journey, support students, and strengthen engagement with the college community.",
//   },
//   {
//     q: "Who manages and moderates the platform?",
//     a: "KEC Connect is managed through a dedicated admin dashboard where admins verify users, manage requests, and maintain platform integrity using approval logs and moderation tools.",
//   },
//   {
//     q: "Is my data safe and private?",
//     a: "Yes. The platform uses secure authentication and role-based access. Only verified users can access community features, and admin controls help protect misuse.",
//   },
//   {
//     q: "Is KEC Connect an official platform?",
//     a: "KEC Connect is built as a dedicated alumni networking platform for Katihar Engineering College with a focus on verified access and community trust.",
//   },
// ];

// export const FAQ = () => {
//   return (
//     <section className="w-full py-24">
//       <div className="max-w-5xl mx-auto px-6 lg:px-8">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-14"
//         >
//           <Badge className="mb-3">FAQs</Badge>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
//             Frequently asked questions
//           </h2>
//           <p className="mt-4 text-lg text-muted-foreground">
//             Everything you need to know about the KEC Connect alumni platform.
//           </p>
//         </motion.div>

//         {/* Accordion */}
//         <Accordion type="single" collapsible className="w-full space-y-2">
//           {faqs.map((faq, i) => (
//             <AccordionItem
//               key={i}
//               value={`faq-${i}`}
//               className="border rounded-xl px-5"
//             >
//               <AccordionTrigger className="text-left text-lg font-medium">
//                 {faq.q}
//               </AccordionTrigger>
//               <AccordionContent className="text-muted-foreground leading-relaxed">
//                 {faq.a}
//               </AccordionContent>
//             </AccordionItem>
//           ))}
//         </Accordion>

//       </div>
//     </section>
//   );
// };


"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Who can register on KEC Connect?",
    a: "Only students and alumni of Katihar Engineering College are allowed to register. This ensures that the platform remains a trusted and closed academic community.",
  },
  {
    q: "How does the verification process work?",
    a: "After registration, every profile goes into a pending state. Admins manually verify the details before approving or rejecting the account. Only verified users can access the platform.",
  },
  {
    q: "How long does approval usually take?",
    a: "Approval time depends on admin review, but most requests are processed within 24–48 hours. This ensures authenticity while keeping onboarding smooth.",
  },
  {
    q: "What can students do on KEC Connect?",
    a: "Students can explore verified alumni profiles, connect with seniors, seek mentorship, discover career paths, and grow their professional network within the KEC community.",
  },
  {
    q: "What can alumni do on the platform?",
    a: "Alumni can connect with juniors, share guidance, highlight their professional journey, support students, and strengthen engagement with the college community.",
  },
  {
    q: "Who manages and moderates the platform?",
    a: "KEC Connect is managed through a dedicated admin dashboard where admins verify users, manage requests, and maintain platform integrity using approval logs and moderation tools.",
  },
  {
    q: "Is my data safe and private?",
    a: "Yes. The platform uses secure authentication and role-based access. Only verified users can access community features, and admin controls help protect misuse.",
  },
  {
    q: "Is KEC Connect an official platform?",
    a: "KEC Connect is built as a dedicated alumni networking platform for Katihar Engineering College with a focus on verified access and community trust.",
  },
];

export const FAQ = () => {
  return (
    <section className="w-full py-28 bg-white relative overflow-hidden">

      {/* soft background accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-black/5 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <Badge className="mb-4">FAQs</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Everything you need to know about the KEC Connect alumni platform.
          </p>
        </motion.div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.05 }}
            >
              <AccordionItem
                value={`faq-${i}`}
                className="group border rounded-2xl px-6 py-1 bg-white shadow-sm hover:shadow-md transition"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-gray-900 group-hover:text-black">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-1 pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

      </div>
    </section>
  );
};
