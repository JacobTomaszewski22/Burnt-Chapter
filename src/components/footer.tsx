export default function Footer() {
  return (
    <footer className="relative z-1 mt-16 w-full min-h-[40vh] overflow-hidden sm:mt-32 lg:mt-56 lg:min-h-[50vh]">
      <img
        src="/images/footer.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="lazy"
      />

      <div className="relative z-1 flex flex-row justify-center px-4 py-12 sm:py-16">
        <div className="flex flex-col items-center justify-center gap-6">
          <img
            className="w-[min(70vw,16rem)] sm:max-w-[20vw]"
            src="/images/TextBC.webp"
            alt="Burnt Chapter"
            loading="lazy"
          />
          <div className="font-supreme text-center text-sm sm:text-base">
            <p className="break-words">
              Contact:{" "}
              <a
                className="underline underline-offset-2 hover:text-white"
                href="mailto:burntchapt3r@gmail.com"
              >
                burntchapt3r@gmail.com
              </a>
            </p>
            <p className="mt-2">© Burnt Chapter 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
