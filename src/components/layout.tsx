// "use client";

// import React from "react";
// import Link from "next/link";

// import { MobileNav } from "./mobile-nav";
// import { ThemeToggle } from "./theme-toggle";

// import { cn } from "@/lib/utils";

// export function Navbar() {
//   return (
//     <header className="h-fit w-full">
//       <nav
//         className={cn(
//           "z-50",
//           "flex h-[3.5rem] px-4",
//           "w-full items-center border-b bg-accent/20"
//         )}
//       >
//         <div className="hidden select-none text-xl font-extrabold uppercase md:block">
//           Downloader
//         </div>
//         <MobileNav className="md:hidden" />
//         <div className="ml-auto flex items-center gap-4">
//           <div className="hidden items-center gap-4 text-lg sm:gap-8 sm:pr-8 md:flex">
//             <Link href="/" className="hover:underline">
//               Home
//             </Link>

//           </div>
//           <ThemeToggle />
//         </div>
//       </nav>
//     </header>
//   );
// }

// export function Footer() {
//   return (
//     <footer className="h-8 w-full bg-background/50 text-center text-secondary-foreground">
//       <div className="flex items-center justify-between border-t border-input px-4 py-2">
//         <div aria-label="Disclaimer" className="text-sm font-semibold">
//           We are not affiliated with Instagram or Meta
//         </div>
//         <div className="flex items-center gap-1 text-sm">
//           <Link href="/terms-of-service" className="hover:underline">
//             Terms of Service
//           </Link>
//           <span aria-hidden="true" className="mx-2 select-none">
//             |
//           </span>
//           <Link href="/privacy-policy" className="hover:underline">
//             Privacy Policy
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// }
// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import logo from "./Logo.png"; // ✅ make sure Logo.png is in the same folder

// import { MobileNav } from "./mobile-nav";
// import { ThemeToggle } from "./theme-toggle";

// import { cn } from "@/lib/utils";

// export function Navbar() {
//   return (
//     <header className="h-fit w-full">
//       <nav
//         className={cn(
//           "z-50",
//           "flex h-[3.5rem] px-4",
//           "w-full items-center border-b bg-accent/20"
//         )}
//       >
//         {/* Logo visible on all screens */}
//         <div className="flex select-none items-center">
//           <Link href="/">
//             <Image
//               src={logo}
//               alt="Instagrab Logo"
//               width={120} // tweak size as you like
//               height={40}
//               priority
//             />
//           </Link>
//         </div>

//         {/* Mobile nav (only shows on small screens) */}
//         <MobileNav className="ml-2 md:hidden" />

//         {/* Right side nav */}
//         <div className="ml-auto flex items-center gap-4">
//           <div className="hidden items-center gap-4 text-lg sm:gap-8 sm:pr-8 md:flex">
//             {/* Example nav link (optional) */}
//             {/* <Link href="/" className="hover:underline">Home</Link> */}
//           </div>
//           <ThemeToggle />
//         </div>
//       </nav>
//     </header>
//   );
// }

// export function Footer() {
//   return (
//     <footer className="h-8 w-full bg-background/50 text-center text-secondary-foreground">
//       <div className="flex items-center justify-between border-t border-input px-4 py-2">
//         <div aria-label="Disclaimer" className="text-sm font-semibold">
//           Biz Instagram və ya Meta ilə bağlı deyilik
//         </div>
//         <div className="flex items-center gap-1 text-sm">
//           <Link href="/terms-of-service" className="hover:underline">
//             Xidmət Şərtləri
//           </Link>
//           <span aria-hidden="true" className="mx-2 select-none">
//             |
//           </span>
//           <Link href="/privacy-policy" className="hover:underline">
//             Məxfilik Siyasəti
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// }
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./Logo.png";

