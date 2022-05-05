/* eslint-disable */
import React from 'react';
import useFetchCharacterDetails from '../../hooks/useFetchCharacterDetails';
import CharacterDetails from '../Characters/CharacterDetails';

const Home: React.FC = () => {
const {characterDetails} = useFetchCharacterDetails();

const renderCharacterDetails = () =>{

    if (characterDetails.length > 0) {
        return characterDetails.map((char) => {
          const {
            id,
            name,
            gender,
            species,
            image,
            origin,
            location,
            episode,
          } = char;
          return (
            <CharacterDetails
              key={id}
              name={name}
              gender={gender}
              species={species}
              image={image}
              origin={origin}
              location={location}
              episode={episode}
            />
          );
        });
      } 




}
  return (
    <main >
      
      <section >
        <div >{renderCharacterDetails()}</div>
      </section>
    </main>
  )
}

export default Home;