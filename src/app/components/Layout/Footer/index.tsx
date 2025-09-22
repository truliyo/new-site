"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { footerlinks } from "@/app/types/footerlinks";

const Footer = () => {
  const [footerlinks, setFooterLinks] = useState<footerlinks[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setFooterLinks(data.FooterLinksData);
      } catch (error) {
        console.error("Error fetching footer links:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <footer className="bg-[#1d1d1f] text-white">
      <div className="container mx-auto max-w-5xl px-4 py-18 lg:pt-[150px] flex flex-col items-center text-center space-y-8">
        {/* LOGO */}
        <div>
          <Image
            src="/images/footer/oposite-logo-removebg-preview.png"
            alt="Footer Logo"
            width={200}   // ✅ fixed dimensions prevent overlap
            height={80}
            className="object-contain"
          />
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-6">
          <Link href="https://facebook.com">
            {/* <Image src="/images/footer/vec.svg" alt="facebook" width={35} height={35} /> */}
          </Link>
          <Link href="https://www.instagram.com/truliyo_digital/">
            <Image src="/images/footer/instagram.svg" alt="instagram" width={35} height={35} />
          </Link>
          <Link href="https://linkedin.com">
            <Image src="/images/footer/icons8-linked-in.svg" alt="linkedin" width={35} height={35} />
          </Link>
          <Link href="https://twitter.com">
            <Image src="/images/footer/vec.svg" alt="twitter" width={35} height={35} className="h-6 w-4 mt-1"/>
          </Link>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="flex flex-wrap justify-center gap-4 border-t border-white/20 pt-6">
          {footerlinks.flatMap((section, sectionIndex) =>
            section.links.map((link, i) => (
              <span key={`${sectionIndex}-${i}`} className="flex items-center">
                <Link
                  href={link.href ?? "#"}
                  className="text-white text-base hover:text-white/60 hover:underline"
                >
                  {link.label}
                </Link>
                {(i !== section.links.length - 1 ||
                  sectionIndex !== footerlinks.length - 1) && (
                  <span className="px-2 text-white/40">/</span>
                )}
              </span>
            ))
          )}
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/20 w-full pt-4">
          <p className="text-sm text-gray-400">
            Copyright ©2025{" "}
            <Link
              href="https://truliyo.com/"
              target="_blank"
              className="hover:text-white/60 hover:underline"
            >
              Truliyo Digital
            </Link>
            . All rights reserved. Powered by WordPress & Designed by Bizberg Themes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
