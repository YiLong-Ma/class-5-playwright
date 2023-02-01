import Head from 'next/head'
import Link from "next/link"
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <>
            <Head>
                <title>About Us</title>
                <meta name="author" content="MDIA 2109" />
                <meta property='og:title' content="Assignment #1 - About Us Page" />
                <meta property='og:description' content="BCIT Digital Design and Development Diploma" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main>
                <header>Header</header>
                <div>
                    <h1>About Us</h1>
                    <h1></h1>
                </div>
                <div>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                </div>
                <div>
                    <h2></h2>
                    <h2></h2>
                </div>
                <div>
                    <h3></h3>
                </div>
            </main>
        </>
    )
}