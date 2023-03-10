import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
      <title>Home</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - Home Page" />
        <meta property="og:description" content="BCIT Digital Design and Development Diploma"/>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div>
          <header>
            <h1>An investment in knowledge pays the best interest.</h1>
          </header>
        </div>

        <div class="description">
        <p>Different than a college or university, the British Columbia Institute of Technology offers practical, 
            flexible, applied education with instructors who have direct, hands-on experience in their field.</p>
        </div>
          <div>
            <a href="about"><button>More About Us</button></a>
            <a href="contact"><button>Contact Us</button></a>
          </div>
          <a href="/">
            <span>
              <img src="icons/downwardArrow.png" alt="Down Arrow" />
            </span>
          </a>
      </main>
    </>
  )
}
