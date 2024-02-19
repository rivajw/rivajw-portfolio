import style from "../styles/Footer.module.css";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import Link from "next/link";
import { useEffect, useState } from "react";
const Footer = () => {
  // const current = new Date();
  // const date = `${current.getDate()}/${
  //   current.getMonth() + 1
  // }/${current.getFullYear()}`;
  // const time = current.getHours() + ":" + current.getMinutes();
  const [current, setCurrent] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(new Date());
    }, 1000); // Update every second

    // Cleanup interval on unmount
    return () => clearInterval(timer);
  }, []);

  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const time = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;

  return (
    <div className={style.footer}>
      <div>
        <p className={style.find}>find me in:</p>
        <a
          href="https://www.linkedin.com/in/jiawei-sun-461605253/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <BsLinkedin />
          </span>
        </a>
        <a
          href="https://github.com/rivajw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <BsGithub />
          </span>
        </a>
        {/* <a
          href="https://twitter.com/cypherwebs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <BsTwitter />
          </span>
        </a> */}
      </div>
      <div>{time + " | " + date}</div>
    </div>
  );
};

export default Footer;
