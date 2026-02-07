import Link from "next/link";
import {
  Twitter,
  Linkedin,
  Mail,
  Instagram,
  Facebook,
} from "lucide-react";

export const Footer = () => {
  const navigation = [
    {
      title: "Product",
      links: [
        { name: "Reports", href: "#" },
        { name: "Statistics", href: "#" },
        { name: "Dashboards", href: "#" },
        { name: "Recordings", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About us", href: "#" },
        { name: "Contact us", href: "#" },
        { name: "Alumni Team", href: "#" },
        { name: "Campus", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Support", href: "#" },
        { name: "Community", href: "#" },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#020617] text-slate-200 mt-24">

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          <div className="lg:col-span-2 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              KEC Connect
            </h2>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              The official alumni network of Katihar Engineering College —
              connecting students, alumni, and opportunities in one trusted platform.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { Icon: Twitter, link: "https://x.com/keckatihar" },
                { Icon: Linkedin, link: "https://www.linkedin.com" },
                { Icon: Mail, link: "mailto:test@gmail.com" },
                { Icon: Instagram, link: "https://instagram.com" },
                { Icon: Facebook, link: "https://facebook.com" },
              ].map(({ Icon, link }, i) => (
                <Link
                  key={i}
                  href={link}
                  target="_blank"
                  className="p-2 rounded-full bg-slate-900/70 text-slate-400
                  hover:text-white hover:bg-indigo-600/20
                  border border-slate-800
                  transition-all duration-300 hover:scale-110"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>

            <div className="text-xs text-slate-500 pt-2 leading-relaxed">
              <p>Katihar Engineering College</p>
              <p>Katihar, Bihar 854109</p>
            </div>
          </div>

          {/* NAVIGATION */}
          {navigation.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white mb-4 tracking-wide">
                {section.title}
              </h3>

              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} KEC Connect. All rights reserved.</p>
          <p className="text-slate-600">
            Built by Students of KEC Katihar
          </p>
        </div>
      </div>
    </footer>
  );
};
