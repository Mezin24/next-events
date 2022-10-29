import Link from 'next/link';
import classes from './button.module.css';

const Button = ({ children, link }) => {
  return (
    <Link className={classes.btn} href={link}>
      {children}
    </Link>
  );
};

export default Button;
