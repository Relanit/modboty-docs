---
sidebar_position: 14
custom_edit_url: null
---

# Редакторы бота

Настройка редакторов бота и управление доступом к командам. **Редакторы могут [управлять випами](./vips.md) и назначать [доверенных пользователей](./trusted-users.md)**

<details>
  <summary>Общая информация</summary>
  <ul>
    <li><b>Название:</b> editor</li>
    <li><b>Элиасы:</b> editorcmd, editorcmds</li>
    <li><b>Кулдаун:</b> общий 3 секунды</li>
  </ul>
</details>

:::note
Редакторы не могут вызывать команды без модерки
:::

## Управление редакторами
`!editor <add или del> <ник>`
<img src={require('@site/static/examples/editors/editor.png').default} />

## Настройка доступа

По умолчанию большинство команд доступны всем модераторам канала, но с помощью следующих команд вы можете сделать команды доступными только редакторам бота

## Настройка команд для редакторов бота

`!editorcmd <add или del> <команда или all>`
<img src={require('@site/static/examples/editors/editorcmd.png').default} /> <p></p>

:::note
При блокировке команды будет ограничен доступ ко всем её элиасам и наоборот, например, при блокировке !mb будут также заблокированы !m и !mbf
:::

## Просмотр редакторов бота

`!editors`

## Просмотр команд для редакторов
`!editorcmds`
<img src={require('@site/static/examples/editors/editorcmds.png').default} />