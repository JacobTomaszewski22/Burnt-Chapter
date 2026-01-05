export default function Biography() {
  return (
    <div className="bio relative mt-[2%] text-lg max-w-[98%] box-border tablet-lg:mt-[3%] tablet-sm:mt-[8%] mobile:mt-[10%] mobile:max-w-full [@media(width<=478px)]:mt-[15%] [@media(width<=478px)]:max-w-full">
      <hr />
      <h1>Biography</h1>
      <hr />
      <div className="bio_content_div flex flex-row items-center gap-[1%] tablet-sm:flex-col">
        <div className="bio_content_subgrid flex flex-col">
          <ul>
            <li className="bio_writing_list relative text-[xxx-large] font-thin text-right list-none">Raw.</li>
            <li className="bio_writing_list relative text-[xxx-large] font-thin text-right list-none">Heavy.</li>
            <li className="bio_writing_list relative text-[xxx-large] font-thin text-right list-none">Groove.</li>
            <li className="bio_writing_list relative text-[xxx-large] font-thin text-right list-none">Burnt Chapter.</li>
          </ul>

          <div className="bio_writing relative text-xl ml-[2%] mt-[8%] tablet-lg:mt-[4%] tablet-sm:mt-[2%] [@media(width<=478px)]:pl-[4%] [@media(width<=478px)]:mt-[8%] [@media(width<=478px)]:text-base [@media(width<=478px)]:w-[92%] [@media(width<=478px)]:break-words">
            <div className="bio_writing_paragraph">
              Since their first gig in December 2024, Burnt Chapter is already
              making their mark on the London metal scene. Their sound falls
              under the genre of Death Groove, mixing death metal and deathcore
              with groove metal. <br />
            </div>
            <div className="bio_writing_paragraph">
              <br />
              Imagine the brutality of Thy Art Is Murder, the technical mastery
              of Gojira, and the raw energy of Lamb of God—that's the essence of
              Burnt Chapter.
            </div>
          </div>

          <div className="review_1 mt-[5%] tablet-lg:mt-0 [@media(width<=478px)]:mt-0">
            <h2 className="review_big review_1_big text-[80px] mb-0 tablet-lg:mt-[5%] [@media(width<=478px)]:pl-[4%] [@media(width<=478px)]:break-words [@media(width<=478px)]:text-[9vh]">"ABSOLUTE FILTH"</h2>
            <div className="review_small review_1_small relative top-0 font-extralight left-[20%] mobile:left-0 mobile:text-right [@media(width<=478px)]:left-0 [@media(width<=478px)]:text-right">
              - Nicky Clifford (Radio Northwich)
            </div>
          </div>
        </div>

        <div className="bio_photo_div max-w-[50%] tablet-sm:max-w-[60%] mobile:max-w-[98%] [@media(width<=478px)]:max-w-[98%]">
          <div className="bio_photos_wrapper">
            <img
              className="bio_photo max-w-[98%] m-[1%]"
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
