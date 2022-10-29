import EventsList from '../components/events/events-list';
import { getFeaturedEvents } from '../dummy-data';

const StartingPage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <EventsList items={featuredEvents} />
    </>
  );
};

export default StartingPage;
