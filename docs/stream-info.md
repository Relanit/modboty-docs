---
sidebar_position: 13
custom_edit_url: null
---

# Название и категория стрима

Изменение названия и категории стрима, элиасы категорий.

<details>
  <summary>Общая информация</summary>
  <ul>
    <li><b>Название:</b> t</li>
    <li><b>Элиасы:</b> g, addg, delg, games</li>
    <li><b>Кулдаун:</b> общий 3 секунды</li>
  </ul>
</details>

:::note
Для работы команды требуется **[авторизация](./auth.md)**
:::

## Изменение заголовка
`!t <заголовок>`
<img src={require('@site/static/examples/stream-info/t.png').default} alt="title"/>

## Изменение категории
`!g <название категории>`
<img src={require('@site/static/examples/stream-info/g.png').default} alt="game just chatting"/>

### Добавить элиас категории
`!addg <элиас> <название категории>`
<img src={require('@site/static/examples/stream-info/addg.png').default} />


### Удалить элиас
`!del <элиас>`

### Просмотр элиасов
`!games`
<img src={require('@site/static/examples/stream-info/games.png').default} />

### Копирование элиасов с другого канала
Вы можете скопировать элиасы категорий с другого канала, используя следующую команду:

`!copy <элиасы через пробел> from <логин канала>`

Можно указать `games`, тогда скопируются все элиасы
<img src={require('@site/static/examples/stream-info/copy.png').default} />

### Просмотр информации об элиасах
`!help <название или элиас>`
<img src={require('@site/static/examples/stream-info/help.png').default} /> <p></p>

:::info
Также с помощью !help можно узнать информацию о любых командах бота и **[кастомных командах](commands/index.md)**
:::