---
sidebar_position: 13
custom_edit_url: null
---

# Редакторы бота

Настройка редакторов бота и управление доступом к командам. Редакторы могут [управлять випами](./vips.md) и назначать [доверенных пользователей](./trusted-users.md)

<details>
  <summary>Общая информация</summary>
  <ul>
    <li><b>Название:</b> editor</li>
    <li><b>Элиасы:</b> bancmd, unbancmd</li>
    <li><b>Кулдаун:</b> общий 5 секунд</li>
    <li><a href="https://github.com/Relanit/ModBoty/blob/master/ModBoty/cogs/editors.py"><b>Исходный код</b></a></li>
  </ul>
</details>

:::note
Редакторы не могут вызывать команды без модерки
:::

## Управление редакторами
`!editor <add или del> <ник>`
<img src={require('@site/static/examples/editors/editor.png').default} />

## Настройка доступа

По умолчанию большинство команд доступны всем модераторам канала, но с помощью следующих команд вы можете это изменить

### Заблокировать команду
Команда останется доступна только стримеру и редакторам бота

`!bancmd <команда или all>`
<img src={require('@site/static/examples/editors/bancmd.png').default} /> <p></p>

:::note
При блокировке команды будет ограничен доступ и к всем её элиасам, например, при блокировке !mb будут также заблокированы !m и !mbf
:::

### Разблокировать команду
Команда станет доступна всем модераторам

`!unbancmd <команда или all>`
<img src={require('@site/static/examples/editors/unbancmd.png').default} />