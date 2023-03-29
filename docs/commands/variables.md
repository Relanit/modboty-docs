---
id: variables
custom_edit_url: null
sidebar_position: 1
---

# Переменные
Вы можете использовать в текстах команд переменные, которые будут заменяться другим значением при вызове команды.

## {sender}
При вызове команды переменная заменится на имя пользователя, вызвавшего команду.
<img src={require('@site/static/examples/commands/variables/sender.png').default} />

:::note
Таймер, в тексте которого есть `{sender}`, не будет работать
:::

## {query}
При вызове команды переменная заменится на текст, указанный пользователем.
<img src={require('@site/static/examples/commands/variables/query.png').default} />

:::note
Таймер, в тексте которого есть `{query}`, не будет работать
:::

## {chatter}
При вызове команды переменная заменится на ник случайного участника чата.
<img src={require('@site/static/examples/commands/variables/chatter.png').default} />

## {randint}
При вызове команды переменная заменится на случайное число из указанного диапазона.
<img src={require('@site/static/examples/commands/variables/randint.png').default} />

## {pick}
При вызове команды переменная заменится на один из указанных вариантов, варианты перечисляются через `/`
<img src={require('@site/static/examples/commands/variables/pick.png').default} />

Также можно указывать другие переменные в вариантах, кроме другого `{pick}`
<img src={require('@site/static/examples/commands/variables/pick2.png').default} />