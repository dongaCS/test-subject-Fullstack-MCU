import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AllCharacters() {
    const [character, setCharacter] = useState([])

    useEffect(() => {
        async function getAllCharacters() {
          try {
            // make sure .env is top level and not in src
            const res = await fetch(`${process.env.REACT_APP_MCU_URL}/api/mcu`);
            const data = await res.json();
            setCharacter(data.payload);
          } catch (err) {
            console.log(err);
          }
        }
    
        getAllCharacters();
      }, []) // send of useEffect

      return character.length ? 
      ( <div>
          {character.map(e => (
            <div key={e._id}>
              <h4>Character: <Link to={`/mcu/${e.name}`}>{e.name}</Link></h4>
              <p>Film: {e.debutFilm}</p>
              <p>Year: {e.debutYear}</p>
            </div>
          ))}
        </div> ) : (
        <h1> loading</h1> ); // holy ternary
}


export default AllCharacters;