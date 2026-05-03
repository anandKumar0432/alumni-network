export type Profile = {
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
export type User = {
  msg: string,
  user: {
    name: string;
    email: string;
    regNo: string;
    branch: string;
    session: string;
    college: string;
    role: "ALUMNI" | "STUDENT";
    status?: "PENDING" | "VERIFIED" | "REJECTED";
    alumni?:{
        currentJob?: string;
        currentCompany?: string;
        linkedIn?: string;
        instagram?: string;
        portfolio?: string;
    }
    student?: {
        currentYear?: string;
        interest?: string;
    }
  }
};

export type Event = {
  id: string;
  title: string;
  description: string | null;
  startDateTime: string;
  endDateTime: string;
  venue: string | null;
  formLink: string | null;
  bannerUrl: string | null;
};

export type Student = {
  id: string;
  name: string;
  email: string;
  regNo: string;
  branch: string;
  session: string;
  imageUrl: string | null;

  student: {
    currentYear: string;
    interest: string;
    status: string;
  };
};