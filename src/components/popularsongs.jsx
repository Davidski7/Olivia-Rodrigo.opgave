import { useRef } from "react";
import "../style/popularsongs.scss";

export default function PopularSongs() {
  // Video-referencer
  const videoRefs = {
    song1: useRef(null),
    song2: useRef(null),
    song3: useRef(null),
    song4: useRef(null),
    song5: useRef(null),
  };

  // Funktion til at afspille video (kun lyd) og stoppe andre
  const playVideo = (ref) => {
    Object.values(videoRefs).forEach((video) => {
      if (video.current && video.current !== ref.current) {
        video.current.pause();
        video.current.currentTime = 0; // Spol tilbage
      }
    });

    if (ref.current) {
      ref.current.play();
    }
  };

  return (
    <div className="popular-songs-section">
      {/* Sang 4 (byttet til 1. position) med billede fra Sang 1 */}
      <div className="song-card" onClick={() => playVideo(videoRefs.song4)}>
        <img src="/maxresdefault.jpg" alt="Song 4" className="song-image" />
        <h3 className="song-title">Good 4 U</h3>
        <p className="song-artist">Olivia Rodrigo</p>
        <p className="song-album">SOUR</p>
        <video ref={videoRefs.song4} src="/MicrosoftTeams-video (3).mp4" className="hidden-video" />
      </div>

      {/* Sang 2 */}
      <div className="song-card" onClick={() => playVideo(videoRefs.song2)}>
        <img src="/maxresdefault (1).jpg" alt="Song 2" className="song-image" />
        <h3 className="song-title">Vampire</h3>
        <p className="song-artist">Olivia Rodrigo</p>
        <p className="song-album">GUTS</p>
        <video ref={videoRefs.song2} src="/MicrosoftTeams-video (1).mp4" className="hidden-video" />
      </div>

      {/* Sang 3 */}
      <div className="song-card" onClick={() => playVideo(videoRefs.song3)}>
        <img src="/maxresdefault (2).jpg" alt="Song 3" className="song-image" />
        <h3 className="song-title">Deja Vu</h3>
        <p className="song-artist">Olivia Rodrigo</p>
        <p className="song-album">SOUR</p>
        <video ref={videoRefs.song3} src="/MicrosoftTeams-video (2).mp4" className="hidden-video" />
      </div>

      {/* Sang 1 (byttet til 4. position) med billede fra Sang 4 */}
      <div className="song-card" onClick={() => playVideo(videoRefs.song1)}>
        <img src="/Olivia-Rodrigo-HSM.webp" alt="Song 1" className="song-image" />
        <h3 className="song-title">All I Want</h3>
        <p className="song-artist">Olivia Rodrigo</p>
        <p className="song-album">HSMTMTS</p>
        <video ref={videoRefs.song1} src="/MicrosoftTeams-video.mp4" className="hidden-video" />
      </div>

      {/* Sang 5 */}
      <div className="song-card" onClick={() => playVideo(videoRefs.song5)}>
        <img src="/download.jpg" alt="Song 5" className="song-image" />
        <h3 className="song-title">Drivers License</h3>
        <p className="song-artist">Olivia Rodrigo</p>
        <p className="song-album">SOUR</p>
        <video ref={videoRefs.song5} src="/MicrosoftTeams-video (4).mp4" className="hidden-video" />
      </div>
    </div>
  );
}
