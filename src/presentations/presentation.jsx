import video from "./Presentation.mp4";

export default function Presentation() {
    return (
        <main class="container-fluid bg-secondary">
        <div class="presentation">
                <video src={video} height="100%" width="100%" 
                title="Treehouse Recorded Live Event" controls autoplay muted allowfullscreen>
                <source src={video} type="video/mp4" />
                Your browser does not support video
              </video>
        </div>
       </main>
    )
}