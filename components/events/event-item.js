import Link from 'next/link';

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
      <img src={`${image}`} alt={title} />
      <div className={classes.content}>
        <div>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadbleDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formatedLocation}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link
            href={{
              pathname: '/events/[id]',
              query: {
                id,
              },
            }}
          >
            Explore Event
          </Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
