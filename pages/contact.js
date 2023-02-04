import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - Contact Us Page" />
        <meta property="og:description" content="BCIT Digital Design and Development Diploma"/>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1>Contact Us</h1>
          <p>Want to discuss? Let's chat!</p>
          <form>
            <fieldset>
              <table>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th>Email</th>
                    <th></th>
                  </tr>
                </thead>
              </table>
            </fieldset>
              <input type="text" id="firstName" placeholder="Enter your first name"></input>
              <input type="text" id="lastName" placeholder="Enter your last name"></input>
              <input type="email" id="email" placeholder="Enter your email"></input>
              <input type="submit" value="Submit"></input>
          </form>
          <a href="/">
            <span>
              <img src="icons/downwardArrow.png" alt="Down Arrow" />
            </span>
          </a>
        </div>
      </main>
    </>
  );
}