---
sidebar_position: 6
custom_edit_url: null
---

# Антифлуд

Сделайте чат читаемым с помощью лучшей защиты от флуда.

Возможности:
- Мут сообщений с повторяющимися фразами, капсом, большим количеством смайлов
- Мутит в зависимости от фактического размера сообщений, в отличие от других систем, видит все смайлы и их размер
- Учитывает сообщения, отправленные несколько секунд назад

<details>
  <summary>Общая информация</summary>
  <ul>
    <li><b>Название:</b> antiflood</li>
    <li><b>Элиасы:</b> af, timeouts, allow, disallow</li>
    <li><b>Кулдаун:</b> общий 5 секунд</li>
    <li><a href="https://github.com/Relanit/ModBoty/blob/master/ModBoty/cogs/antiflood.py"><b>Исходный код</b></a></li>
  </ul>
</details>

## Включение/выключение
`!af value`
- `value` ‒ `on` или `off` для включения или выключения

## Быстрая настройка
Изменение строгости работы бота

`!af mode value`
- `value` ‒ один из режимов:

#### `1` ‒ мягкий режим, будет мутить только большие сообщения

#### `2` ‒ умеренный режим, будет мутить сообщения среднего размера (по умолчанию)

#### `3` ‒ строгий режим, будет мутить даже относительно короткие сообщения

Пример:

    !af mode 1

## Изменение таймаутов

`!timeouts time time time`
- `time` ‒ длительность мутов через пробел


    !timeouts 30 180 300

### Кд таймаутов
Если пользователь не получает мут в течение указанного времени (по умолчанию 900), его муты сбрасываются

    !timeouts cd 1800

## Режим работы в оффлайне
По умолчанию антифлуд работает только на стриме

`!af value`
- `value` - `online` или `always` для работы на стриме или всегда соответственно

## Просмотр настроек

`!af`

## Разрешения
Бот не будет реагировать на пользователя в течение указанного времени

`!allow user time`
- `user` ‒ ник пользователя
- `time` ‒ время в секундах (по умолчанию 180)


    !allow relanit 300

### Отмена разрешения
`!disallow user`


    !disallow relanit

### Приостановка работы антифлуда
`!allow time`
- `time` ‒ время в секундах (по умолчанию 180)

Возобновление работы ‒ `!disallow`

## Ручная настройка 
Если вас не устраивает работа существующих режимов, вы можете легко их настроить

:::tip
Чем ниже значения, тем более строго будет работать бот. Вы можете просмотреть текущие настройки через `!af`
:::

### Минимальная длина сообщения для проверки
`!af size value`
- `value` ‒ длина сообщения в пискелях


    !af size 3000

### Окна сообщений
Окна нужны для проверки предыдущих сообщений пользователя

#### Минимальный размер предыдущих сообщений пользователя в процентах
Бот не будет мутить за предыдущие сообщения, пока они занимают меньше указанного процента от размера остальных сообщений

`!af percent value`
- `value` ‒ число от 0 до 100


    !af percent 30

#### Время основого окна
Сколько секунд бот будет помнить предыдущие сообщения

`!af main time value`
- `value` ‒ время в секундах


    !af main time 12

#### Минимальная длина предыдущих сообщений пользователя для проверки
`!af main size value`
- `value` ‒ длина сообщений в пикселях


    !af main size 3500

#### Ограничение количества отправленных сообщений для пользователя
Пользователь получит мут, если отправит больше сообщений, чем указано, за время основного окна

`!af main messages value`
- `value` ‒ количество сообщений


    !af main messages 7

#### Второе окно
Пользователь получит мут, если отправит больше сообщений, чем указано, за время окна

`!af seсond messages value1 time value2`
- `value1` ‒ количество сообщений
- `value2` ‒ время в секундах


    !af seсond messages 4 time 2.5

Удаление второго окна


    !af seсond del

### Повторяющиеся фразы в сообщении
Чем меньше значение, тем строже будет работать бот

`!af unique value`
- `value` ‒ значение от 0 до 1 (0 для выключения)


    !af unique 0.3

### Количество капса в сообщении
`!af caps value`
- `value` ‒ значение от 0 до 1 (0 для выключения)


    !af caps 0.7

### Количество смайлов в сообщении
`!af emotes value`
- `value` ‒ значение от 0 до 1 (0 для выключения)


    !af emotes 0.7

### Коэффициент широких смайлов
Чем выше значение, тем сильнее бот обращает внимание на широкие смайлы

`!af wide value`
- `value` ‒ значение от 1 до 2 (1 для выключения)


    !af wide 1.3

### Максимальная длина ссылок
Если длина ссылок в сообщении превышает указанное значение, бот его удалит

`!af links value`
- `value` ‒ значение от 1500 (0 для выключения)


    !af links 2500

### Средняя длина слова
Бот замутит пользователя, если средняя длина слова в его сообщениях превышает указанное число

`!af word value`
- `value` ‒ длина слова в пикселях


    !af word 400


### Сброс настроек
Сброс настроек установленного режима

`!af reset`