---
sidebar_position: 12
custom_edit_url: null
---

# Настройки стрима

Изменение названия и категории стрима, элиасы категорий.

<details>
  <summary>Общая информация</summary>
  <ul>
    <li><b>Название:</b> t</li>
    <li><b>Элиасы:</b> g, addg, delg, games</li>
    <li><b>Кулдаун:</b> общий 3 секунды</li>
    <li><a href="https://github.com/Relanit/ModBoty/blob/master/ModBoty/cogs/stream_info.py"><b>Исходный код</b></a></li>
  </ul>
</details>

:::note
Для работы команды требуется **[авторизация](./auth.md)**
:::

## Изменение заголовка
`!t <заголовок>`
<img src={require('@site/static/examples/streaminfo/t.png').default} />

## Изменение категории
`!g <название категории>`
<img src={require('@site/static/examples/streaminfo/g.png').default} />

### Добавить элиас категории
`!addg <элиас> <название категории>`
<img src={require('@site/static/examples/streaminfo/addg.png').default} />


### Удалить элиас
`!delg <элиас>`

### Просмотр элиасов
`!games`
<img src={require('@site/static/examples/streaminfo/games.png').default} />

### Просмотр информации об элиасах
`!help <название или элиас>`
<img src={require('@site/static/examples/streaminfo/help.png').default} /> <p></p>

:::info
Также с помощью !help можно узнать информацию о любых командах бота и **[кастомных командах](commands.md)**
:::