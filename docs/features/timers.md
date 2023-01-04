---
sidebar_position: 2
custom_edit_url: null
---

# Таймеры

Автоматическая отправка команд с определённым интервалом

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

### Создание/изменение таймера
`!timer name delay number`
- `name` - название или элиас команды
- `delay` - интервал между отправкой команды (в минутах)
- `number` - сколько раз нужно отправить команду

### Удаление таймера
`!delt name`
- `name` - название или элиас команды

### Включение/Выключение таймера
`!timer name value`
- `value` - `on` или `off` для включения и выключения таймера соответственно

Пример:

    !timer tg off

### Изменение announce
`!timer name value`
- `value` - `a` или `noa` для отправки с и без announce соответственно

## Просмотр таймеров
`!timers`

## Режим работы таймеров

### Режим по умолчанию 
`!timers value`
- `value` - `online` или `always` - таймеры будут работать только на стриме и всегда соответственно

### Режим для отдельных таймеров
`!timer name value`
- `value` - `online` или `always` - таймер будет работать только на стриме и всегда соответственно

Пример:

    !timer tg always

## Информация о таймере
`!help name`
- `name` - название или элиас команды