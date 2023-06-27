---
custom_edit_url: null
sidebar_position: 19
---

# Прочие команды

Другие полезные команды.

## Помощь
`!help` ‒ список команд

`!help <команда>` ‒ описание команды

<img src={require('@site/static/examples/commands/help.png').default} />
<img src={require('@site/static/examples/stream-info/help.png').default} />
<img src={require('@site/static/examples/other/help.png').default} />

:::info
С помощью !help можно узнать информацию о любой команде бота, **[элиасах категорий](stream-info.md#добавить-элиас-категорий)**, а также о **[кастомных командах](commands/index.md)** , их элиасах и таймерах
:::

## Спам текстом
`!spam <число> <текст>`
<img src={require('@site/static/examples/other/spam.png').default} />

## Бан
`!ban <ник>`

## Мут
`!mute <ник> <длительность в секундах>`

## Значения по умолчанию для погоды и гороскопа
`!set <horoscope или city> <значение>`

## Перенос команд или категорий с другого канала
`!copy <названия команд и категорий> from <логин канала>`

## Проверка бота
`!ping`