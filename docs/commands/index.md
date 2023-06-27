---
id: index
slug: /commands
custom_edit_url: null
---

# Команды

Команды с указанным текстом для спама (от модераторов) или вызова пользователями.

<details>
  <summary>Общая информация</summary>
  <ul>
    <li><b>Название:</b> link</li>
    <li><b>Элиасы:</b> links, del, aliases, private, announce, offline</li>
    <li><b>Кулдаун:</b> общий 3 секунды</li>
  </ul>
</details>


## Создание и изменение команд
`!link <название> <текст команды>`
<img src={require('@site/static/examples/commands/link.png').default} />


## Вызов команд
<img src={require('@site/static/examples/commands/call.png').default} />

## Элиасы команд
Дополнительные названия для команд.

`!alias <команда> <add или del> <элиасы через пробел>`
<img src={require('@site/static/examples/commands/alias.png').default} />


## Удаление команд
`!del <название или элиаси команд через пробел>`
<img src={require('@site/static/examples/commands/del.png').default} />


## Просмотр команд
`!links <public или private или offline или always>`
<img src={require('@site/static/examples/commands/links.png').default} />


## Управление доступом

### Для отдельной команды
`!private <команда> <on или off>`
<img src={require('@site/static/examples/commands/private-one.png').default} />

### Для всех команд
`!private <on или off>`
<img src={require('@site/static/examples/commands/private-all.png').default} /> <p></p>

:::note
Будет изменён доступ ко всем командам, кроме тех, которым указывали приватность отдельно
:::

## Автоматическая отправка команд

Автоматическую отправку команд можно настроить через **[таймеры](.././timers.md)**

## Режим работы в оффлайне
Команда будет работать только в оффлайне

`!offline <команда> <on или off>`
<img src={require('@site/static/examples/commands/offline.png').default} />

## Управление announce
Отправка команд через /announce

### Изменение announce для отдельных команд
`!announce <команда> <цвет>`

Цвета ‒ `blue, green, orange, purple, primary`

<img src={require('@site/static/examples/commands/announce-one.png').default} />

### Изменение announce для всех команд
`!announce <цвет>`

Цвета ‒ `blue, green, orange, purple, primary`

:::note
Будет изменён announce всех команд, кроме тех, которым указывали announce отдельно
:::


## Изменение кд команд

Бот поддерживает 2 типа кд:
- `Личный` ‒ собственный кд для каждого пользователя
- `Общий` ‒ кд для всех пользователей

По умолчанию у команд личный кд 0 секунд, общий кд 3 секунды

`!linkcd <команда> <личный кд> <общий кд>`

<img src={require('@site/static/examples/commands/linkcd.png').default} />

## Копирование команд с другого канала
Вы можете скопировать команды с другого канала, используя следующую команду:

`!copy <команды через пробел> from <логин канала>`
 <img src={require('@site/static/examples/commands/copy_commands.png').default} />

## Просмотр информации о командах 
Просмотр элиасов, кд и таймеров команд

`!help <команда>`

<img src={require('@site/static/examples/commands/help.png').default} /> <p></p>

:::info
Также с помощью !help можно узнать информацию о любой команде бота и **[элиасах категорий](.././stream-info.md#добавить-элиас-категории)**
:::