"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AlumniProfilePage() {
  // 🔹 MOCK DATA (replace with API later)
  const alumni = {
    name: "Rahul Kumar",
    email: "rahul@gmail.com",
    regNo: "KEC25CSE045",
    branch: "CSE",
    session: "2021-20225",
    college: "Katihar Engineering College",
    currentJob: "Software Engineer",
    currentCompany: "TCS",
    linkedIn: "https://linkedin.com/in/rahulkumar",
    instagram: "https://instagram.com/rahulkumar",
    portfolio: "https://rahul.dev",
    status: "VERIFIED", // PENDING | VERIFIED | REJECTED
  };

  return (
    <div>
      <Header />

      <main className="pt-20 min-h-screen bg-background flex justify-center px-4">
        <div className="w-full max-w-4xl space-y-6">
          
          {/* Profile Header */}
          <div className="bg-card border border-border rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">{alumni.name}</h1>
              <p className="text-muted-foreground">{alumni.email}</p>
            </div>

            {/* Status Badge */}
            <span
              className={`px-4 py-1 rounded-full text-sm font-medium w-fit
                ${
                  alumni.status === "VERIFIED"
                    ? "bg-green-100 text-green-700"
                    : alumni.status === "REJECTED"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
            >
              {alumni.status}
            </span>
          </div>

          {/* Personal Info */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Personal Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>    
                <p className="text-muted-foreground">Registration No</p>
                <p className="font-medium">{alumni.regNo}</p>         
            </div>
            <div>    
                <p className="text-muted-foreground">Branch</p>
                <p className="font-medium">{alumni.branch}</p>         
            </div>
            <div>    
                <p className="text-muted-foreground">Session</p>
                <p className="font-medium">{alumni.session}</p>         
            </div>
            <div>    
                <p className="text-muted-foreground">College</p>
                <p className="font-medium">{alumni.college}</p>         
            </div>
            </div>
          </div>

          {/* Professional Info */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Professional Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>    
                    <p className="text-muted-foreground">Current Job</p>
                    <p className="font-medium">{alumni.currentJob || "—"} </p>         
                </div>
                <div>    
                    <p className="text-muted-foreground">Company</p>
                    <p className="font-medium">{alumni.currentCompany || "—"}</p>         
                </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Social Links</h2>

            <div className="space-y-2 text-sm">

                <p>
                    <span className="text-muted-foreground">LinkedIn: </span>
                    <a
                        href={alumni.linkedIn}
                        target="_blank"
                        className="text-primary underline underline-offset-4"
                    >
                        {alumni.linkedIn || "—"}
                    </a>
                </p>
                <p>
                    <span className="text-muted-foreground">Instagram: </span>
                    <a
                        href={alumni.instagram}
                        target="_blank"
                        className="text-primary underline underline-offset-4"
                    >
                        {alumni.instagram || "—"}
                    </a>
                </p>
                <p>
                    <span className="text-muted-foreground">Portfolio: </span>
                    <a
                        href={alumni.portfolio}
                        target="_blank"
                        className="text-primary underline underline-offset-4"
                    >
                        {alumni.portfolio || "—"}
                    </a>
                </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end">
            <button className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition">
              Edit Profile
            </button>  
          </div>  <br/>

        </div>
      </main>
      <Footer />
    </div>

  );
}
