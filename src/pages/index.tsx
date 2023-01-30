import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import '@docsearch/css';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title" style={{color:"white"}}>{siteConfig.title}</h1>
        <p className="hero__subtitle" style={{color:"white"}}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
        <Link
            className="button button--secondary button--lg"
            to="docs/install"
          >
            Добавить бота
          </Link>
          <Link
            className="button button--primary button--lg"
            to="docs/category/возможности"
          >
            Документация
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Упростите работу модераторов`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
