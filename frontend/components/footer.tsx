import Link from "next/link";
import {
  Twitter,
  Linkedin,
  Mail,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  const navigation = [
    {
      title: "Product",
      links: [
        { name: "Reports", href: "/reports" },
        { name: "Statistics", href: "/statistics" },
        { name: "Dashboards", href: "/dashboards" },
        { name: "Recordings", href: "/recordings" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About us", href: "/about" },
        { name: "Fundraising", href: "/fundraising" },
        { name: "Investors", href: "/investors" },
        { name: "Contact us", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Support", href: "/support" },
        { name: "Community", href: "/community" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-950 text-slate-100">
      <div className="container mx-auto px-4 sm:px-6 pt-10 md:pt-12 pb-8">
        {/* Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-white">
              KEC CONNECT
            </h2>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              A dedicated alumni network platform where students and graduates
              of KEC Katihar connect, collaborate, and grow together.
            </p>

            <div className="flex items-center gap-3 mt-2 flex-wrap">
              {[
                { Icon: Twitter, link: "https://x.com/keckatihar" },
                { Icon: Linkedin, link: "https://www.linkedin.com/in/katihar-engineering-college-dstte-govt-of-bihar-327aaa326/" },
                { Icon: Mail, link: "mailto:principalranjanakri84@gmail.com" },
                { Icon: Instagram, link: "https://www.instagram.com/keckatiharofficial/" },
                { Icon: Facebook, link: "https://www.facebook.com/profile.php?id=61564963783682" },
                { Icon: FaWhatsapp, link: "https://whatsapp.com/channel/0029VaeIPrnFHWptfQRrpo0Q" },
                { Icon: Youtube, link: "https://www.youtube.com/channel/UCJu8sFs4jAp6sZIPsa8Qs5g" },
              ].map(({ Icon, link }, i) => (
                <Link
                  key={i}
                  href={link}
                  target="_blank"
                  className="p-2 rounded-full bg-slate-900 text-slate-400
                             hover:bg-slate-800 hover:text-indigo-400
                             transition-all hover:-translate-y-0.5"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>

            <div className="text-xs text-slate-500 leading-relaxed mt-2">
              <p>KEC Katihar, Hridaya Ganj</p>
              <p>854109, Bihar, India</p>
            </div>
          </div>

          {navigation.map((section) => (
            <div key={section.title} className="min-w-[140px]">
              <p className="text-sm font-medium mb-3 text-white">
                {section.title}
              </p>
              <ul className="space-y-1.5 text-sm text-slate-400">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-indigo-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="border-t border-slate-800 mt-8 pt-4
                     flex flex-col sm:flex-row items-center justify-between
                     gap-2 text-xs text-slate-500"
        >
          <p>© {new Date().getFullYear()} KEC CONNECT. All rights reserved.</p>
          <p>Developed by the students of KEC Katihar.</p>
        </div>
      </div>
    </footer>
  );
};
