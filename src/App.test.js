import { render, screen } from '@testing-library/react';
import App from './App';

//---------------------------------------------------------------------------//

const TestDates = [
  ['April 1, 2022 11:36:38', 'New Moon', 'Full Moon on April 16, 2022', 'New Moon on April 1, 2022'],
  ['August 19, 2022 05:38:48', 'Third Quarter', 'New Moon on August 27, 2022', 'Full Moon on August 12, 2022'],
  ['February 5, 2023 23:45:28', 'Full Moon', 'New Moon on February 20, 2023', 'Full Moon on February 5, 2023']
]

//---------------------------------------------------------------------------//

describe('Ensure expected moon phase data is returned for a given date', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern');
  });
  afterEach(() => {
    jest.useRealTimers()
  });

  it.each(TestDates)(
    `renders the correct current moon phase for given date %s`,
    (date, currentPhase) => {
      jest.setSystemTime(new Date(date));
      render(<App/>);
      const currentPhasePanel = screen.getByText(`${currentPhase}`);
      expect(currentPhasePanel).toBeInTheDocument();
    }
  );

  it.each(TestDates)(
    `renders the correct next major phase and last major phase data for given date %s`,
    (date, currentPhase, nextMajorPhase, lastMajorPhase) => {
      jest.setSystemTime(new Date(date));
      render(<App/>);
      const nextPhasePanel = screen.getByTestId('Next Major Phase');
      const lastPhasePanel = screen.getByTestId('Last Major Phase');
      expect(nextPhasePanel).toHaveTextContent(new RegExp(nextMajorPhase));
      expect(lastPhasePanel).toHaveTextContent(new RegExp(lastMajorPhase));
    }
  );
});

//---------------------------------------------------------------------------//

describe('Ensure conditional components render in the correct location', () => {
  it('only renders the "share on twitter" button in the "current phase" panel', () => {
    render(<App/>);
    const currentPhasePanel = screen.getByTestId('Current Phase');
    const twitterButton = screen.getByRole('link', { name: /share on twitter/i }); // one and only one twitter button should be rendered
    expect(currentPhasePanel).toContainElement(twitterButton);
  });

  it('only renders the zodiac badge component in panels containing "major phase" in the heading', () => {
    render(<App/>);
    const zodiacBadge = screen.getAllByTestId('zodiac-badge');
    const nextPhasePanel = screen.getByTestId('Next Major Phase');
    const lastPhasePanel = screen.getByTestId('Last Major Phase');
    expect(zodiacBadge.length).toBe(2);
    expect(nextPhasePanel).toContainElement(zodiacBadge[0]) && expect(lastPhasePanel).toContainElement(zodiacBadge[1]);
  });
});