---
sidebar_position: 3
custom_edit_url: null
---

# Банворды/мутворды

Запрещённые слова, за отправку которых пользователь получает бан/мут.

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
Команда может работать нестабильно без **[авторизации](../auth.md)** 
:::

## Создание банворда
`!bword phrase`
- `phrase` ‒ фраза

## Создание мутворда
`!mword duration phrase`
- `duration` ‒ длительность мута в секундах
- `phrase` ‒ фраза

Пример:

    !mword 600 +250 бб

## Просмотр банвордов/мутвордов
`!bwords` или `!mwords` для просмотра банвордов и мутвордов соответственно

:::danger
Не добавляйте банворды Твича
:::

## Удаление банвордов/мутвордов
Банворды ‒ `!delb phrase`

Мутворды ‒ `!delm phrase`

## Банворды первых сообщений

Вы можете добавлять банворды и мутворды, которые будут действовать только на пользователей, впервые написавших в чат. Команды для них пишутся также, но первым словом указывается `first`

Примеры:

    !bword first го в гартик
    !mword first 600 +250 бб

    !delb first го в гартик
    !delm first +250 бб

    !bwords first
    !mwords first