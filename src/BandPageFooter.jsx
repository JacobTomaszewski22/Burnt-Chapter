export default function BandPageFooter() {
  return (
    <div className="footer_div flex flex-col max-w-full justify-center mt-[8%] bg-[rgb(17,15,15)]">
      {/* <link rel="stylesheet" href="styles/bandPageFooterStyle.css" /> */}
      <div className="footer_top_logo_and_links flex flex-col max-w-[40%] items-center justify-center ml-[30%]">
        <img className="footer_logo max-w-[40%] tablet-lg:max-w-[80%] tablet-sm:max-w-[70%] mobile:max-w-[80%]" src="images/TextBC.webp" />
        <div className="footer_links_flex flex flex-row items-center justify-center gap-[10%] mx-[10%]">
          <a
            className="footer_link w-[7%] tablet-lg:w-[12%] tablet-sm:w-[10%] mobile:w-[18%]"
            href="https://open.spotify.com/track/6nOnZOZisXfl13OnaZw2Es?si=5cf9ef30dd344e1e"
          >
            <img
              src="images/link_icons/Spotify_icon.svg"
              alt="Spotify Link"
              className="footer_link_icon min-h-full"
              loading="lazy"
            />
          </a>
          <a
            className="footer_link w-[7%] tablet-lg:w-[12%] tablet-sm:w-[10%] mobile:w-[18%]"
            href="https://www.instagram.com/burntchapterband/"
          >
            <img
              src="images/link_icons/Instagram_logo_2022.svg"
              alt="Instagram Link"
              className="footer_link_icon min-h-full"
              loading="lazy"
            />
          </a>
          <a
            className="footer_link w-[7%] tablet-lg:w-[12%] tablet-sm:w-[10%] mobile:w-[18%]"
            href="https://www.facebook.com/profile.php?id=61571350486287"
          >
            <img
              src="images/link_icons/2023_Facebook_icon.svg"
              alt="Facebook Link"
              className="footer_link_icon min-h-full"
              loading="lazy"
            />
          </a>
          <a
            className="footer_link w-[7%] tablet-lg:w-[12%] tablet-sm:w-[10%] mobile:w-[18%]"
            href="https://soundcloud.com/burnt-chapter?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          >
            <img
              src="images/link_icons/Antu_soundcloud.svg"
              alt="Soundcloud Link"
              className="footer_link_icon min-h-full"
              loading="lazy"
            />
          </a>
        </div>
      </div>
      <div className="footer_bottom_contact_and_copyright flex flex-col justify-between text-center align-middle mx-[30%] gap-[10%]">
        <div className="footer_contact">
          Contact: <a href="burntchapt3r@gmail.com">burntchapt3r@gmail.com</a>
        </div>
        <div className="footer_copyright">©Burnt Chapter 2025</div>
      </div>
    </div>
  );
}
