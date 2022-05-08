/* eslint-disable */
import axios,{AxiosResponse} from "axios";
import fetchCharacterInfo from "./useFetchCharacterDetails";
import { CharacterResponse, Gender } from "../components/interfaces";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('useFetchCharacterDetails', () => {
  test('should return list of character details', async () => {
    //Our desired output
    const character: CharacterResponse[] = [

        {
            created: "2017-11-04T18:48:46.250Z",
            episode: ["S01E01", "Pilot"],
            gender: Gender.MALE,
            id: 1,
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            location: {
                name: "Citadel of Ricks",
                dimension: "unknown",
                url: "https://rickandmortyapi.com/api/location/3",
                id: 3,
                created: "2017-11-10T13:08:13.191Z",
                residents:['https://rickandmortyapi.com/api/character/8', 'https://rickandmortyapi.com/api/character/14','https://rickandmortyapi.com/api/character/15','https://rickandmortyapi.com/api/character/18'],
                type: "Space station"
            },
            name: "Rick Sanchez",
           origin: {
            created: "2017-11-10T12:42:04.162Z",
            name: "Earth (C-137)",
            url: "https://rickandmortyapi.com/api/location/1",
            dimension: "Dimension C-137",
            id: 1,
            type: "Planet",
            residents:['https://rickandmortyapi.com/api/character/38', 'https://rickandmortyapi.com/api/character/45',"https://rickandmortyapi.com/api/character/71","https://rickandmortyapi.com/api/character/82"],
            
           },
           species: "Human",
           type: "",
           url: "https://rickandmortyapi.com/api/character/1"
  
        },

        {created: "2017-11-04T18:50:21.651Z",
        episode: ["S01E01", "Pilot"],
        gender: Gender.MALE,
        id: 2,
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        location: {
            name: "Citadel of Ricks",
            dimension: "unknown",
            url: "https://rickandmortyapi.com/api/location/3",
            id: 3,
            created: "2017-11-10T13:08:13.191Z",
            residents:['https://rickandmortyapi.com/api/character/8', 'https://rickandmortyapi.com/api/character/14','https://rickandmortyapi.com/api/character/15','https://rickandmortyapi.com/api/character/18'],
            type: "Space station"
        },
        name: "Morty Smith",
       origin: {
        created: "2017-11-10T12:42:04.162Z",
        name: "unknown",
        url: "https://rickandmortyapi.com/api/location/1",
        dimension: "Dimension C-137",
        id: 1,
        type: "Planet",
        residents:['https://rickandmortyapi.com/api/character/38', 'https://rickandmortyapi.com/api/character/45',"https://rickandmortyapi.com/api/character/71","https://rickandmortyapi.com/api/character/82"],
        
       },
       species: "Human",
       type: "",
       url: ""
}

    
    ];
    
    //Prepare the response we want to get from axios
    const mockedResponse: AxiosResponse = {
      data: character,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };
    // Make the mock return the custom axios response
     mockedAxios.get.mockResolvedValueOnce(mockedResponse);
     
    expect(axios.get).not.toHaveBeenCalled();
    const data = await fetchCharacterInfo();
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(character);
  });
});
