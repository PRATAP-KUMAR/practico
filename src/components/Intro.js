import "../stylesheets/intro.css"
import { AiFillPlayCircle } from "react-icons/ai";

const Intro = () => (
    <div className="intro-cnt">
        <div className="tour-txt">Industrial Tour</div>
        <div className="company-txt">PRACTICO</div>
        <div className="industry-txt">Visit Your Favourite Industry</div>
        <div className="video">
            <button className="book-now-btn">BOOK NOW</button>
            <AiFillPlayCircle className="play-btn"/>
            <div className="play-video-txt">Play Video</div>
        </div>
    </div>
)

export default Intro;