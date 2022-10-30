import EventsList from '../components/events/events-list';
import Button from '../components/ui/button';
import ErrorAlert from '../components/ui/error-alert';
import { getFeaturedEvents } from '../dummy-data';

const StartingPage = () => {
  const featuredEvents = getFeaturedEvents();
  if (!featuredEvents || featuredEvents.length === 0) {
    return (
      <ErrorAlert>
        <p>No events yet</p>
        <Button link='/events'>Show All Events</Button>
      </ErrorAlert>
    );
  }

  return <EventsList items={featuredEvents} />;
};

export default StartingPage;
