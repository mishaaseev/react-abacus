import { fireEvent, render, screen } from '@testing-library/react';
import Player from './Player';


it('Should render action buttons', () => {
  const props = {
    name: "Test name",
    score: "100",
    onRemovePlayer: jest.fn()
  }
  render(<Player {...props} />);
  const decreaseButton = screen.getByText(/-/i);
  const increaseButton = screen.getByText(/\+/i);
  expect(decreaseButton).toBeInTheDocument();
  expect(increaseButton).toBeInTheDocument();
})

it('Should increase score', () => {
  const props = {
    name: "Test name",
    score: 100,
    onIncrease: jest.fn().mockImplementation(()=>{props.score = props.score+1})
  }
  const container = render(<Player {...props} />);

  fireEvent(
    container.getByText('+'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  )
  expect(props.onIncrease).toHaveBeenCalled();
  expect(props.score).toEqual(101);
})

it('Should decrease score', () => {
  const props = {
    name: "Test name",
    score: "100",
    onDecrease: jest.fn()
  }
  const container = render(<Player {...props} />);

  fireEvent(
    container.getByText('-'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  )
  expect(props.onDecrease).toHaveBeenCalled();
})

it('Should respect disabled prop', () => {
  const props = {
    name: "Test name",
    score: "100"
  }
  const {container} = render(<Player {...props} />);
  const div = container.querySelector(".player.disabled");

  expect(div).not.toBeInTheDocument();

  props.disabled = true;
  const {container:container2} = render(<Player {...props} />);
  const div2 = container2.querySelector(".player.disabled");

  expect(div2).toBeInTheDocument();
})