import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Blockchain() {
    return (
        <div className={styles.container}>
          <Head>
            <title>Blockchain - chtnnh foundation</title>
            <meta name="description" content="blockchain - chtnnh foundation" />
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
              Blockchain
            </h1>
            <div className={styles.description}>
              <blockquote>
                <p><em>Nearly all men can stand adversity, but if you want to test a man&apos;s character, give him power.</em></p>
              </blockquote>
              <hr />
              <p>What is it exactly, that blockchain achieves? Is it the distributed consensus that is it&apos;s greatest merit? Or is it merely the instrument with which it achieves it&apos;s greatness?</p>
              <p>At it&apos;s very core, a blokchain implements a distributed consensus protocol that allows multiple trust-less parties<a href="####footnotes">&circ;</a>  to agree on significant issues. </p>
              <p>While this novel mechanism was originally used to achieve true peer-to-peer transactions, it achieved much more. <strong>It removed central foci of power.</strong></p>
              <p>Before long, the community built decentralized autonomous organizations (DAOs) that aimed to achieve a democratic system of decision-making through the power of the blockchain. </p>
              <h1 id="the-chtnnh-foundation-and-blockchain">The chtnnh foundation and blockchain</h1>
              <p>The foundation&apos;s work in blockchain is aimed at researching and improving core blockchain technology, building applications that rely on decentralization as a core principle and educating end-users on the possibilities that decentralization enables.</p>
              <p>Like all things at the foundation, this document is a work in progress and will be refined with input from the community. Would you want to <a href="https://github.com/chtnnhfoundation/chtnnhfoundation.org">contribute</a>?</p>
            </div>
            <div className={styles.footnotes}>
              <h4 id="footnotes">Footnotes</h4>
              <ol>
                <li>Stakeholders that do not necessarily trust each other</li>
              </ol>
            </div>
          </main>
    
          <footer className={styles.footer}>
            <Link href="https://cg018ltu1vj.typeform.com/to/CNCsLOyz">Do you want to help build this future? Join us!</Link>
          </footer>
        </div>
      )
}
