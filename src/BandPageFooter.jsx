export default function BandPageFooter() {
  return (
    <div className="footer_div">
      <div className="footer_top_logo_and_links">
        <img className="footer_logo" src="images/TextBC.webp" />
        <div className="footer_links_flex">
          <a
            className="footer_link"
            href="https://open.spotify.com/track/6nOnZOZisXfl13OnaZw2Es?si=5cf9ef30dd344e1e"
          >
            <img
              src="images/link_icons/Spotify_icon.svg"
              alt="Spotify Link"
              className="footer_link_icon"
              loading="lazy"
            />
          </a>
          <a
            className="footer_link"
            href="https://www.instagram.com/burntchapterband/"
          >
            <img
              src="images/link_icons/Instagram_logo_2022.svg"
              alt="Instagram Link"
              className="footer_link_icon"
              loading="lazy"
            />
          </a>
          <a
            className="footer_link"
            href="https://www.facebook.com/profile.php?id=61571350486287"
          >
            <img
              src="images/link_icons/2023_Facebook_icon.svg"
              alt="Facebook Link"
              className="footer_link_icon"
              loading="lazy"
            />
          </a>
          <a
            className="footer_link"
            href="https://soundcloud.com/burnt-chapter?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          >
            <img
              src="images/link_icons/Antu_soundcloud.svg"
              alt="Soundcloud Link"
              className="footer_link_icon"
              loading="lazy"
            />
          </a>
        </div>
      </div>
      <div className="footer_bottom_contact_and_copyright">
        <div className="footer_contact">
          Contact: <a href="burntchapt3r@gmail.com">burntchapt3r@gmail.com</a>
        </div>
        <div className="footer_copyright">©Burnt Chapter 2025</div>
      </div>
    </div>
  );
}
