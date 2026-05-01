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
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

type RegisterForm = z.infer<typeof registerSchema>;

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export default function RegisterPage() {

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [uploading, setUploading] = useState(false);

  if (!BACKEND_URL) {
    throw new Error("NEXT_PUBLIC_BACKEND_URL is not defined");
  }

  const router = useRouter();

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

    // const router = useRouter();
    try {
      const response = await axios.post(
        `${BACKEND_URL}/auth/signup`,
        data
      );
      router.push("/verify-email");
      console.log("FORM DATA", response.data);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data || error.message);
      } else {
        console.error(error);
      }
    }
  };

  const handleImageUpload = async () => {
  if (!imageFile) return;

  try {
    setUploading(true);

    const formData = new FormData();
    formData.append("file", imageFile);

    const res = await axios.post(
      `${BACKEND_URL}/auth/upload`, // your backend endpoint
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    setImageUrl(res.data.imageUrl); // backend should return { url }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Upload failed:", error.response?.data || error.message);
    } else {
      console.error("Upload failed:", error);
    }
  } finally {
    setUploading(false);
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

        <div className="flex flex-col items-center gap-3">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                setImageFile(e.target.files[0]);
              }
            }}
          />

          <button
            type="button"
            onClick={handleImageUpload}
            className="bg-blue-500 text-white px-4 py-1 rounded"
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Upload Image"}
          </button>

          {imageUrl && (
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <Image
                src={imageUrl}
                alt="Uploaded"
                width={96}
                height={96}
                className="rounded-full object-cover"
              />
            </div>
          )}
        </div>

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
