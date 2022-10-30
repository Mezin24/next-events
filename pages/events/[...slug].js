import { useRouter } from 'next/router';
import ResultsTitle from '../../components/events-details/results-title';
import EventsList from '../../components/events/events-list';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';
import { getFilteredEvents } from '../../dummy-data';

const FilteredEvents = () => {
  const router = useRouter();
  const { slug } = router.query;
  if (!slug) {
    return (
      <ErrorAlert>
        <p>Loading...</p>
      </ErrorAlert>
    );
  }
  const [yearStr, monthStr] = slug;
  const [year, month] = [+yearStr, +monthStr];

  if (
    isNaN(year) ||
    isNaN(month) ||
    month < 1 ||
    month > 12 ||
    year > 2030 ||
    year < 2021
  ) {
    return (
      <ErrorAlert>
        <p>Invalid filters, please change options</p>
        <Button link='/events'>Show All Events</Button>
      </ErrorAlert>
    );
  }

  const filteredEvents = getFilteredEvents({ year, month });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <ErrorAlert>
        <p>No events with such parameters</p>
        <Button link='/events'>Show All Events</Button>
      </ErrorAlert>
    );
  }

  return (
    <>
      <ResultsTitle date={new Date(year, month)} />
      <EventsList items={filteredEvents} />
    </>
  );
};

export default FilteredEvents;
