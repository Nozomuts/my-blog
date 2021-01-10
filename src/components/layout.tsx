import { ReactNode } from 'react';

import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'

const name = 'Nozomuのブログ';
export const siteTitle = 'Nozomuのブログ';

const Layout = ({ children, home }: { children: ReactNode; home?: boolean }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src='/Users/nozomu/my-blog/public/images/profile.jpg'
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href='/'>
              <a>
                <img
                  src='/Users/nozomu/my-blog/public/images/profile.jpg'
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href='/'>
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>← ホームに戻る</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
