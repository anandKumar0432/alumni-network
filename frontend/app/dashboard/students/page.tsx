"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Users,
  GraduationCap,
  UserCheck,
  Building2,
  Search,
  Mail,
  Eye,
} from "lucide-react";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

type Student = {
  id: string;
  name: string;
  email: string;
  branch: string;
  session: string;
};

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<"grid" | "table">("grid");

  // 🔥 GLOBAL STATS
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalAlumni, setTotalAlumni] = useState(0);
  const [totalVerified, setTotalVerified] = useState(0);

  // 🔥 FILTERS
  const [search, setSearch] = useState("");
  const [branch, setBranch] = useState("");
  const [session, setSession] = useState("");
  const [sort, setSort] = useState("newest");

  // ===============================
  // 🔥 FETCH GLOBAL STATS (IMPORTANT)
  // ===============================
  const fetchStats = async () => {
  try {
    const res = await axios.get(`${BACKEND_URL}/user/platform-stats`, {
      withCredentials: true,
    });

    setTotalStudents(res.data.totalStudents || 0);
    setTotalAlumni(res.data.totalAlumni || 0);
    setTotalVerified(res.data.totalVerified || 0);
  } catch (err) {
    console.error("Stats fetch error:", err);
  }
};


  // ===============================
  // 🔥 FETCH STUDENTS WITH FILTERS
  // ===============================
  const fetchStudents = async (pageNum = 1) => {
    try {
      setLoading(true);

      const res = await axios.get(`${BACKEND_URL}/admin/students`, {
        params: {
          page: pageNum,
          limit: 8,
          search,
          branch,
          session,
          sort,
        },
        withCredentials: true,
      });

      setStudents(res.data.students);
      setTotalPages(res.data.totalPages);
      setPage(res.data.currentPage);
    } catch (error) {
      console.error("Failed to fetch students", error);
    } finally {
      setLoading(false);
    }
  };

  // 🔥 load stats once
  useEffect(() => {
    fetchStats();
  }, []);

  // 🔥 reload students on filters
  useEffect(() => {
    fetchStudents(1);
  }, [search, branch, session, sort]);

  const goToPage = (p: number) => {
    if (p < 1 || p > totalPages) return;
    fetchStudents(p);
  };

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-14 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight">
            Students & Alumni Directory
          </h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Browse and connect with students and alumni across KEC.
          </p>
        </div>

        {/* 🔥 STATS CARDS */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <Users className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground">Total Students</p>
                <h3 className="text-2xl font-bold">{totalStudents}</h3>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <GraduationCap className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-sm text-muted-foreground">Total Alumni</p>
                <h3 className="text-2xl font-bold">{totalAlumni}</h3>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <UserCheck className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">Verified Users</p>
                <h3 className="text-2xl font-bold">{totalVerified}</h3>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <Building2 className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-sm text-muted-foreground">Branches</p>
                <h3 className="text-2xl font-bold">6</h3>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 🔥 FILTER BAR */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border mb-8">
          <div className="flex flex-col md:flex-row gap-4">

            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 h-11 rounded-xl"
              />
            </div>

            <select
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="h-11 rounded-xl border px-3 text-sm"
            >
              <option value="">All Branches</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
              <option value="Electrical">Electrical</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Civil">Civil</option>
            </select>

            <select
              value={session}
              onChange={(e) => setSession(e.target.value)}
              className="h-11 rounded-xl border px-3 text-sm"
            >
              <option value="">All Sessions</option>
              <option value="2020-2024">2020-2024</option>
              <option value="2019-2023">2019-2023</option>
              <option value="2018-2022">2018-2022</option>
            </select>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-11 rounded-xl border px-3 text-sm"
            >
              <option value="newest">Newest</option>
              <option value="name">Name A-Z</option>
            </select>

            <Button
              variant="outline"
              onClick={() => {
                setSearch("");
                setBranch("");
                setSession("");
                setSort("newest");
              }}
              className="rounded-xl"
            >
              Reset
            </Button>
          </div>
        </div>

        {/* VIEW TOGGLE */}
        <div className="flex justify-end mb-6">
          <div className="bg-gray-100 p-1 rounded-lg flex gap-1">
            <button
              onClick={() => setView("grid")}
              className={`px-5 py-1.5 text-sm rounded-md ${
                view === "grid" ? "bg-white shadow" : ""
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setView("table")}
              className={`px-5 py-1.5 text-sm rounded-md ${
                view === "table" ? "bg-white shadow" : ""
              }`}
            >
              Table
            </button>
          </div>
        </div>

        {/* CONTENT */}
        {loading ? (
          <div className="text-center py-24">Loading students...</div>
        ) : students.length === 0 ? (
          <div className="text-center py-24">No students found</div>
        ) : (
          <>
            {view === "grid" && (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {students.map((s) => (
                  <Card key={s.id} className="rounded-2xl border bg-white shadow-sm hover:shadow-lg transition">
                    <CardContent className="p-5">

                      <div className="flex justify-center mb-4">
                        <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg">
                          {getInitials(s.name)}
                        </div>
                      </div>

                      <div className="text-center space-y-1">
                        <h3 className="font-semibold">{s.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {s.branch} • {s.session}
                        </p>
                        <p className="text-xs text-muted-foreground">{s.email}</p>
                      </div>

                      <div className="border-t my-4"></div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1 h-9 rounded-lg">
                          <Mail className="h-4 w-4 mr-2" /> Email
                        </Button>
                        <Button size="sm" className="flex-1 h-9 rounded-lg">
                          <Eye className="h-4 w-4 mr-2" /> View
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* PAGINATION */}
            <div className="flex justify-center items-center gap-6 mt-12">
              <Button variant="outline" onClick={() => goToPage(page - 1)} disabled={page === 1}>
                Prev
              </Button>
              <span className="text-sm font-medium">
                Page {page} of {totalPages}
              </span>
              <Button variant="outline" onClick={() => goToPage(page + 1)} disabled={page === totalPages}>
                Next
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
