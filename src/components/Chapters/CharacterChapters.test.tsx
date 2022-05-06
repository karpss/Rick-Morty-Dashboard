import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import CharacterChapters from './CharacterChapters';

test('handles onClick', () => {
  const onClick = jest.fn();
  render(<CharacterChapters closePage={onClick} episodes={[]} />);
  const buttonElement = screen.getByText('X');
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
