export default function BandImageHeader() {
  return (
    <div className="header">
      <img
        className="header_image"
        src="/images/backgroundHeader.webp"
        loading="eager"
      />

      <div className="header_div">
        <img className="band_logo" src="/images/TextBC.webp" loading="eager" />
      </div>
    </div>
  );
}
