import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import React from "react";

const AboutAlumni: React.FC = () => {
  return (
    <div>
        <Header />
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">
              About Us
            </h2>
            <div className="mt-2 w-20 h-1 bg-blue-600 mx-auto rounded"></div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-md p-8 space-y-6 text-gray-700 leading-relaxed">
            <p>
              The <span className="font-semibold">Katihar Engineering College Alumni Association</span> is an organized
              community of former students committed to maintaining a strong and
              lasting relationship with their alma mater. The association provides
              a platform for alumni to stay connected with the college, fellow
              graduates, and current students.
            </p>

            <p>
              Our primary objective is to strengthen alumni engagement while
              supporting the academic, professional, and institutional development
              of the college. Through networking, mentorship, and collaborative
              initiatives, alumni are encouraged to share their experience and
              knowledge for the benefit of the institution.
            </p>

            <p>
              The Alumni Association promotes meaningful interaction among members,
              recognizes alumni achievements, and supports academic, cultural, and
              social initiatives. It also plays an important role in guiding
              students through career mentoring and professional advice.
            </p>

            <p>
              By joining the Alumni Association, members remain connected to the
              college community and actively contribute to its growth and progress.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutAlumni;
