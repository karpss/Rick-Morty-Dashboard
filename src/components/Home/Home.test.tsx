/* eslint-disable */
import React from "react";
import { render, screen } from "@testing-library/react";
import  Home  from "./Home";



  test('renders characters', () => {
    const fakeCharcters = [{id: 1, name: 'Bob', gender:'Male'}, {id: 2, name: 'Marcy', gender:'Female'}]
    const {getAllByTestId} = render(<Home />)
    const characterNames = getAllByTestId('character-details').map(li => li.textContent)
    const fakeCharacterNames = fakeCharcters.map(c => c.name)
    expect(characterNames).toEqual(fakeCharacterNames)
  })