import Link from 'next/link';
import Button from '../ui/button';
import TimeIcon from '../icons/time-icon';
import Location from '../icons/location-icon';
import ArrowRight from '../icons/arrow-right-icon';
import classes from './event-item.module.css';

const EventItem = ({ title, image, date, location, id }) => {
  const humanReadbleDate = new Date(date).toLocaleDateString('en-EN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const formatedLocation = location.replace(', ', '\n');

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt={title} />
      <div className={classes.content}>
        <div>
          <h2>{title}</h2>
          <div className={classes.date}>
            <TimeIcon />
            <time>{humanReadbleDate}</time>
          </div>
          <div className={classes.address}>
            <Location />
            <address>{formatedLocation}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${id}`}>
            Explore Event{' '}
            <span className={classes.icon}>
              <ArrowRight />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
