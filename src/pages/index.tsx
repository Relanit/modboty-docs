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
        <div className={styles.buttons}>
        {/* <Link
            className="button button--secondary button--lg"
            to="install"
          >
            Добавить бота
          </Link>
          <Link
            className="button button--primary button--lg"
            to="docs/category/возможности"
          >
            Документация
          </Link> */}
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
      description="Модераторский бот для Twitch">
      <HomepageHeader />
      <main>
        <div className={styles.test}>
            <div>
                <h1>Список команд:</h1>
                <ul>
                    <li><Link to="commands">Команды</Link></li>
                    <li><Link to="timers">Таймеры</Link></li>
                    <li><Link to="banwords">Банворды</Link></li>
                    <li><Link to="massban">Массбан</Link></li>
                    <li><Link to="7TV">7TV</Link></li>
                    <li><Link to="antiflood">Антифлуд</Link></li>
                    <li><Link to="vips">Управление випами</Link></li>
                    <li><Link to="polls">Опросы</Link></li>
                    <li><Link to="predictions">Ставки</Link></li>
                    <li><Link to="stream-info">Настройки стрима</Link></li>
                    <li><Link to="editors">Редакторы бота</Link></li>
                    <li><Link to="refresh-chat">Автообновление оверлея jChat</Link></li>
                    <li><Link to="unbanall">Разбан всех пользователей</Link></li>
                    <li><Link to="oldboty-import">Импорт команд OldBoty</Link></li>
                </ul>
            </div>
        </div>
      </main>
    </Layout>
  );
}