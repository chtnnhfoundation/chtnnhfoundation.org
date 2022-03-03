import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Philosophy() {
    return (
        <div className={styles.container}>
          <Head>
            <title>Philosophy - chtnnh foundation</title>
            <meta name="description" content="philosphy - chtnnh foundation" />
            <link rel="icon" href="../public/favicon.ico" />
          </Head>

          <header className={styles.header}>
            <Link href="/" passHref className={styles.navbarLogo}>
              <Image src='/logo.png' height="100%" width="100%" className={styles.logo} alt='chtnnh foundation logo'></Image>
            </Link>
            <div className={styles.navbar}>
              <Link href="/docs/philosophy">Philosophy</Link>
              <Link href='/blockchain'>Blockchain</Link>
              <Link href='/quantum'>Quantum Computing</Link>
              <Link href='/bci'>BCI</Link>
              <Link href='/agi'>AGI</Link>
            </div>
            <div className={styles.joinUsNavbar}>
              <Link href='https://cg018ltu1vj.typeform.com/to/CNCsLOyz'>Join Us!</Link>
            </div>
          </header>
    
          <main className={styles.main}>
            <h1 className={styles.title}>
              The philosophy that enables us to do the work that we do
            </h1>
            <div className={styles.description}>
              <blockquote>
                <p><em>Imagine a world where everyone on the planet is free to do their lives&apos; work.</em></p>
              </blockquote>
              <hr />
              <p>How do you ensure that one of the most ambitious goals in human history is achieved in our lifetimes? How do you define <em>life&apos;s work</em>? How do you enable people to make that choice for themselves? How do you empower them to act upon that choice? </p>
              <p>These questions, amongst others, helped shape this philosophy. It can be summarized without losing much of it&apos;s essence as follows:</p>
              <ol>
              <li>Build with people. Nothing great was ever achieved alone. </li>
              <li>Share the knowledge. There is no possibility of people finding true purpose without exploring the frontiers of human knowledge.</li>
              <li>Relentless innovation. A union of the smartest people on the planet, producing new ideas that help shape the future of humanity.</li>
              <li>Decentralized democracy. Enable every participant to help shape the future of the foundation.</li>
              </ol>
              <p>Like all things at the foundation, this philosophy is a work in progress and will be refined with input from the community. Would you want to <a href="https://github.com/chtnnhfoundation/chtnnhfoundation.org">contribute</a>?</p>
            </div>
          </main>
    
          <footer className={styles.footer}>
            <Link href="https://cg018ltu1vj.typeform.com/to/CNCsLOyz">Do you want to help build this future? Join us!</Link>
          </footer>
        </div>
      )
}
