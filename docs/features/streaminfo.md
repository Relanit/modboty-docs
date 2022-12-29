---
sidebar_position: 10
custom_edit_url: null
---

# Настройки стрима

Изменение названия и категории стрима

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
Для работы команды требуется **[авторизация](../auth.md)**
:::

## Изменение заголовка
`!t title`
- `title` - заголовок стрима (до 140 символов)

## Изменение категории
`!g game`
- `game` - название категории

### Добавить элиас
`!addg alias game`
- `alias` - элиас категории
- `game` - название категории


Пример:

    Модератор: !addg j just chatting
    Модератор: !j
    ModBoty: Установлена категория Just Chatting 


### Удалить элиас
`!delg alias`
- `alias` - элиас категории

### Просмотр элиасов
`!games`

### Информация об элиасах
`!help name`
- `name` - название или элиас категории