import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/events-details/event-summary';
import EventLogistics from '../../components/events-details/event-logistics';
import EventContent from '../../components/events-details/event-content';

const EventPage = () => {
  const router = useRouter();

  const { id } = router.query;
  const event = getEventById(id);

  if (!event) {
    return <p>No Event Found</p>;
  }

  const { title, description, location, date, image, isFeatured } = event;

  return (
    <>
      <EventSummary title={title} />
      <EventLogistics
        date={date}
        address={location}
        image={image}
        imageAlt={title}
      />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  );
};

export default EventPage;
