/* eslint-disable */
import React from "react";
import { render, screen } from "@testing-library/react";
import CharacterDetails from "./CharacterDetails";



test("renders a name", () => {
    render(<CharacterDetails 
            name="Jack Sparrow" 
            species="Human"
            image="image.com/1jpeg"
            gender="Male"

             />);
             expect(
                screen.getByText(/Name: Jack Sparrow/)
              ).toBeInTheDocument();
  });

  test("renders a specie", () => {
    render(<CharacterDetails 
            name="Jack Sparrow" 
            species="Human"
            image="image.com/1jpeg"
            gender="Male"

             />);
             expect(
                screen.getByText(/Human/)
              ).toBeInTheDocument();
  });

  test("renders a gender", () => {
    render(<CharacterDetails 
            name="Jack Sparrow" 
            species="Human"
            image="image.com/1jpeg"
            gender="Male"

             />);
             expect(
                screen.getByText(/Male/)
              ).toBeInTheDocument();
  });

  test("Content contains var image", () => {
    render(<CharacterDetails
            name="Jack Sparrow" 
            species="Human"
            image="image.com/1jpeg"
            gender="Male"
            
        />);
    const char = screen.getByAltText("Character");
    expect(char).toBeInTheDocument();
  });