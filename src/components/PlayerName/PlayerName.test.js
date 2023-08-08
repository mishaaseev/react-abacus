import { fireEvent, render, screen } from '@testing-library/react';
import PlayerName from './PlayerName';


it('should render name and score', () => {
  const props = {
    name: "Test name",
    score: "100",
    onRemovePlayer: jest.fn()
  }
    const container = render(<PlayerName {...props}/>);

    const nameElement = screen.getByDisplayValue(new RegExp(props.name, "i"));
    const scoreElement = screen.getByText(new RegExp(props.score, "i"));
    expect(nameElement).toBeInTheDocument();
    expect(scoreElement).toBeInTheDocument();
    
  })
  
  it('Should delete a player', () => {
    const props = {
      name: "Test name",
      score: "100",
      onRemovePlayer: jest.fn()
    }
      const container = render(<PlayerName {...props}/>);

    fireEvent(
      container.getByText('X'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
    expect(props.onRemovePlayer).toHaveBeenCalled();
})

it('Should see if input works', () => {
  const props = {
  name: "Test name",
  score: "100",
  onChangeName: jest.fn()
  }
  const {container} = render(<PlayerName {...props}/>);
  const input = container.querySelector('input');

  fireEvent.change(input, {target: {value: 'New name'}});

  expect(props.onChangeName).toHaveBeenCalled();
})



