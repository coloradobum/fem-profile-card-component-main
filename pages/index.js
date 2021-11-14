import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../public/image-victor.jpg'
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

          <div>
            <h1>Victor Crest 26</h1>
            <p>London</p>
          </div>

          <div className={styles.stats}>
            <div>
              <div>80K</div>
              <div>Followers</div>
            </div>
            <div>
              <div>803K</div>
              <div>Likes</div>
            </div>
            <div>
              <div>1.4K</div>
              <div>Photos</div>
            </div>
          </div>

        </main>
      </container>
    </div>
  )
}
