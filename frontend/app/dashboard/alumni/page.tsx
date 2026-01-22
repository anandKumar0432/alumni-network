"use client";

import { useEffect, useState } from "react";
import Loading from "@/components/loading";
import { Button } from "@/components/ui/button";
import { Globe, Instagram, Linkedin } from "lucide-react";
import { json } from "zod";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

type AlumniProfile = {
  name: string;
  email: string;
  regNo: string;
  branch: string;
  session: string;
  college: string;
  currentJob?: string;
  currentCompany?: string;
  linkedIn?: string;
  instagram?: string;
  portfolio?: string;
  status: "PENDING" | "VERIFIED" | "REJECTED";
};



export default function AlumniProfilePage() {

  const [alumni, setAlumni] = useState<AlumniProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [form, setForm] = useState<any>({});
  const [saving, setSaving] = useState(false);
  const [edit, setEdit] = useState(false);


  


  const userId = "795b7fe1-3575-42de-9f1f-9b641646594e";

  useEffect(() => {

    fetchProfile();
  }, [userId]);  


  const fetchProfile = async () => {
    try {
      const res = await fetch(
        `${BACKEND_URL}/alumini/me/${userId}`,
        {
          credentials: "include",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch profile");
      }

      const data = await res.json();
      console.log(data)

      const profile = {
        name: data.user.name,
        email: data.user.email,
        regNo: data.user.regNo,
        branch: data.user.branch,
        session: data.user.session,
        college: data.user.college,
        currentJob: data.user.alumni?.currentJob || "",
        currentCompany: data.user.alumni?.currentCompany || "",
        linkedIn: data.user.alumni?.linkedIn || "",
        instagram: data.user.alumni?.instagram || "",
        portfolio: data.user.alumni?.portfolio || "",
        status: data.user.alumni?.status,
      };

    setAlumni(profile);

    setForm({
      name: profile.name,
      regNo: profile.regNo,
      branch: profile.branch,
      session: profile.session,
      currentJob: profile.currentJob,
      currentCompany: profile.currentCompany,
      linkedIn: profile.linkedIn,
      instagram: profile.instagram,
      portfolio: profile.portfolio,
    });

    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };


    const handleUpdate = async (e: any) => {
      e.preventDefault();
      setSaving(true);
  
      const payload = {
        role: "ALUMNI",
        name: form.name,
        regNo: form.regNo,
        branch: form.branch,
        session: form.session,
        alumni: {
          currentJob: form.currentJob || undefined,
          currentCompany: form.currentCompany,
          linkedIn: form.linkedIn || undefined,
          instagram: form.instagram || undefined,
          portfolio: form.portfolio || undefined,
        },
      };
  
      try {
        const res = await fetch(
          `${BACKEND_URL}/alumini/update`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(payload),
          }
        );
  
        if (!res.ok) throw new Error("Update failed");
  
        setEdit(false);
        fetchProfile();
      } catch (e: any) {
        alert(e.message);
      } finally {
        setSaving(false);
      }
    };

  
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error || !alumni) {
    return (
      <div>
        <main className="pt-20 min-h-screen flex items-center justify-center">
          <p className="text-red-600">{error || "Profile not found"}</p>
        </main>
      </div>
    );
  }


  return (
    <div>
      <main className="pt-20 pb-8 min-h-screen bg-background flex justify-center px-4">
        <div className="w-full max-w-4xl bg-card border border-border rounded-xl p-6 space-y-8">
  
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">{alumni.name}</h1>
              <p className="text-muted-foreground">{alumni.email}</p>
            </div>
  
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
  
          <hr className="border-border" />
  
          {/* Personal Information */}
          <section>
            <h2 className="text-sm font-semibold text-muted-foreground mb-4">
              Personal Information
            </h2>
  
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
          </section>
  
          <hr className="border-border" />
  
          {/* Professional Details */}
          <section>
            <h2 className="text-sm font-semibold text-muted-foreground mb-4">
              Professional Details
            </h2>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Current Job</p>
                <p className="font-medium">{alumni.currentJob || "—"}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Company</p>
                <p className="font-medium">{alumni.currentCompany || "—"}</p>
              </div>
            </div>
          </section>
  
          <hr className="border-border" />
  
          {/* Social Links */}
          <section className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-muted-foreground mb-3">
                Social Links
              </h2>
  
              <div className="flex items-center gap-4">
                {alumni.linkedIn && (
                  <a
                    href={alumni.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                )}
  
                {alumni.instagram && (
                  <a
                    href={alumni.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                )}
  
                {alumni.portfolio && (
                  <a
                    href={alumni.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition"
                    aria-label="Portfolio"
                  >
                    <Globe size={18} />
                  </a>
                )}
              </div>
            </div>
  

          </section>
  
        </div>
      </main>
    </div>
  );


}
