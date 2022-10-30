import { getAllEvents } from '../../dummy-data';
import EventsList from '../../components/events/events-list';
import EventSearch from '../../components/events/events-search';
import { useRouter } from 'next/router';

const AllEvents = () => {
  const router = useRouter();
  const events = getAllEvents();

  const filterEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <EventSearch onSearch={filterEventsHandler} />
      <EventsList items={events} />;
    </>
  );
};

export default AllEvents;
