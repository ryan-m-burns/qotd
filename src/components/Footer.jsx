import { getYear } from '../utilities/dates.js';

function Footer({ copyright = getYear(), author }) {
  return (
    <footer>
      <p>
        &copy; {copyright} {author}
      </p>
    </footer>
  );
}

export default Footer;
