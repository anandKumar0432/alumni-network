"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaReddit, FaEnvelope } from "react-icons/fa";

interface AlumniCardProps {
  id: string;
  name: string;
  session: string;
  branch: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
  reddit?: string;
  email?: string;
}

const AlumniCard: React.FC<AlumniCardProps> = ({
  id,
  name,
  session,
  branch,
  image,
  linkedin,
  twitter,
  reddit,
  email,
}) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-indigo-500/30 via-purple-500/20 to-pink-500/30 blur pointer-events-none" />

      <Link
        // href={`/profile/alumni?id=${id}`}
        href={`/profile?id=${id}`}
        className="relative block overflow-hidden rounded-3xl border bg-white/80 backdrop-blur shadow-sm hover:shadow-2xl transition-all"
      >
        <div className="relative h-48 w-full overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-gray-700 to-gray-900">
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white opacity-90"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="8" r="4" fill="currentColor" />
                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" fill="currentColor" />
              </svg>
            </div>
          )}

          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent opacity-80" />

          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition">
            {linkedin && (
              <a
                href={linkedin}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/90 hover:bg-white shadow"
              >
                <FaLinkedin />
              </a>
            )}

            {twitter && (
              <a
                href={twitter}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/90 hover:bg-white shadow"
              >
                <FaTwitter />
              </a>
            )}

            {reddit && (
              <a
                href={reddit}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/90 hover:bg-white shadow"
              >
                <FaReddit />
              </a>
            )}

            {email && (
              <a
                href={`mailto:${email}`}
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-full bg-white/90 hover:bg-white shadow"
              >
                <FaEnvelope />
              </a>
            )}
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold tracking-tight">{name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {session} • {branch}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs rounded-full bg-gray-100 px-3 py-1">
              {branch}
            </span>
            <span className="text-xs rounded-full border px-3 py-1">
              {session}
            </span>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">KEC Connect</span>

            <Button size="sm" variant="outline" className="rounded-full gap-2">
              View profile →
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default AlumniCard;
