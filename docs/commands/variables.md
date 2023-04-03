---
id: variables
custom_edit_url: null
sidebar_position: 1
---

# Переменные
Вы можете использовать в текстах команд переменные, которые будут заменяться другим значением при вызове команды

## {sender}
При вызове команды переменная заменится на имя пользователя, вызвавшего команду.
<img src={require('@site/static/examples/commands/variables/sender.png').default} />

:::note
Таймер, в тексте которого есть `{sender}`, не будет работать
:::

## {query}
Использование: `{query значение по умолчанию}`

При вызове команды переменная заменится на текст, указанный пользователем. Если пользователь не указал текст, используется текст по умолчанию.
<img src={require('@site/static/examples/commands/variables/query.png').default} />

## {chatter}
При вызове команды переменная заменится на ник случайного участника чата.
<img src={require('@site/static/examples/commands/variables/chatter.png').default} />

## {randint}
При вызове команды переменная заменится на случайное число из указанного диапазона. Можно использовать другие переменные вместо чисел
<img src={require('@site/static/examples/commands/variables/randint.png').default} />

<p><img src={require('@site/static/examples/commands/variables/randint2.png').default} /></p>

## {pick}
При вызове команды переменная заменится на один из указанных вариантов, варианты перечисляются через `|`
<img src={require('@site/static/examples/commands/variables/pick.png').default} />

Также можно указывать другие переменные в вариантах
<img src={require('@site/static/examples/commands/variables/pick2.png').default} />

## {followage}

Использование: `{followage ник_пользователя ник_стримера}`

При вызове заменится на срок отслеживания стримера пользователем. По умолчанию выдаст срок отслеживания для вызвавшего пользователя на текущий канал.
<img src={require('@site/static/examples/commands/variables/followage.png').default} />