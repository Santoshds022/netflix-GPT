import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieId}) => {
    // const [trailerId, setTrailerId] = useState(null);//solution1
    const trailerVideo = useSelector(store =>store.movies?.trailerVideo );
    console.log(movieId);
    useMovieTrailer(movieId)
    return (
    <div className="w-screen">
    <iframe className="w-screen aspect-video"
    // src={"https://www.youtube.com/embed/Kdr5oedn7q8?si=gyLf69Hy-9n4BDoU"+trailerId}// solution1
    src={"https://www.youtube.com/embed/Kdr5oedn7q8?si=gyLf69Hy-9n4BDoU" + trailerVideo?.key+"?&autoplay=1&mute=1&controls=0&rel=0&modestbranding=1" }
   
    title="YouTube video player" 
    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
    ></iframe>
    </div>
  )
}

export default VideoBackground;
