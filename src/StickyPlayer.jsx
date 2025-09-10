const SOUND_CLOUD_API_REQUEST = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1974239527&color=%23979590&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true";
const SOUND_CLOUD_TRACK = "heathens";  //This should be the sound cloud track as it appears in the sound cloud url

export default function StickyPlayer({stickyPlayerClassName = "", soundCloudAPIRequest = SOUND_CLOUD_API_REQUEST, soundCloudTrack=SOUND_CLOUD_TRACK}) {

    //The soundcloud track will be in the style "hello-this-is-my-title". Need to convert to "Hello This Is My Title"
    let soundCloudTrackTitle = soundCloudTrack.split("-").map(word => word[0].toUpperCase() + word.slice(1)).join("-").replaceAll("-", " ");

    //TO DO: TAKE THESE OUT INTO THEIR OWN STYLE
    const soundCloudDivStyle = {
        fontSize: "10px",
        color: "#cccccc",
        lineBreak: "anywhere",
        wordBreak: "normal",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
        fontWeight: 100,
        width: "100%"
    };

    const soundCloudAnchorStyle = {
        color: "#cccccc",
        textDecoration: "none"
    }

    return(
        <div className={`sticky_player ${stickyPlayerClassName}`}>
            {/* <iframe width="100%" height="60" scrolling="no" frameBorder="no" allow="autoplay" src={soundCloudAPIRequest}></iframe> */}
            <iframe width="100%" height="60" allow="autoplay" src={soundCloudAPIRequest}></iframe>
            <div style={soundCloudDivStyle}>
                <a href="https://soundcloud.com/burnt-chapter" title="Burnt Chapter" target="_blank" rel="noreferrer" style={soundCloudAnchorStyle}>Burnt Chapter</a> · 
                <a href={`https://soundcloud.com/burnt-chapter/${soundCloudTrack}`} title={`${soundCloudTrackTitle}`} target="_blank" rel="noreferrer" style={soundCloudAnchorStyle}>{soundCloudTrackTitle}</a>
            </div>
        </div>
    )
}