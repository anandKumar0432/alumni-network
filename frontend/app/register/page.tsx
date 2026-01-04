"use client";

import { Header } from "@/components/header";
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
    // example API call
  };

  return (
    <div>
      <Header />

      <div className="w-full min-h-screen pt-20 flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-96 bg-white p-6 rounded-lg shadow space-y-4"
        >
          <h1 className="text-2xl font-bold text-center">
            User Registration
          </h1>
          <Input2 label="Name*" required register={register("name")} />
          <Input2 label="Email*" type="email" required register={register("email")} />
          <Input2 label="Password*" type="password" required register={register("password")} />
          <Input2 label="Registration Number*" required register={register("regNo")} />

          <SelectField
            label="Branch*"
            register={register("branch")}
            options={["CSE", "CIVIL", "ME", "EEE", "VLSI"]}
          />

          <Input2
            label="Session (e.g. 2021-2025)*"
            required
            register={register("session")}
          />

          <SelectField
            label="Role*"
            register={register("role")}
            options={["STUDENT", "ALUMNI"]}
          />

          {role === "STUDENT" && <StudentForm register={register} />}
          {role === "ALUMNI" && <AlumniForm register={register} />}

          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition disabled:opacity-50 active:bg-amber-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
