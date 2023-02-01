import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link"

export default function Contacts() {
    return (
        <>
            <Head>
                <title>Contact Us</title>
                <meta name="author" content="MDIA 2109" />
                <meta property="og:title" content="Assignment #1 - Contact Us Page" />
                <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className={styles.main}>
                <div>
                    <h1>Contact Us</h1>
                    <p>Want to discuss? Lets chat!</p>
                    <form>
                        <fieldset>
                            <table>
                                <thead>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <tr>
                                        <input type="text" id="firstName" />
                                        <input type="text" id="lastName" />
                                        <input type="text" id="email" />
                                    </tr>
                                </thead>
                            </table>
                            <input type="email" id="email" />
                            <input type="submit" value="Submit" />
                        </fieldset>
                    </form>
                </div>
                <a href="/index">
                    <span>
                        <img src="icons/downwardArrow.png" width={50} height={50} alt="" />
                    </span>
                </a>
            </main>
        </>
    );
}