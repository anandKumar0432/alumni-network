import React from "react";
import Link from "next/link";
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
    <Link href={`/profile/alumni?id=${id}`} className="block">
      <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-md">
        {/* image */}
        <div className="group relative h-44 w-full overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            // avatar
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 transition-transform duration-500 group-hover:scale-110">
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
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>

          <p className="mt-1 text-sm text-gray-500">
            {session} • {branch}
          </p>

          <div className="my-4 h-px w-full bg-gray-100" />

          <div className="flex items-center gap-5">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transform text-gray-400 transition-all duration-300 hover:scale-125 hover:text-blue-600"
              >
                <FaLinkedin size={20} />
              </a>
            )}

            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="transform text-gray-400 transition-all duration-300 hover:scale-125 hover:text-sky-500"
              >
                <FaTwitter size={20} />
              </a>
            )}

            {reddit && (
              <a
                href={reddit}
                target="_blank"
                rel="noopener noreferrer"
                className="transform text-gray-400 transition-all duration-300 hover:scale-125 hover:text-orange-500"
              >
                <FaReddit size={20} />
              </a>
            )}

            {email && (
              <a
                href={`mailto:${email}`}
                className="transform text-gray-400 transition-all duration-300 hover:scale-125 hover:text-red-500"
              >
                <FaEnvelope size={20} />
              </a>
            )}
          </div>
          <div className="mt-4 flex justify-end">
            <span className="text-sm font-medium text-black-600 hover:underline hover:translate-x-1">
              See details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AlumniCard;
