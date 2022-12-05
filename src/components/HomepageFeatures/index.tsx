import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Широкий функционал',
    Svg: require('@site/static/img/gears-setup-svgrepo-com.svg').default,
    description: (
      <>
        Команды, таймеры, банворды, защита от спама и флуда, управление випами и многое другое
      </>
    ),
  },
  {
    title: 'Бесплатно. Навсегда',
    Svg: require('@site/static/img/Dollar_sign_in_circle_strike.svg').default,
    description: (
      <>
        ModBoty всегда будет оставаться бесплатным, никаких платных подписок
      </>
    ),
  },
  {
    title: 'Открытость',
    Svg: require('@site/static/img/open-book-svgrepo-com.svg').default,
    description: (
      <>
        ModBoty имеет полностью открытый и свободный <a href="https://github.com/relanit/modboty">исходный код</a>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
