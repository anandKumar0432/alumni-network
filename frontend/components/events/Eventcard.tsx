"use client";

import { Event } from "@/lib/type";
import Image from "next/image";

export default function EventCard({ event }: { event: Event }) {
  const isExpired = new Date(event.endDateTime) < new Date();

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1">
      
      {/* Banner */}
      <div className="relative w-full h-44 overflow-hidden">
        <Image
          src={"/events-card.png"}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Status badge */}
        <span
          className={`absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded-full backdrop-blur-md ${
            isExpired
              ? "bg-red-500/90 text-white"
              : "bg-green-500/90 text-white"
          }`}
        >
          {isExpired ? "Expired" : "Upcoming"}
        </span>

        {/* Title on image */}
        <h2 className="absolute bottom-3 left-4 right-4 text-white text-lg font-semibold line-clamp-2">
          {event.title}
        </h2>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        
        {/* Description */}
        {event.description && (
          <p className="text-gray-600 text-sm line-clamp-2">
            {event.description}
          </p>
        )}

        {/* Dates */}
        <div className="text-xs text-gray-500 space-y-1">
          <p>
            <span className="font-medium text-gray-700">Start:</span>{" "}
            {new Date(event.startDateTime).toLocaleString("en-IN", {
              dateStyle: "medium",
              timeStyle: "short",
            })}
          </p>
          <p>
            <span className="font-medium text-gray-700">End:</span>{" "}
            {new Date(event.endDateTime).toLocaleString("en-IN", {
              dateStyle: "medium",
              timeStyle: "short",
            })}
          </p>
        </div>

        {/* Venue */}
        {event.venue && (
          <p className="text-sm text-gray-700 flex items-center gap-2">
            📍 <span>{event.venue}</span>
          </p>
        )}

        {/* CTA */}
        {event.formLink && (
          <a
            href={event.formLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center mt-3 py-2 rounded-lg bg-black text-white text-sm font-medium hover:bg-blue-700 transition"
          >
            Register Now
          </a>
        )}
      </div>
    </div>
  );
}