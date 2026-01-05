export default function ContactUs() {
  return (
    <div className="contact_us_section max-w-[98%] mobile:max-w-full">
      {/* <link rel="stylesheet" href="styles/ContactUsStyle.css" /> */}
      <h1>Contact</h1>
      <hr />
      <div className="contact_us_flex flex flex-col justify-center">
        <div className="contact_us_writing mt-[1%] ml-[4%] mb-[1%]">
          <h4>
            For all enquiries:{" "}
            <a href="burntchapt3r@gmail.com">burntchapt3r@gmail.com</a>
          </h4>
        </div>
        {/* <div className="contact_us_photo_div max-w-full ml-[2%] mt-[1%] mr-0">
          <img
            className="contact_us_photo max-w-full hidden"
            src="images/all_together_2_compressed.webp"
            loading="lazy"
          />
        </div> */}
      </div>
    </div>
  );
}
