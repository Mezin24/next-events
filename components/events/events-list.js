import EventItem from './event-item';
import classes from './events-list.module.css';

const EventsList = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <EventItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default EventsList;
