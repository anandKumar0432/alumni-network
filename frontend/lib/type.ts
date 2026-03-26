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