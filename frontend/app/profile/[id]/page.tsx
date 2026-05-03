"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/loading";
import { Globe, Instagram, Linkedin } from "lucide-react";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

import { Profile, User } from "@/lib/type";

export default function ProfilePage() {

  const params = useParams();
  const userId = params.id;

  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProfile = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/common/profile/${userId}`,
        {withCredentials: true},
      )
      const user = res.data.user;

      const formatted: Profile = {
        name: user.name,
        email: user.email,
        regNo: user.regNo,
        branch: user.branch,
        session: user.session,
        college: user.college,
        role: user.role,
        status: user.alumni?.status || user.student?.status || "",

        currentJob: user.alumni?.currentJob || "",
        currentCompany: user.alumni?.currentCompany || "",
        linkedIn: user.alumni?.linkedIn || "",
        instagram: user.alumni?.instagram || "",
        portfolio: user.alumni?.portfolio || "",

        currentYear: user.student?.currentYear || "",
        interest: user.student?.interest || "",
      };

      console.log(formatted);
      setProfile(formatted);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }

    console.log(profile);
  };

  useEffect(() => {
    if (!userId) return;

    fetchProfile();
  }, [userId]);

  if (loading) {
    return <Loading />;
  }

  if (error || !profile) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <p className="text-red-600">{error || "Profile not found"}</p>
      </main>
    );
  }

  return (
    <main className="pt-20 pb-10 min-h-screen bg-background flex justify-center px-4">
      <div className="w-full max-w-4xl space-y-6">

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

        {profile.role === "STUDENT" && (
          <div className="bg-card border rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Student Info</h2>
            <p><b>Current Year:</b> {profile.currentYear}</p>
            <p><b>Interest:</b> {profile.interest || "—"}</p>
          </div>
        )}
      </div>
    </main>
  );
}