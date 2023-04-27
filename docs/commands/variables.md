---
id: variables
custom_edit_url: null
sidebar_position: 1
---

# Переменные
Вы можете использовать в текстах команд переменные, которые будут заменяться другим значением при вызове команды

## {channel}
При вызове команды переменная заменится на логин канала, на котором вызывается команда.
<img src={require('@site/static/examples/commands/variables/channel.png').default} />

## {chatter}
При вызове команды переменная заменится на ник случайного участника чата. Если нужно указать несколько чаттеров, можно использовать {chatter 1} {chatter 2} {chatter 3} и т.д.
<img src={require('@site/static/examples/commands/variables/chatter.png').default} />

## {countdown}
При вызове команды переменная заменится на время, оставшееся до наступления даты.

Использование: `{countdown дата время±смещение}`

Возможные форматы даты:
- `2030-01-01`
- `Jan 01 2030`
- `Jan 1st 2030`
- `01 Jan 2030`
- `1st Jan 2030`

Возможные форматы времени:
- `13:00:00`
- `01:00:00PM`

Для указания часового пояса необходимо приписать к времени смещение от UTC (для Москвы это +03:00)
<img src={require('@site/static/examples/commands/variables/countdown.png').default} />

## {followage}
Использование: `{followage ник_пользователя ник_стримера}`

При вызове заменится на срок отслеживания стримера пользователем. По умолчанию выдаст срок отслеживания для вызвавшего пользователя на текущий канал.
<img src={require('@site/static/examples/commands/variables/followage.png').default} />

## {followcount}
При вызове заменится на количество фолловеров канала, на котором вызывается команда.
<img src={require('@site/static/examples/commands/variables/followcount.png').default} />

## {pick}
При вызове команды переменная заменится на один из указанных вариантов, варианты перечисляются через `|`
<img src={require('@site/static/examples/commands/variables/pick.png').default} />

Также можно указывать другие переменные в вариантах
<img src={require('@site/static/examples/commands/variables/pick2.png').default} />

## {query}
Использование: `{query значение по умолчанию}`

При вызове команды переменная заменится на текст, указанный пользователем. Если пользователь не указал текст, используется текст по умолчанию.
<img src={require('@site/static/examples/commands/variables/query.png').default} />

## {randint}
При вызове команды переменная заменится на случайное число из указанного диапазона. Можно использовать другие переменные вместо чисел
<img src={require('@site/static/examples/commands/variables/randint.png').default} />

<p><img src={require('@site/static/examples/commands/variables/randint2.png').default} /></p>

## {sender}
При вызове команды переменная заменится на имя пользователя, вызвавшего команду.

:::note
Таймер, в тексте которого есть `{sender}`, не будет работать
:::

<img src={require('@site/static/examples/commands/variables/sender.png').default} />

## {subcount}
При вызове заменится на количество подписчиков канала, на котором вызывается команда.

:::note
Для работы переменной требуется **[авторизация](../auth.md)**
:::

<img src={require('@site/static/examples/commands/variables/subcount.png').default} />