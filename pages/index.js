import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../public/image-victor.jpg'
import backgroundImgTop from '../public/bg-pattern-top.svg'
import backgroundImgBtm from '../public/bg-pattern-bottom.svg'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <container>
        <main className={styles.main}>
          <div>
          </div>

          <div>
            <div className={styles.imagewrapper}>
              <Image
                src={profilePic}
                alt="Profile Picture"
              />
            </div>
          </div>

          <div className={styles.header}>
            <h1>Victor Crest <span className={styles.age}>26</span></h1>
            <p className={styles.city}>London</p>
          </div>

          <div className={styles.stats}>
            <div>
              <div>80K</div>
              <div className={styles.metric}>Followers</div>
            </div>
            <div>
              <div>803K</div>
              <div className={styles.metric}>Likes</div>
            </div>
            <div>
              <div>1.4K</div>
              <div className={styles.metric}>Photos</div>
            </div>
          </div>

        </main>
      </container>
    </div>
  )
}
