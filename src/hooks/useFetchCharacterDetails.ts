/* eslint-disable */
import {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import {
  CharacterResponse,
  EpisodeResponseProps,
} from '../components/interfaces';

const characterUrl = 'https://rickandmortyapi.com/api/character';

const useFetchCharacterDetails = (): any => {
  const [characterDetails, setCharacterDetails] = useState<Array<CharacterResponse>>([]);
  const [errors, setErrors] = useState(null);

  const fetchCharacterInfo = useCallback(async () => {
    try {
      const {data} = await axios.get(characterUrl);

      if (data) {
        const {results} = data;
        const newResults: CharacterResponse[] = await Promise.all(
          results.map(async (result: CharacterResponse) => {
            const {
              origin: {url: originUrls},
              location: {url: locationUrls},
              episode,
            } = result;

            // Location information
            const urls = [originUrls, locationUrls];
            const promises = urls.map((url: string) => axios.get(url));
            const requestedData: any = await Promise.all(promises);

            // Episodes information
            const episodesPromises = episode.map((url: string) =>
              axios.get(url)
            );
            const episodeData: EpisodeResponseProps[] = await Promise.all(
              episodesPromises
            );

            if (requestedData) {
              const finalData = {
                ...result,
                origin: originUrls ? requestedData[0].data : result.origin,
                location: locationUrls
                  ? requestedData[1].data
                  : result.location,
                episode: episodeData,
              };
              return finalData;
            }
            return result;
          })
        );
        setCharacterDetails(newResults);
      }
    } catch (err: any) {
      setErrors(err)
    }
  }, []);
  

  useEffect(() => {
    fetchCharacterInfo();
  }, [fetchCharacterInfo]);

  return {characterDetails};
};

export default useFetchCharacterDetails;
