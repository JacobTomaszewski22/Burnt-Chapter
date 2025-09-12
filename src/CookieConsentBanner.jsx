//Not going to implement this right now
/*This handles the react component of the cookie banner.
*/
function CookieConsentBannerComponent() {
  return (
    <div className="cookie_consent_container" id="cookie_consent_container">
      <div className="cookie_consent_window" id="cookie_consent_window">
        <h2>💀 SUBMIT TO THE COOKIES 💀</h2>
        <p>
          ATTENTION HEATHENS: This site uses cookies to enhance your web
          experience. We only use essential cookies and will never pass your
          data on to third parties. It's up to you if you want a better
          experience!
        </p>
        <form className="cookie_consent_form" id="cookie_consent_form" onSubmit={(event)=>{
            event.preventDefault();
            //Store cookie that we have accepted cookies
            if(event.target.value == "accept"){
                localStorage.setItem('cookiesPreference',"true");
            }else{
                localStorage.setItem('cookiesPreference',"false");
            }
            //Hide the banner
              const emailSignupContainer = document.getElementById(
                "cookie_consent_container",
            );
            emailSignupContainer.style.visibility = "hidden";
        }}>
          <div className="cookie_consent_buttons" id="cookie_consent_buttons">
            <button
              type="submit"
              className="cookie_consent_accept"
              id="cookie_consent_accept"
              value="accept"
            >
              ACCEPT
            </button>
            <button
              type="submit"
              className="cookie_consent_decline"
              id="cookie_consent_decline"
              value="decline"
            >
              DECLINE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/*this handles the logic of if it should be shown*/
export default function CookieConsentBanner(){
    if(!localStorage.getItem('cookiesPreference')){
        return(CookieConsentBannerComponent())
    }
    else return(<div/>);
}