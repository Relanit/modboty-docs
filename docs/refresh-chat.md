---
sidebar_position: 15
custom_edit_url: null
---

# Автообновление оверлея jChat

Обновление оверлея при изменении смайлов на стриме.

Если вы пользуетесь оверлеем **[jChat](https://www.giambaj.it/twitch/jchat/)**, вы можете включить его автообновление, тогда во время стрима бот будет автоматически отправлять команду !refreshoverlay при добавлении/удалении смайлов

<details>
  <summary>Общая информация</summary>
  <ul>
    <li><b>Название:</b> refresh-chat</li>
    <li><b>Элиасы:</b> отсутствуют</li>
    <li><b>Кулдаун:</b> общий 5 секунд</li>
    <li><a href="https://github.com/Relanit/ModBoty/blob/master/ModBoty/cogs/refresh_overlay.py"><b>Исходный код</b></a></li>
  </ul>
</details>

## Использование
`!refreshchat <on или off>`
<img src={require('@site/static/examples/refresh-chat/refresh-chat.png').default} /> <p></p>

:::note
У jChat есть кд на обновление в одну минуту, поэтому бот может не сразу отправлять команду.