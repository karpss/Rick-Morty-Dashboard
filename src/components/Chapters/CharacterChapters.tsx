/* eslint-disable */
import React from 'react';
import { CharacterChapterProps, EpisodeProps } from '../types';

const CharacterChapters: React.FC<CharacterChapterProps> = ({episodes,closePage}) => {
  return (
    <div className="chapterContainer">
      <div className="chapterBody">
      <button className="chapterClose" onClick={closePage}>
        X
      </button>
      <h2>Chapters Featured</h2>
      <div className="characterInfo--text">
        {episodes.map((episode: EpisodeProps) => (
            <p key={episode.id} >
              {episode.episode} - <span>{episode.name}</span>
            </p>
          ))}
          </div>
      </div>
      </div>
  )
}

export default CharacterChapters;