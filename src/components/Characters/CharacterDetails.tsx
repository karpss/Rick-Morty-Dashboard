import React, {useState} from 'react';
import {CharacterDetailsProps} from '../interfaces';
import CharacterChapters from '../Chapters/CharacterChapters';

const CharacterDetails: React.FC<CharacterDetailsProps> = (props) => {
  const [openChapters, setOpenChapters] = useState<boolean>(false);

  const toggleChapterPage = (): any => {
    setOpenChapters((prev) => !prev);
  };

  const {image, origin, location, name, episode, species, gender} = props;

  const episodes = episode.reduce((current, next) => {
    const newCurrent = [...current];
    newCurrent.push(next.data);
    return newCurrent;
  }, []);

  return (
    <div className="characterBox">
      <img className="characterImage" src={image} alt="character" />
      <div className="characterContent">
        <div className="characterTop">
          <h3 className="characterBoxName">Name: {name}</h3>
        </div>

        <div className="characterBlock">
          <div className="characterInfo">
            <p className="characterInfo--title">Gender</p>
            <p className="characterInfo--text">{gender}</p>
          </div>
          <div className="characterInfo">
            <p className="characterInfo--title">Specie</p>
            <p className="characterInfo--text">{species}</p>
          </div>
        </div>
        <h4>ORIGIN </h4>
        <div className="characterBlock">
          <div className="characterInfo">
            <p className="characterInfo--title">NAME</p>
            <p className="characterInfo--text">{origin.name}</p>
          </div>
          <div className="characterInfo">
            <p className="characterInfo--title">DIMENSION</p>
            <p className="characterInfo--text">
              {origin.dimension ? origin.dimension : 'unknown'}
            </p>
          </div>
          <div className="characterInfo">
            <p className="characterInfo--title">RESIDENTS</p>
            <p className="characterInfo--text">
              {origin.residents ? origin.residents.length : 0}
            </p>
          </div>
        </div>

        <h4>LOCATION</h4>
        <div className="characterBlock">
          <div className="characterInfo">
            <p className="characterInfo--title">NAME</p>
            <p className="characterInfo--text">{location.name}</p>
          </div>
          <div className="characterInfo">
            <p className="characterInfo--title">DIMENSION</p>
            <p className="characterInfo--text">
              {location.dimension ? location.dimension : 'unknown'}
            </p>
          </div>
          <div className="characterInfo">
            <p className="characterInfo--title">RESIDENTS</p>
            <p className="characterInfo--text">
              {location.residents ? location.residents.length : 0}
            </p>
          </div>
        </div>

        <div className="characterBlock">
          <div className="characterInfo">
            <p className="characterInfo--title">CHAPTERS</p>
            <div className="characterInfo--text">
              <p>
                {name} appeared in <span>{episode.length}</span> chapters
              </p>
              <button type="button" onClick={toggleChapterPage}>
                View Chapter Names
              </button>
            </div>
          </div>
        </div>
      </div>
      {openChapters && (
        <CharacterChapters episodes={episodes} closePage={toggleChapterPage} />
      )}
    </div>
  );
};

export default CharacterDetails;
