import "../style/album.scss";

export default function Album() {
  return (
    <div className="album-section">
      <div className="album">
        <img src="public/ab67616d0000b273a91c10fe9472d9bd89802e5a.jpg" alt="Album 1" className="album-image" />
        <h3 className="album-title">SOUR</h3>
        <p className="album-year">2021</p>
        <p className="album-songs">12 songs</p>
      </div>
      
      <div className="album">
        <img src="public/ab67616d0000b273e85259a1cae29a8d91f2093d.jpg" alt="Album 2" className="album-image" />
        <h3 className="album-title">GUTS</h3>
        <p className="album-year">2023</p>
        <p className="album-songs">14 songs</p>
      </div>
    </div>
  );
}
