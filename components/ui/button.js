import Link from 'next/link';
import classes from './button.module.css';

const Button = ({ children, link, onClick, type }) => {
  if (!link) {
    return (
      <button className={classes.btn} onClick={onClick} type={type}>
        {children}
      </button>
    );
  }

  return (
    <Link className={classes.btn} href={link}>
      {children}
    </Link>
  );
};

export default Button;
