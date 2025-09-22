import { Link } from "@tanstack/react-router";

export default function NavigationBar(){
    return(
        <>
        <link rel="stylesheet" href="styles/navigationBarStyle.css"/>
        <div className = "navigation-bar-container">
            <div className = "navigation-bar">
                <div className = "navigation-home">
                <Link to="/">
                    <img
                        className="navigation-home-image"
                        src="/images/bcLogoBig.webp"
                        loading="eager"
                    />
                </Link>
            </div>
            <div className = "navigation-link-div">
                <Link className="navigation-link navigation-link-tickets" to="/tickets">
                    <p>Tickets</p>
                </Link>
            </div>
            <div className = "navigation-link-div">
                <Link className="navigation-link navigation-link-news" to="/news">
                    <p>News</p>
                </Link>
            </div>
            <div className = "navigation-link-div">
                <Link className="navigation-link navigation-link-photos" to="/photos">
                    <p>Photos</p>
                </Link>
            </div>
            <div className = "navigation-link-div">
                <Link className="navigation-link navigation-link-contact" to="/contact">
                    <p>Contact</p>
                </Link>
            </div>
            </div>
        </div>
    </>
    );
}