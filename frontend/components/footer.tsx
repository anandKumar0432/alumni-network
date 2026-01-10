import Link from "next/link";
import { Github, Twitter, Linkedin} from "lucide-react";

export const Footer = () => {
  const navigationItems = [
    {
      title: "Product",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "Reports",
          href: "/reports",
        },
        {
          title: "Statistics",
          href: "/statistics",
        },
        {
          title: "Dashboards",
          href: "/dashboards",
        },
        {
          title: "Recordings",
          href: "/recordings",
        },
      ],
    },
    {
      title: "Company",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "About us",
          href: "/about",
        },
        {
          title: "Fundraising",
          href: "/fundraising",
        },
        {
          title: "Investors",
          href: "/investors",
        },
        {
          title: "Contact us",
          href: "/contact",
        },
      ],
    },
  ];

  return (
    <div className="w-full pt-2 pb-2 px-3 lg:px-3 bg-foreground text-background">
      <div className="container mx-auto ">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex gap-4 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <h2 className="text-xl md:text-2xl tracking-tighter max-w-xl font-semibold text-left">
                KEC CONNECT
              </h2>
              <p className="text-xs ax-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                All the Alumni Assembles here.
              </p>
            </div>
            <div className="flex gap-4 flex-row">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/75 hover:text-background transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/75 hover:text-background transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/75 hover:text-background transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex gap-20 flex-row">
              <div className="flex flex-col text-xs max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <p>KEC Katihar</p>
                <p>Hriday ganj</p>
                <p>854109</p>
              </div>
              <div className="flex flex-col text-xs max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <Link href="/">Terms of service</Link>
                <Link href="/">Privacy Policy</Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 items-start">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex text-sm gap-1 flex-col items-start"
              >
                <div className="flex flex-col gap-2">
                  <p className="text-md">{item.title}</p>
                  {item.items &&
                    item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="flex justify-between items-center text-xs"
                      >
                        <span className="text-background/75 hover:text-gray-300">
                          {subItem.title}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-background/20 mt-2 pt-4 pb-2 px-10">
        <div className="container mx-auto text-center text-xs text-background/75 flex justify-between items-center">
          <p>
            © {new Date().getFullYear()} KEC CONNECT. All rights reserved.
          </p>
          <p>
            Developed by the student of KEC Katihar.
          </p>
        </div>
      </div>
    </div>
  );
};