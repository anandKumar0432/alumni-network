
"use client";

import { useState } from "react";
import axios from "axios";
import { is } from "zod/v4/locales";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function CreateEventPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    startDateTime: "",
    endDateTime: "",
    venue: "",
    formLink: "",
    bannerUrl: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
        ...form,
        startDateTime: new Date(form.startDateTime).toISOString(),
        endDateTime: new Date(form.endDateTime).toISOString(),
        bannerUrl: form.bannerUrl || undefined,
    };

    try {
      setLoading(true);

      const res = await axios.post(`${BACKEND_URL}/admin/event`,
        payload,
        {
            withCredentials: true
        });

      alert("Event created successfully");

      // reset form
      setForm({
        title: "",
        description: "",
        startDateTime: "",
        endDateTime: "",
        venue: "",
        formLink: "",
        bannerUrl: "",
      });

    } catch (err: any) {
      console.error(err.response?.data || err.message);
      alert("Failed to create event");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white p-6 rounded-2xl shadow-md space-y-4"
      >
        <h1 className="text-2xl font-bold">Create Event</h1>

        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Start Date */}
        <input
          type="datetime-local"
          name="startDateTime"
          value={form.startDateTime}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        {/* End Date */}
        <input
          type="datetime-local"
          name="endDateTime"
          value={form.endDateTime}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        {/* Venue */}
        <input
          type="text"
          name="venue"
          placeholder="Venue"
          value={form.venue}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Form Link */}
        <input
          type="url"
          name="formLink"
          placeholder="Registration Link"
          value={form.formLink}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Banner */}
        <input
          type="url"
          name="bannerUrl"
          placeholder="Banner Image URL"
          value={form.bannerUrl}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Creating..." : "Create Event"}
        </button>
      </form>
    </div>
  );
}