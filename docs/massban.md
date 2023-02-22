---
sidebar_position: 6
custom_edit_url: null
---

# Массбан

Бан или мут пользователей, написавших сообщение с указанной фразой.

<details>
  <summary>Общая информация</summary>
  <ul>
    <li><b>Название:</b> mb</li>
    <li><b>Элиасы:</b> mt, m</li>
    <li><b>Кулдаун:</b> общий 60 секунд</li>
    <li><a href="https://github.com/Relanit/ModBoty/blob/master/ModBoty/cogs/massban.py"><b>Исходный код</b></a></li>
  </ul>
</details>

:::note
Команда может работать нестабильно без **[авторизации](./auth.md)**
:::

## Бан по фразе

Забанит до 30 последних сообщений по фразе и все новые

`!mb <*фраза>`

*Необязательно

:::info
Если не указать фразу, бот сам попробует  найти банфразу по сообщениям от пользователей, впервые написавших в чат. Если бот её не найдёт, будут забанены последние новые пользователи чата и массбан завершится
:::

## Мут по фразе
Замутит до 30 последних сообщений по фразе и все новые

`!m <*длительность> <фраза>`

*Необязательно, длительность по умолчанию ‒ 300

## Остановить массовый бан и мут
`!stop`

:::note
Массовый бан/мут автоматически остановится через 5 минут после запуска
:::