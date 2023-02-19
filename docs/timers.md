---
sidebar_position: 4
custom_edit_url: null
---

# Таймеры

Автоматическая отправка команд с определённым интервалом.

<details>
  <summary>Общая информация</summary>
  <ul>
    <li><b>Название:</b> timer</li>
    <li><b>Элиасы:</b> delt, timers</li>
    <li><b>Кулдаун:</b> общий 3 секунды</li>
    <li><a href="https://github.com/Relanit/ModBoty/blob/master/ModBoty/cogs/timers.py"><b>Исходный код</b></a></li>
  </ul>
</details>

## Управление таймерами

### Создание и изменение таймера
`!timer <команда> <интервал> <кол-во сообщений>`
<img src={require('@site/static/examples/timers/timer.png').default} />

### Удаление таймера
`!delt <команда>`

### Включение и выключение таймера
`!timer <команда> <on или off>`
<img src={require('@site/static/examples/timers/timer-off.png').default} />

### Изменение announce
Отправка текста команды через /announce

`!timer <команда> <a или noa>`
<img src={require('@site/static/examples/timers/timer-a.png').default} />

## Просмотр таймеров
`!timers`
<img src={require('@site/static/examples/timers/timers.png').default} />

## Режим работы в оффлайне

### Изменение режима для отдельных таймеров
`!timer <команда> <online или always>`
<img src={require('@site/static/examples/timers/timer-always.png').default} />


### Изменение режима для всех таймеров
`!timers <online или always>`
<img src={require('@site/static/examples/timers/timers-always.png').default} /> <p></p>

:::note
Будет изменён режим работы всех таймеров, кроме тех, которым указывали режим отдельно
:::

## Просмотр информации о таймере
`!help <команда>`
<img src={require('@site/static/examples/timers/help.png').default} /> <p></p>

:::info
Также с помощью !help можно узнать информацию о любой команде бота и **[элиасах категорий](streaminfo.md#добавить-элиас)**
:::