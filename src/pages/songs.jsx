
import Album from "../components/album"
import NavBar from "../components/navbar"
import PopularSongs from "../components/popularsongs"


function Songs () {


  return (
    <>
     <header>
     <NavBar />
  
      </header>
      <main>
      <h2>Albums</h2>
      <Album />
      <h2>Popular songs</h2>
      <PopularSongs />
      </main>
    </>
  )
}

export default Songs