import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full animate-float-slow"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-l from-accent/10 to-primary/10 rounded-full animate-float-medium"></div>
        <div className="absolute top-20 left-1/3 w-12 h-12 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full animate-float-fast"></div>
        <div className="absolute top-40 right-1/3 w-8 h-8 bg-gradient-to-l from-accent/5 to-primary/5 rounded-full animate-float-slow"></div>
      </div>

      <header className="h-fit w-full relative">
        <nav
          className={cn(
            "z-50 transition-all duration-500 ease-out",
            "flex h-[3.5rem] px-4",
            "w-full items-center border-b",
            isScrolled 
              ? "bg-background/95 backdrop-blur-md shadow-lg border-border/50" 
              : "bg-accent/20 border-border",
            "animate-slide-down"
          )}
        >
          {/* Logo with 3D hover effect */}
          <div className="flex select-none items-center group">
            <Link href="/" className="transform transition-all duration-300 hover:scale-105 hover:-rotate-1">
              <div className="relative">
                <Image
                  src={logo}
                  alt="Instagrab Loqosu"
                  width={120}
                  height={40}
                  priority
                  className="transition-all duration-300 group-hover:drop-shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded blur-sm -z-10"></div>
              </div>
            </Link>
          </div>

          {/* Mobile nav with enhanced styling */}
          <MobileNav className="ml-2 md:hidden transform transition-all duration-300 hover:scale-105" />

          {/* Right side nav with 3D effects */}
          <div className="ml-auto flex items-center gap-4">
            <div className="hidden items-center gap-4 text-lg sm:gap-8 sm:pr-8 md:flex">
              <Link 
                href="/" 
                className="relative group px-3 py-2 rounded-md transition-all duration-300 hover:bg-accent/10 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span className="relative z-10">Ana Səhifə</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
              </Link>
              <a
              href="https://jrtesla611.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group px-3 py-2 rounded-md transition-all duration-300 hover:bg-accent/10 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="relative z-10">Haqqımızda</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
            </a>

            </div>
            <div className="transform transition-all duration-300 hover:scale-110 hover:rotate-12">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="relative h-auto w-full bg-background/50 text-center text-secondary-foreground overflow-hidden">
      {/* Animated background elements for footer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-5 left-10 w-16 h-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full animate-float-reverse"></div>
        <div className="absolute bottom-8 right-16 w-12 h-12 bg-gradient-to-l from-accent/5 to-primary/5 rounded-full animate-float-slow-reverse"></div>
      </div>
      
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between border-t border-input px-4 py-4 gap-2">
        <div 
          aria-label="Disclaimer" 
          className="text-sm font-semibold transform transition-all duration-300 hover:scale-105 hover:text-primary"
        >
          Biz Instagram və ya Meta ilə əlaqəli deyilik
        </div>
        <div className="flex items-center gap-1 text-sm">
          <Link 
            href="/terms-of-service" 
            className="relative group px-2 py-1 rounded transition-all duration-300 hover:bg-accent/10 hover:-translate-y-0.5"
          >
            <span className="relative z-10 hover:underline">Xidmət Şərtləri</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></div>
          </Link>
          <span aria-hidden="true" className="mx-2 select-none text-muted-foreground">
            |
          </span>
          <Link 
            href="/privacy-policy" 
            className="relative group px-2 py-1 rounded transition-all duration-300 hover:bg-accent/10 hover:-translate-y-0.5"
          >
            <span className="relative z-10 hover:underline">Məxfilik Siyasəti</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></div>
          </Link>
        </div>
      </div>
    </footer>
  );
}

// Custom CSS animations - add this to your global CSS or Tailwind config
/*
@keyframes float-slow {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes float-medium {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(-180deg); }
}

@keyframes float-fast {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(360deg); }
}

@keyframes float-reverse {
  0%, 100% { transform: translateY(0px) rotate(360deg); }
  50% { transform: translateY(-25px) rotate(0deg); }
}

@keyframes float-slow-reverse {
  0%, 100% { transform: translateY(0px) rotate(-360deg); }
  50% { transform: translateY(-18px) rotate(0deg); }
}

@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 4s ease-in-out infinite;
}

.animate-float-fast {
  animation: float-fast 3s ease-in-out infinite;
}

.animate-float-reverse {
  animation: float-reverse 5s ease-in-out infinite;
}

.animate-float-slow-reverse {
  animation: float-slow-reverse 7s ease-in-out infinite;
}

.animate-slide-down {
  animation: slide-down 0.6s ease-out;
}
*/