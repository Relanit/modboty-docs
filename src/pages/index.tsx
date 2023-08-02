import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import '@docsearch/css';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title" style={{color:"white"}}>{siteConfig.title}</h1>
        <p className="hero__subtitle" style={{color:"white"}}>{siteConfig.tagline}</p>
        {/* <div className={styles.buttons}>
         <Link
            className="button button--secondary button--lg"
            to="install"
          >
            Добавить бота
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Команды`}
      description="Список команд Modboty. ModBoty ‒ это модераторский бот для Twitch c возможностью добавления пользовательских команд, управления 7TV смайлами и с многими другими функциями для модерации чата">
      <HomepageHeader />
      <main>
        <div className={styles.commands}>
          <div>
            <h1>Список команд:</h1>
            <ul>
              <li><Link to="commands">Команды</Link></li>
              <li><Link to="timers">Таймеры</Link></li>
              <li><Link to="banwords">Банворды</Link></li>
              <li><Link to="massban">Массбан</Link></li>
              <li><Link to="global_ban">Глобальный бан</Link></li>
              <li><Link to="7TV">7TV</Link></li>
              <li><Link to="antiflood">Антифлуд</Link></li>
              <li><Link to="vips">Управление випами</Link></li>
              <li><Link to="polls">Опросы</Link></li>
              <li><Link to="predictions">Ставки</Link></li>
              <li><Link to="stream-info">Название и категория стрима</Link></li>
              <li><Link to="editors">Редакторы бота</Link></li>
              <li><Link to="trusted-users">Доверенные пользователи</Link></li>
              <li><Link to="refresh-chat">Автообновление оверлея jChat</Link></li>
              <li><Link to="other">Прочие команды</Link></li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}