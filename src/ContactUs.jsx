export default function ContactUs() {
  return (
    <div className="contact_us_section">
      <h1>Contact</h1>
      <hr />
      <div className="contact_us_flex">
        <div className="contact_us_writing">
          <h4>
            For all enquiries:{" "}
            <a href="burntchapt3r@gmail.com">burntchapt3r@gmail.com</a>
          </h4>
        </div>
        <div className="contact_us_photo_div">
          <img
            className="contact_us_photo"
            src="images/all_together_2.webp"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
