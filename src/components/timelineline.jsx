import "../style/timeline.scss";

export default function TimelineLine() {
  const events = [
    {
      year: "2016-2019",
      type: "TV Show",
      title: "Bizaardvark",
      role: "Paige Olvera",
      description: "Olivia spillede en af hovedrollerne i Disney Channel-serien 'Bizaardvark', hvor hun portrætterede Paige Olvera, en talentfuld ung musiker og youtuber. Serien fulgte hende og hendes bedste ven, Frankie, mens de skabte musikvideoer til deres online kanal.",
      image: "public/who-plays-paige-in-bizaardvark-1610112422-view-0.jpg",
    },
    {
      year: "2019-2022",
      type: "TV Show",
      title: "High School Musical: The Musical: The Series",
      role: "Nini Salazar-Roberts",
      description: "I denne Disney+ serie spillede Olivia hovedrollen som Nini, en talentfuld sangerinde og skuespiller, der medvirker i skolens musicalproduktion. Hendes karakter var i et on-and-off forhold med Ricky (spillet af Joshua Bassett), hvilket skabte drama og romantiske spændinger i serien.",
      image: "public/images.jpg",
    },
    {
      year: 2021,
      type: "Album",
      title: "SOUR",
      description: "Olivia udgav sit debutalbum 'SOUR', som indeholder ikoniske sange som 'drivers license', 'good 4 u' og 'deja vu'. Albummet blev en kæmpe succes og gav hende flere priser og anerkendelse som en af de mest talentfulde unge popstjerner.",
      image: "public/ab67616d0000b273a91c10fe9472d9bd89802e5a.jpg",
    },
    {
      year: 2023,
      type: "Album",
      title: "GUTS",
      description: "Med sit andet album 'GUTS' fortsatte Olivia sin succes. Albummet indeholder stærke numre som 'vampire' og 'bad idea right?', der afspejler hendes udvikling som kunstner og sangskriver.",
      image: "public/ab67616d0000b273e85259a1cae29a8d91f2093d.jpg",
    },
  ];

  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-content">
            <img src={event.image} alt={event.title} className="timeline-image" />
            <div className="timeline-info">
              <h3 className="timeline-title">{event.title} ({event.year})</h3>
              <p className="timeline-type">{event.type} - {event.role || "Musikudgivelse"}</p>
              <p className="timeline-description">{event.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
