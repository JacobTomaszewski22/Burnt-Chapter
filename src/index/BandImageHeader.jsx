export default function BandImageHeader() {
  return (
    <div className="header_parent relative">
      <div className="header sticky">
        <img
          id="header_image"
          className="header_image w-full relative object-fill left-0 top-0 -z-10 -mt-[12%] max-w-full"
          src="/images/newHeader.webp"
          loading="eager"
        />

        <div className="header_div absolute z-[1] max-w-full left-0 top-[54%]">
          <img
            className="band_logo relative opacity-100 w-[60%] h-[50%] left-[20%]"
            src="/images/TextBC.webp"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}
