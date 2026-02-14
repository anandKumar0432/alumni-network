"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/lib/validators/register.schema";
import { z } from "zod";
import axios from "axios";

import Input2 from "@/components/input2";
import SelectField from "@/components/selectField";
import StudentForm from "@/components/studentForm";
import AlumniForm from "@/components/AlumniForm";

type RegisterForm = z.infer<typeof registerSchema>;

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export default function RegisterPage() {
  if (!BACKEND_URL) {
    throw new Error("NEXT_PUBLIC_BACKEND_URL is not defined");
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: "STUDENT",
    },
  });

  const role = watch("role");

  const onSubmit = async (data: RegisterForm) => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/auth/signup`,
        data
      );
      console.log("FORM DATA", response.data);
    } catch (err: any) {
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="w-full min-h-screen pt-15 pb-5 flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl bg-white p-6 rounded-lg shadow space-y-6"
      >
        <h1 className="text-lg font-semibold text-center">
          User Registration
        </h1>
        {Object.keys(errors).length > 0 && (
          <pre className="text-red-600 text-xs bg-gray-100 p-2 rounded">
            {JSON.stringify(errors, null, 2)}
          </pre>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <Input2 label="Name*" register={register("name")} />
          <Input2 label="Email*" type="email" register={register("email")} />
          <Input2 label="Password*" type="password" register={register("password")} />
          <Input2 label="Registration Number*" register={register("regNo")} />

          <SelectField
            label="Branch*"
            register={register("branch")}
            options={["CSE", "CIVIL", "ME", "EEE", "VLSI"]}
          />

          <Input2 label="Session*" register={register("session")} />

          <SelectField
            label="Role*"
            register={register("role")}
            options={["STUDENT", "ALUMNI"]}
          />
        </div>

        <div className="border-t pt-4">
          {role === "STUDENT" && <StudentForm register={register} />}
          {role === "ALUMNI" && <AlumniForm register={register} />}
        </div>

        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full md:w-1/3 mx-auto block bg-black text-white py-2 rounded-md disabled:opacity-50"
        >
          Register
        </button>
      </form>
    </div>
  );
}
