/* eslint-disable */
import React from 'react';
import useFetchCharacterDetails from '../../hooks/useFetchCharacterDetails';
import CharacterDetails from '../Characters/CharacterDetails';
import LoadingScreen from '../Loading/LoadingScreen';

const Home: React.FC = () => {
  const {characterDetails} = useFetchCharacterDetails();
  const renderCharacterDetails = (): any => {
    if (characterDetails.length > 0) {
      return characterDetails.map((char: any) => {
        const {id, name, gender, species, image, origin, location, episode} =
          char;
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
    return <LoadingScreen />;
  };
  //console.log(characterDetails);

  return (
    <main>
      <section>
        <div data-testid="character-details">{renderCharacterDetails()}</div>
      </section>
    </main>
  );
};

export default Home;
