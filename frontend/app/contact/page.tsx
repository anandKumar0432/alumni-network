import React from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Instagram,
  X,
  HelpCircle,
  Briefcase,
  Twitter,
} from "lucide-react";
const ContactUs: React.FC = () => {
  return (
      <section className="w-full bg-white pt-20 pb-10 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        
        
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-semibold text-black tracking-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you’re an alumnus sharing opportunities and experiences, 
            or a user needing help with the website, we’re here for you.
          </p>
          <div className="mt-6 mx-auto h-[2px] w-25 bg-black" />
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          
          <div className="rounded-2xl border border-gray-200 p-8 shadow-sm transition hover:shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="text-black" size={26} />
              <h2 className="text-2xl font-semibold text-black">
                Alumni – Training & Placement Office
              </h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Alumni are welcome to reach out to the{" "}
              <span className="font-medium text-black">
                Training & Placement Office (TPO)
              </span>{" "}
              to share job referrals, internship opportunities, 
              and professional guidance with the association.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-4 text-gray-700">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>
                  Email:{" "}
                  <a
                    href="mailto:kecktpo@gmail.com"
                    className="underline underline-offset-4 hover:text-black"
                  >
                    kecktpo@gmail.com
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>Phone: +91 1234567890</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              {[Linkedin, Instagram, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center border-gray-300 text-gray-600 transition-all duration-300 hover:scale-110 hover:border-black hover:text-black"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          
          <div className="rounded-2xl border border-gray-200 p-8 shadow-sm transition hover:shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="text-black" size={26} />
              <h2 className="text-2xl font-semibold text-black">
                Website Support & Queries
              </h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              If you are facing any issues while using the alumni website,
              including login problems, profile updates, or technical errors,
              please reach out to our support team.
            </p>

         
            <div className="mt-6 space-y-4 text-gray-700">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>
                  Email:{" "}
                  <a
                    href="mailto:support@alumni.edu"
                    className="underline underline-offset-4 hover:text-black"
                  >
                    support@gmail.com
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>Phone: +91 9876543210</span>
              </div>
            </div>

       
            <div className="mt-6 flex gap-4">
              {[Linkedin, Instagram, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center  border-gray-300 text-gray-600 transition-all duration-300 hover:scale-110 hover:border-black hover:text-black"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
