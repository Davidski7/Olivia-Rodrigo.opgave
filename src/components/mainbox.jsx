import React from "react";
import "../style/mainbox.scss";

export default function MainBox() {
  return (
    <div className="main-box">
      <div className="content">
        <div className="section left">
          <img src="/062597f4236b-olivia-rodrigo-look-estreno-documental-look-disney-t.webp" alt="Beskrivelse" className="image" />
          <p className="text">Tekst om hende - sektion 1</p>
        </div>
        <div className="section right">
          <p className="text">Tekst om hende - sektion 2</p>
          <img src="/062597f4236b-olivia-rodrigo-look-estreno-documental-look-disney-t.webp" alt="Beskrivelse" className="image" />
        </div>
        <div className="section left">
          <img src="public/062597f4236b-olivia-rodrigo-look-estreno-documental-look-disney-t.webp" alt="Beskrivelse" className="image" />
          <p className="text">Tekst om hende - sektion 3</p>
        </div>
      </div>
    </div>
  );
}