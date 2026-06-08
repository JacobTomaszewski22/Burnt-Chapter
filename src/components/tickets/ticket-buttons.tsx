const ACTION_BUTTON_CLASS =
  "inline-flex w-full items-center justify-center rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 bg-[rgba(215,35,35,1)] text-white hover:scale-105 hover:bg-[rgba(126,21,21,1)] sm:w-auto sm:px-8";

const CTA_LINKS = [
  {
    label: "Follow",
    href: "https://www.bandsintown.com/a/15581409?came_from=247&trigger=track&app_id=ID_15581409&locale=en",
  },
  {
    label: "Request a show",
    href: "https://www.bandsintown.com/artist-subscribe/15581409-burnt-chapter?affil_code=js_&app_id=js_&bg-color=rgba%28255%2C255%2C255%2C1%29&border-color=rgba%2874%2C74%2C74%2C1%29&came_from=700&cta-bg-color=rgba%2874%2C74%2C74%2C1%29&cta-border-color=rgba%2874%2C74%2C74%2C1%29&cta-border-radius=2px&cta-border-width=0px&cta-text-color=rgba%28255%2C255%2C255%2C1%29&font=Helvetica&play-my-city=true&signature=ZZ6076a9cf29f868064f955d426bb303cfacf10fa4d30ea9390f5013a920e19a3e&spn=0&text-color=rgba%2866%2C66%2C66%2C1%29&utm_campaign=play_my_city&utm_medium=web&utm_source=widget",
  },
] as const;

export default function TicketButtons() {
  return (
    <nav
      className="font-supreme mx-auto flex w-full max-w-4xl flex-col gap-3 px-5 pb-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4"
      aria-label="Bandsintown actions"
    >
      {CTA_LINKS.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          className={ACTION_BUTTON_CLASS}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
