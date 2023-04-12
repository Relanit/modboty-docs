---
id: index
slug: /global_ban
custom_edit_url: null
---

# Глобальный бан
Блокировка пользователей на всех каналах с включённым глобальным баном.

<details>
  <summary>Общая информация</summary>
  <ul>
    <li><b>Название:</b> gb</li>
    <li><b>Элиасы:</b> requests, recents, gbmods, gbmod, approve, disapprove </li>
    <li><b>Кулдаун:</b> общий 5 секунд</li>
    <li><a href="https://github.com/Relanit/ModBoty/blob/master/ModBoty/cogs/global_ban.py"><b>Исходный код</b></a></li>
  </ul>
</details>

## Включение и выключение
`!gb <on или off>`
<img src={require('@site/static/examples/global_ban/gb_on_off.png').default} />

## Отправить запрос на глобальный бан

`!gb <логин> <причина>`
<img src={require('@site/static/examples/global_ban/gb_name.png').default} />
<p></p>

Если в нике есть банворд, вы можете использовать id пользователя

`!gb id <id пользователя> <причина>`
<img src={require('@site/static/examples/global_ban/gb_id.png').default} />
<p></p>

:::note
В боте отсутствует глобальный разбан, поскольку команда подразумаевает, что глобальный бан будут выдавать только за самые серьёзные нарушения, а заявки проверяются группой модераторов вручную
:::

## Просмотр активных запросов
Бот отправит ссылку на список активных запросов, который модераторы проверяют в данный момент.

`!requests`

## Просмотр недавно проверенных запросов
Бот отправит ссылку на список недавно проверенных запросов.

`!recents`

:::tip
**[Редакторы бота](../editors.md)** могут выдать **[доверенным пользователям](../trusted-users.md)** право отправлять запросы на глобальный бан
:::