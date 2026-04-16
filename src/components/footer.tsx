"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { LinkedinIcon, InstagramIcon, GithubIcon } from "@/components/icons";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="py-16 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
              {profile.name.split(" ")[0]}
              <span className="text-blue-600 dark:text-blue-400">.</span>
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {profile.title} &mdash; {profile.tagline}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider mb-4">
              Kontak
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail size={14} />
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Phone size={14} />
                  {profile.phone}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <MapPin size={14} />
                  {profile.location}
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider mb-4">
              Sosial Media
            </h4>
            <div className="flex gap-3">
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon width={18} height={18} />
              </a>
              <a
                href={profile.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-pink-100 hover:text-pink-600 dark:hover:bg-pink-900/30 dark:hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon width={18} height={18} />
              </a>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 hover:text-zinc-900 dark:hover:bg-zinc-700 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon width={18} height={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-center">
          <p className="text-xs text-zinc-500 dark:text-zinc-600">
            &copy; {new Date().getFullYear()} {profile.name}. Semua hak
            dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
