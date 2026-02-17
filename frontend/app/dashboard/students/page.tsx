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
  BadgeCheck,
} from "lucide-react";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

type Student = {
  id: string;
  name: string;
  email: string;
  branch: string;
  session: string;
  image?: string;
  verified?: boolean;
};

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const [totalStudents, setTotalStudents] = useState(0);
  const [totalAlumni, setTotalAlumni] = useState(0);
  const [totalVerified, setTotalVerified] = useState(0);

  const [search, setSearch] = useState("");
  const [branch, setBranch] = useState("");
  const [session, setSession] = useState("");
  const [sort, setSort] = useState("newest");

  const fetchStats = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/user/platform-stats`, {
        withCredentials: true,
      });

      setTotalStudents(res.data.totalStudents || 0);
      setTotalAlumni(res.data.totalAlumni || 0);
      setTotalVerified(res.data.totalVerified || 0);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchStudents = async (pageNum = 1) => {
    try {
      setLoading(true);

      const res: any = await axios.get(
        `${BACKEND_URL}/admin/students?page=${pageNum}&limit=8`,
        { withCredentials: true },
      );

      setStudents(res.data.students);
      setTotalPages(res.data.totalPages);
      setPage(res.data.currentPage);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

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
    // <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-28 pb-16 px-6">
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-16 px-6">

      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight">
            Students & Alumni Directory
          </h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Manage and explore all registered users across the platform.
          </p>
        </div>

        {/* STATS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10">
          <StatCard
            icon={<Users />}
            title="Total Students"
            value={totalStudents}
            color="blue"
          />
          <StatCard
            icon={<GraduationCap />}
            title="Total Alumni"
            value={totalAlumni}
            color="purple"
          />
          <StatCard
            icon={<UserCheck />}
            title="Verified Users"
            value={totalVerified}
            color="green"
          />
          <StatCard
            icon={<Building2 />}
            title="Branches"
            value={6}
            color="orange"
          />
        </div>

        {/* FILTERS */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border mb-10">
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

        {/* GRID */}
        {loading ? (
          <div className="text-center py-24">Loading users...</div>
        ) : students.length === 0 ? (
          <div className="text-center py-24">No users found</div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
              {students.map((s) => (
                <Card
                  key={s.id}
                  className="rounded-2xl border bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    {/* AVATAR */}
                    <div className="flex justify-center mb-4 relative">
                      {s.image ? (
                        <img
                          src={s.image}
                          className="h-20 w-20 rounded-full object-cover border"
                        />
                      ) : (
                        <div className="h-20 w-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow">
                          {getInitials(s.name)}
                        </div>
                      )}

                      {s.verified && (
                        <div className="absolute bottom-0 right-[38%] bg-green-500 p-1 rounded-full">
                          <BadgeCheck className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>

                    {/* INFO */}
                    <div className="text-center space-y-1">
                      <h3 className="font-semibold text-base">{s.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {s.branch} • {s.session}
                      </p>
                      <p className="text-xs text-muted-foreground">{s.email}</p>
                    </div>

                    {/* ACTIONS */}
                    <div className="border-t my-4"></div>

                    <div className="flex gap-2">
                      {/* <Button size="sm" variant="outline" className="flex-1 rounded-lg">
                        <Mail className="h-4 w-4 mr-2"/>Email
                      </Button> */}

                      <a
                        href={`mailto:${s.email}?subject=KEC Alumni Network&body=Hello ${s.name},`}
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full rounded-lg"
                        >
                          <Mail className="h-4 w-4 mr-2" />
                          Email
                        </Button>
                      </a>

                      <Button size="sm" className="flex-1 rounded-lg">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="flex justify-center items-center gap-6 mt-14">
              <Button
                variant="outline"
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
              >
                Prev
              </Button>
              <span className="text-sm font-medium">
                Page {page} of {totalPages}
              </span>
              <Button
                variant="outline"
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages}
              >
                Next
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function StatCard({
  icon,
  title,
  value,
  color,
}: {
  icon: any;
  title: string;
  value: number;
  color: string;
}) {
  const colors: any = {
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-600",
  };

  return (
    <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
      <CardContent className="p-6 flex items-center gap-4">
        <div className={`p-3 rounded-xl ${colors[color]}`}>{icon}</div>
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
      </CardContent>
    </Card>
  );
}
