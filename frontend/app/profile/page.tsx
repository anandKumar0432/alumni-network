"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "@/components/loading";
import { Button } from "@/components/ui/button";
import { Globe, Instagram, Linkedin } from "lucide-react";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

type Profile = {
  name: string;
  email: string;
  regNo: string;
  branch: string;
  session: string;
  college: string;
  role: "ALUMNI" | "STUDENT";
  status?: "PENDING" | "VERIFIED" | "REJECTED";

  // alumni
  currentJob?: string;
  currentCompany?: string;
  linkedIn?: string;
  instagram?: string;
  portfolio?: string;

  // student
  currentYear?: string;
  interest?: string;
};

export default function ProfilePage() {
  const searchParams = useSearchParams();
  const userId = searchParams.get("id");   // ⭐ dynamic id from URL

  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ================= FETCH PROFILE =================
  useEffect(() => {
    if (userId) {
      fetchProfile();
    }
  }, [userId]);

  const fetchProfile = async () => {
    try {
      console.log("Fetching profile for:", userId);

      const res = await fetch(
        `${BACKEND_URL}/alumini/me/${userId}`,
        {
          credentials: "include",
        }
      );

      if (!res.ok) throw new Error("Failed to fetch profile");

      const data = await res.json();
      console.log("PROFILE DATA:", data);

      const user = data.user;

      const formatted: Profile = {
        name: user.name,
        email: user.email,
        regNo: user.regNo,
        branch: user.branch,
        session: user.session,
        college: user.college,
        role: user.role,

        // alumni fields
        currentJob: user.alumni?.currentJob || "",
        currentCompany: user.alumni?.currentCompany || "",
        linkedIn: user.alumni?.linkedIn || "",
        instagram: user.alumni?.instagram || "",
        portfolio: user.alumni?.portfolio || "",
        status: user.alumni?.status,

        // student fields
        currentYear: user.student?.currentYear || "",
        interest: user.student?.interest || "",
      };

      setProfile(formatted);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // ================= LOADING =================
  if (loading) {
    return <Loading />;
  }

  // ================= ERROR =================
  if (error || !profile) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <p className="text-red-600">{error || "Profile not found"}</p>
      </main>
    );
  }

  // ================= UI =================
  return (
    <main className="pt-20 pb-10 min-h-screen bg-background flex justify-center px-4">
      <div className="w-full max-w-4xl space-y-6">

        {/* HEADER */}
        <div className="bg-card border rounded-xl p-6 flex justify-between">
          <div>
            <h1 className="text-2xl font-bold">{profile.name}</h1>
            <p className="text-muted-foreground">{profile.email}</p>
            <p className="text-sm mt-1">{profile.role}</p>
          </div>

          {profile.status && (
            <span
              className={`px-4 py-1 rounded-full text-sm font-medium h-fit
                ${
                  profile.status === "VERIFIED"
                    ? "bg-green-100 text-green-700"
                    : profile.status === "REJECTED"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
            >
              {profile.status}
            </span>
          )}
        </div>

        {/* BASIC INFO */}
        <div className="bg-card border rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Basic Info</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Reg No</p>
              <p className="font-medium">{profile.regNo}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Branch</p>
              <p className="font-medium">{profile.branch}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Session</p>
              <p className="font-medium">{profile.session}</p>
            </div>
            <div>
              <p className="text-muted-foreground">College</p>
              <p className="font-medium">{profile.college}</p>
            </div>
          </div>
        </div>

        {/* ALUMNI SECTION */}
        {profile.role === "ALUMNI" && (
          <div className="bg-card border rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Professional Info</h2>

            <p><b>Job:</b> {profile.currentJob || "—"}</p>
            <p><b>Company:</b> {profile.currentCompany || "—"}</p>

            <div className="flex gap-4 mt-4">
              {profile.linkedIn && (
                <a href={profile.linkedIn} target="_blank">
                  <Linkedin />
                </a>
              )}
              {profile.instagram && (
                <a href={profile.instagram} target="_blank">
                  <Instagram />
                </a>
              )}
              {profile.portfolio && (
                <a href={profile.portfolio} target="_blank">
                  <Globe />
                </a>
              )}
            </div>
          </div>
        )}

        {/* STUDENT SECTION */}
        {profile.role === "STUDENT" && (
          <div className="bg-card border rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Student Info</h2>
            <p><b>Current Year:</b> {profile.currentYear}</p>
            <p><b>Interest:</b> {profile.interest || "—"}</p>
          </div>
        )}

        <div className="flex justify-end">
          <Button>Edit Profile</Button>
        </div>
      </div>
    </main>
  );
}