"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/lib/validators/register.schema";
import { z } from "zod";

import Input2 from "@/components/input2";
import SelectField from "@/components/selectField";
import StudentForm from "@/components/studentForm";
import AlumniForm from "@/components/AlumniForm";

type RegisterForm = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const role = watch("role");

  const onSubmit = async (data: RegisterForm) => {
    console.log("FORM DATA", data);
  };

  return (
    <div>
      <Header />

      <div className="w-full min-h-screen pt-15 pb-5 flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-4xl bg-white p-6 rounded-lg shadow space-y-6"
        >
          <h1 className="text-lg font-semibold text-center">
            User Registration
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <Input2 label="Name*" placeholder="Name" required register={register("name")} />
            <Input2
              label="Email*"
              type="email"
              placeholder="example@gmail.com"
              required
              register={register("email")}
            />

            <Input2
              label="Password*"
              type="password"
              placeholder="Choose strong password"
              required
              register={register("password")}
            />
            <Input2
              label="Registration Number*"
              placeholder="22105129023"
              required
              register={register("regNo")}
            />

            <SelectField
              label="Branch*"
              register={register("branch")}
              options={["CSE", "CIVIL", "ME", "EEE", "VLSI"]}
            />

            <Input2
              label="Session*"
              placeholder="2022-2026"
              required
              register={register("session")}
            />

            <SelectField
              label="Role*"
              register={register("role")}
              options={["STUDENT", "ALUMNI"]}
            />
          </div>

          <div className="border-t pt-4">
            {role === "STUDENT" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <StudentForm register={register} />
              </div>
            )}

            {role === "ALUMNI" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <AlumniForm register={register} />
              </div>
            )}
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full md:w-1/3 mx-auto block bg-black text-white py-2 rounded-md text-sm hover:bg-gray-800 transition disabled:opacity-50"
          >
            Register
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
