import { useEffect, useState } from "react";

const HEADER_CTA_CLASS =
  "inline-flex items-center justify-center rounded-md bg-[rgba(215,35,35,1)] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition-all duration-200 hover:scale-105 hover:bg-[rgba(126,21,21,1)]";

const NAV_LINK_CLASS =
  "cursive-font text-xl font-bold transition-all duration-200 hover:scale-105 hover:!text-white lg:text-3xl";

const MOBILE_NAV_LINK_CLASS =
  "cursive-font block py-3 text-2xl font-bold transition-colors hover:text-white";

const SOCIAL_LINK_CLASS =
  "transition-all duration-200 hover:scale-105";

const SOCIAL_ICON_CLASS =
  "h-8 w-8 grayscale transition-all duration-200 hover:grayscale-0";

const FOLLOW_HREF =
  "https://www.bandsintown.com/a/15581409?came_from=247&trigger=track&app_id=ID_15581409&locale=en";

const NAV_LINKS = [
  { label: "New Releases", href: "#new-releases" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact-us" },
  { label: "Tickets", href: "#tickets" },
] as const;

const SOCIAL_LINKS = [
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/1ggfLpkzXNWzHIR8kUno4q?si=Og9uCkm-R0iErQ75w75DLg",
    icon: "/images/link_icons/Spotify_icon.svg",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/burntchapter/",
    icon: "/images/link_icons/Instagram_logo_2022.svg",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61571350486287",
    icon: "/images/link_icons/2023_Facebook_icon.svg",
  },
  {
    label: "SoundCloud",
    href: "https://soundcloud.com/burnt-chapter?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    icon: "/images/link_icons/Antu_soundcloud.svg",
  },
] as const;

function SocialLinks() {
  return (
    <>
      <a
        href={FOLLOW_HREF}
        target="_blank"
        rel="noreferrer"
        className={HEADER_CTA_CLASS}
      >
        Follow
      </a>
      {SOCIAL_LINKS.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className={SOCIAL_LINK_CLASS}
        >
          <img
            src={icon}
            alt=""
            className={SOCIAL_ICON_CLASS}
            loading="lazy"
          />
        </a>
      ))}
    </>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="relative w-full">
      <div className="max-h-[85vh] w-full overflow-hidden sm:max-h-[100vh]">
        <img
          id="header_image"
          className="h-auto w-full object-cover object-top"
          src="/images/newHeader.webp"
          loading="eager"
          alt=""
        />
      </div>

      <div className="pointer-events-none absolute left-0 top-[8%] z-10 w-full sm:top-[10%]">
        <img
          className="relative left-1/2 h-auto w-[min(85vw,28rem)] -translate-x-1/2 opacity-100 sm:left-[20%] sm:w-[60%] sm:translate-x-0"
          src="/images/TextBC.webp"
          loading="eager"
          alt="Burnt Chapter"
        />
      </div>

      <div className="absolute left-0 right-0 top-0 z-20 w-full px-4 py-3 sm:px-6 lg:top-[3%]">
        <div className="flex items-center justify-end lg:justify-between">
          <nav
            className="ml-2 hidden flex-row items-center gap-6 lg:flex lg:gap-10"
            aria-label="Site navigation"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} href={href} className={NAV_LINK_CLASS}>
                {label}
              </a>
            ))}
          </nav>

          <nav
            className="relative hidden flex-row items-center gap-3 lg:flex"
            aria-label="External links"
          >
            <SocialLinks />
          </nav>

          <button
            type="button"
            className="cursive-font rounded-md border border-white/20 bg-black/50 px-4 py-2 text-lg font-bold text-white  backdrop-blur-sm transition-colors hover:bg-black/70 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            Menu
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 flex flex-col bg-black/95 px-6 pt-16 backdrop-blur-md lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <button
            type="button"
            className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-antiquewhite transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <nav
            className="flex flex-col border-b border-white/15 pb-6"
            aria-label="Site navigation"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={MOBILE_NAV_LINK_CLASS}
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
          </nav>

          <nav
            className="mt-6 flex flex-row flex-wrap items-center gap-4"
            aria-label="External links"
          >
            <SocialLinks />
          </nav>
        </div>
      )}
    </header>
  );
}
