export default function BandImageHeader() {
  return (
    <div className="header_parent">
      <div className="header">
        <img
          id="header_image"
          className="header_image"
          src="/images/backgroundHeader_compressed.webp"
          loading="eager"
        />

        <div className="header_div">
          <img
            className="band_logo"
            src="/images/TextBC.webp"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}
