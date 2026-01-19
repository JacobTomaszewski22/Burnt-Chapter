export default function Biography() {
  return (
    <div className="bio">
      <hr />
      <h1>Biography</h1>
      <hr />
      <div className="bio_content_div">
        <div className="bio_content_subgrid">
          <ul className="bio_list">
            <li className="bio_writing_list">Raw.</li>
            <li className="bio_writing_list">Heavy.</li>
            <li className="bio_writing_list">Groove.</li>
            <li className="bio_writing_list">Burnt Chapter.</li>
          </ul>

          <div className="bio_writing">
            <div className="bio_writing_paragraph">
              Since their first gig in December 2024, Burnt Chapter is already
              making their mark on the London metal scene. Their sound falls
              under the genre of Death Groove, mixing death metal and deathcore
              with groove metal. <br />
            </div>
            <div className="bio_writing_paragraph">
              <br />
              Imagine the brutality of Thy Art Is Murder, the technical mastery
              of Gojira, and the raw energy of Lamb of God—that’s the essence of
              Burnt Chapter.
            </div>
          </div>

          <div className="review_1">
            <h2 className="review_big review_1_big">"ABSOLUTE FILTH"</h2>
            <div className="review_small review_1_small">
              - Nicky Clifford (Radio Northwich)
            </div>
          </div>
        </div>

        <div className="bio_photo_div">
          <div className="bio_photos_wrapper">
            <img
              className="bio_photo"
              src="/images/TomSinging_compressed.webp"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
