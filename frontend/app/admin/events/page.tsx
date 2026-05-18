
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
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex justify-center items-center p-6">
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl bg-white p-8 rounded-3xl shadow-xl space-y-6"
    >
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Create Event</h1>
        <p className="text-gray-500 text-sm">
          Fill in the details to publish your event
        </p>
      </div>

      {/* Basic Info */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-700">
          Basic Information
        </h2>

        <div>
          <label className="text-sm font-medium text-gray-600">
            Event Title *
          </label>
          <input
            type="text"
            name="title"
            placeholder="e.g. Alumni Meet 2026"
            value={form.title}
            onChange={handleChange}
            className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Write something exciting about your event..."
            value={form.description}
            onChange={handleChange}
            rows={4}
            className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
          />
        </div>
      </div>

      {/* Date & Time */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-700">
          Schedule
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-600">
              Start Date & Time *
            </label>
            <input
              type="datetime-local"
              name="startDateTime"
              value={form.startDateTime}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">
              End Date & Time *
            </label>
            <input
              type="datetime-local"
              name="endDateTime"
              value={form.endDateTime}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
              required
            />
          </div>
        </div>
      </div>

      {/* Location */}
      <div>
        <label className="text-sm font-medium text-gray-600">
          Venue
        </label>
        <input
          type="text"
          name="venue"
          placeholder="e.g. College Auditorium"
          value={form.venue}
          onChange={handleChange}
          className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
        />
      </div>

      {/* Links */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-700">Links</h2>

        <input
          type="url"
          name="formLink"
          placeholder="Registration Link (Google Form, etc.)"
          value={form.formLink}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
        />

        <input
          type="url"
          name="bannerUrl"
          placeholder="Banner Image URL"
          value={form.bannerUrl}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-black text-white py-3 rounded-xl font-semibold text-lg hover:bg-gray-900 transition-all duration-200 disabled:opacity-50"
      >
        {loading ? "Creating Event..." : " Publish Event"}
      </button>
    </form>
  </div>
);
}