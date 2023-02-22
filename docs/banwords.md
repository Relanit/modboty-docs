---
sidebar_position: 5
custom_edit_url: null
---

# Банворды

Запрещённые слова, за отправку которых пользователь получает бан или мут.

<details>
  <summary>Общая информация</summary>
  <ul>
    <li><b>Название:</b> bword</li>
    <li><b>Элиасы:</b> mword, delb, delm, bwords, mwords</li>
    <li><b>Кулдаун:</b> общий 5 секунд</li>
    <li><a href="https://github.com/Relanit/ModBoty/blob/master/ModBoty/cogs/banwords.py"><b>Исходный код</b></a></li>
  </ul>
</details>

:::note
Команда может работать нестабильно без **[авторизации](./auth.md)**
:::

:::danger
Не добавляйте банворды Твича
:::

## Создание банворда
`!bword <фраза>`
<img src={require('@site/static/examples/banwords/bword.png').default} />

## Создание мутворда
`!mword <длительность> <фраза>`
<img src={require('@site/static/examples/banwords/mword.png').default} />

## Просмотр банвордов/мутвордов
`!bwords` или `!mwords` для просмотра банвордов или мутвордов
<img src={require('@site/static/examples/banwords/bwords.png').default} />

## Удаление банвордов и мутвордов
Банворды ‒ `!delb <фраза>`

Мутворды ‒ `!delm <фраза>`

<img src={require('@site/static/examples/banwords/delm.png').default} />

## Банворды первых сообщений

Вы можете добавлять банворды и мутворды, которые будут действовать только на пользователей, впервые написавших в чат. Команды для них пишутся также, но первым словом указывается `first`

<img src={require('@site/static/examples/banwords/first.png').default} />