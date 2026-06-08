export default function Contact() {
  return (
    <div
      id="contact-us"
      className="relative mb-8 mt-6 flex flex-col text-center font-supreme sm:mb-10 sm:mt-10"
    >
      <p className="mb-4 text-3xl sm:mb-5 sm:text-5xl">Get In Touch</p>
      <div className="space-y-3 px-2 text-base sm:text-xl lg:text-2xl">
        <p className="break-words">
          You contact us via the email:{" "}
          <a
            className="underline underline-offset-2 hover:text-white"
            href="mailto:burntchapt3r@gmail.com"
          >
            burntchapt3r@gmail.com
          </a>
        </p>
        <p className="break-words">
          or via our booking agent:{" "}
          <a
            className="underline underline-offset-2 hover:text-white"
            href="mailto:conall@mosaicmusic.co.uk"
          >
            conall@mosaicmusic.co.uk
          </a>
        </p>
      </div>
    </div>
  );
}
