import { Role, Status } from "../generated/prisma/enums.js";
import {prisma} from "../src/lib/prisma.js"
async function main() {

  const admin = await prisma.user.create({
    data: {
      email: "admin@kec.ac.in",
      password: "$2a$10$mAkMrTh7Eej0q71oqPsnV.j.ZPX1LPgkVLyRCJzdcpX1n1UlScjfm",
      name: "Admin User",
      regNo: "KEC-ADMIN-001",
      branch: "ADMIN",
      session: "N/A",
      role: Role.ADMIN,
      emailVerified: true,
    },
  });

  const studentUser = await prisma.user.create({
    data: {
      email: "student1@kec.ac.in",
      password: "$2a$10$x.UZ8v0KkL9N8DmgijAOhe4.dTmztgSesCIxN32FlHz1W0Z4OyaaS",
      name: "Anand Kumar",
      regNo: "KEC20CS001",
      branch: "CSE",
      session: "2020-2024",
      role: Role.STUDENT,
      emailVerified: true,
      student: {
        create: {
          currentYear: "4th",
          interest: "Web Development, DSA",
          status: Status.VERIFIED,
        },
      },
    },
    include: {
      student: true,
    },
  });

  const alumniUser = await prisma.user.create({
    data: {
      email: "alumni1@kec.ac.in",
      password: "$2a$10$bm7yr5DdU4WIQKD3OPITTOEMLyt3bywa7UHzm/sWD.4LfAkKjNq12",
      name: "Rahul Sharma",
      regNo: "KEC16ME045",
      branch: "Mechanical",
      session: "2016-2020",
      role: Role.ALUMNI,
      emailVerified: true,
      alumni: {
        create: {
          linkedIn: "https://linkedin.com/in/rahulsharma",
          instagram: "https://instagram.com/rahulsharma",
          portfolio: "https://rahulsharma.dev",
          status: Status.VERIFIED,
          job: {
            create: [
              {
                company: "Tata Motors",
                role: "Graduate Engineer",
                startDate: new Date("2020-08-01"),
                endDate: new Date("2022-12-31"),
                isCurrent: false,
              },
              {
                company: "L&T",
                role: "Senior Engineer",
                startDate: new Date("2023-01-01"),
                isCurrent: true,
              },
            ],
          },
        },
      },
    },
    include: {
      alumni: {
        include: {
          job: true,
        },
      },
    },
  });

  // ---------- APPROVAL LOG ----------
  await prisma.approvalLog.create({
    data: {
      targetType: Role.ALUMNI,
      targetId: alumniUser.alumni!.id,
      oldStatus: Status.PENDING,
      newStatus: Status.VERIFIED,
      actionById: admin.id,
    },
  });

  console.log("Database seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
