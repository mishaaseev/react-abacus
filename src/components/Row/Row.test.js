import { render, screen } from '@testing-library/react';
import Row from './Row';


it('Should render "count" number of children', () => {
  const { container } = render(<Row count = {7} />);
  expect(container.querySelectorAll(".right .nut").length).toBe(7);
  expect(container.querySelectorAll(".left .nut").length).toBe(3);
})