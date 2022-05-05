/* eslint-disable */
import React from 'react';
import { CharacterChapterProps, EpisodeProps } from '../types';

const CharacterChapters: React.FC<CharacterChapterProps> = ({episodes,closePage}) => {
  return (
    <div>
      <button onClick={closePage}>
        X
      </button>
      <h2>Chapters Featured</h2>
      <div>
        {episodes.map((episode: EpisodeProps) => (
            <p key={episode.id} >
              {episode.episode} - <span>{episode.name}</span>,
            </p>
          ))}
      </div>
      </div>
  )
}

export default CharacterChapters;