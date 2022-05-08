import {renderHook} from '@testing-library/react-hooks';
import {rest} from 'msw';
import {setupServer} from 'msw/node';

import useFetchCharacterDetails from './useFetchCharacterDetails';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.json({characterDetails: []}));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('should displat character details', async () => {
  const {result, waitForNextUpdate} = renderHook(() =>
    useFetchCharacterDetails()
  );

  await waitForNextUpdate();

  expect(result.current).toEqual({characterDetails: []});
});
