import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

const bgColorExcludedClassNames =
  'inline-flex items-center justify-center rounded-md border-none px-4 py-1.5 text-white';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <div className="p-4 flex justify-center items-center">
        <button
          type="button"
          className={[
            bgColorExcludedClassNames,
            'bg-blue-500',
            'non-touchscreen:hover:bg-blue-600',
            '[&]:active:bg-blue-700',
          ].join(' ')}
        >
          Button
        </button>
      </div>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
