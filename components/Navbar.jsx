import Link from "next/link";
import style from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  return (
    <div className={style.navbar}>
      <ul>
        <Link href="/" passHref>
          <li className={router.pathname == "/" ? `${style.active}` : ""}>
            Hello
          </li>
        </Link>
        <Link href="/about" passHref>
          <li className={router.pathname == "/about" ? `${style.active}` : ""}>
            About Me
          </li>
        </Link>
        <Link href="/project" passHref>
          <li
            className={router.pathname == "/project" ? `${style.active}` : ""}
          >
            Project
          </li>
        </Link>
        <Link href="/contact" passHref>
          <li
            className={router.pathname == "/contact" ? `${style.active}` : ""}
          >
            Contact
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
