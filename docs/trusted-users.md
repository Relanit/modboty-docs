---
sidebar_position: 14
custom_edit_url: null
---

# Доверенные пользователи

Настройка доверенных пользователей, которым разрешено вызывать команды бота без модерки.

<details>
  <summary>Общая информация</summary>
  <ul>
    <li><b>Название:</b> trust</li>
    <li><b>Элиасы:</b> trusts, trustcmd, trustcmds</li>
    <li><b>Кулдаун:</b> общий 3 секунды</li>
    <li><a href="https://github.com/Relanit/ModBoty/blob/master/ModBoty/cogs/trusted_users.py"><b>Исходный код</b></a></li>
  </ul>
</details>

## Управление доверенными пользователями
Доверенных пользователей могут назначать [редакторы бота](./editors.md) и стримеры. 

`!trust <add или del> <ник>`
<img src={require('@site/static/examples/trusted-users/trust.png').default} />

## Просмотр доверенных пользователей
`!trusts`
<img src={require('@site/static/examples/trusted-users/trusts.png').default} />

## Настройка команд для доверенных пользователей
Эту команду могут вызывать только стримеры.

`!trustcmd <add или del> <команда>`
<img src={require('@site/static/examples/trusted-users/trustcmd.png').default} /> <p></p>

:::note
При добавлении команды, добавятся и все её элиасы, например, при добавлении !m, также добавятся !mb и !mbf 
:::

## Просмотр команд для доверенных пользователей
`!trustcmds`
<img src={require('@site/static/examples/trusted-users/trustcmds.png').default} />
