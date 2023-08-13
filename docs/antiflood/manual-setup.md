---
id: manual-setup
custom_edit_url: null
sidebar_position: 3
---

# Ручная настройка 
Если вас не устраивает работа существующих режимов, вы можете легко их настроить.

:::tip
Вы можете просмотреть текущие настройки через `!af`
:::

## Минимальная длина сообщения для проверки
`!af size <значение>`

Значение ‒ длина сообщения в пикселях
<img src={require('@site/static/examples/antiflood/size.png').default} />

## Блокировка иностранных языков
Мутит за отправку сообщений, содержащих текст на китайском/японском/корейском/арабском/санскрите и других нелатинских языках

`!af lang <on или off>`

## Повторяющиеся фразы в сообщении
`!af unique <значение или off>`

Значение ‒ число от 0 до 1, чем меньше, тем строже.
<img src={require('@site/static/examples/antiflood/unique.png').default} />

## Количество капса в сообщении
`!af caps <значение или off>`

Значение ‒ число от 0 до 1, чем меньше, тем строже.
<img src={require('@site/static/examples/antiflood/caps.png').default} />

## Количество смайлов в сообщении
`!af emotes <значение или off>`

Значение ‒ число от 0 до 1, чем меньше, тем строже.
<img src={require('@site/static/examples/antiflood/emotes.png').default} />

## Множитель для смайлов
Чем больше число, тем сильнее бот обращает внимание на смайлы

`!af emotes_size <значение или off>`

Значение ‒ число от 1 до 3
<img src={require('@site/static/examples/antiflood/emotes_size.png').default} />

## Множитель для широких смайлов
Чем больше число, тем сильнее бот обращает внимание на широкие смайлы

`!af wide <значение или off>`

Значение ‒ число от 1 до 3
<img src={require('@site/static/examples/antiflood/wide.png').default} />

## Количество эмодзи в сообщении
`!af emojis <значение или off>`

Значение ‒ число от 0 до 1, чем меньше, тем строже.
<img src={require('@site/static/examples/antiflood/emojis.png').default} />

## Множитель для эмодзи
Чем больше число, тем сильнее бот обращает внимание на эмодзи

`!af emojis_size <значение или off>`

Значение ‒ число от 1 до 3
<img src={require('@site/static/examples/antiflood/emojis_size.png').default} />

## Максимальная длина ссылок
Если длина ссылок в сообщении превышает указанное значение, бот его удалит

`!af links <значение или off>`

Значение ‒ длина ссылок в пикселях, чем меньше, тем строже.
<img src={require('@site/static/examples/antiflood/links.png').default} />

## Средняя длина слова
Бот замутит пользователя, если средняя длина слова в его сообщениях превышает указанное значение (не работает, если в сообщении есть ссылки)

`!af word <значение или off>`

Значение ‒ длина слова в пикселях, чем меньше, тем строже.
<img src={require('@site/static/examples/antiflood/word.png').default} />

## Минимальный размер предыдущих сообщений пользователя для проверки
Бот не будет мутить пользователя за предыдущие сообщения, пока они занимают меньше указанного процента от размера остальных сообщений в чате.

`!af percent <значение или off>`

Значение ‒ число от 0 до 100, чем меньше, тем строже.
<img src={require('@site/static/examples/antiflood/percent.png').default} />

## Окна сообщений
Окна сообщений отвечают за проверку предыдущих сообщений пользователя

### Время основого окна
Сколько секунд бот будет помнить предыдущие сообщения

`!af main time <время в секундах>`

<img src={require('@site/static/examples/antiflood/main-time.png').default} />

### Минимальная длина предыдущих сообщений пользователя для проверки
`!af main size <значение>`

Значение ‒ длина сообщений в пикселях, чем меньше, тем строже.
<img src={require('@site/static/examples/antiflood/main-size.png').default} />

### Ограничение количества отправленных сообщений для пользователя
Пользователь получит мут, если отправит больше сообщений, чем указано, за время основного окна

`!af main messages <кол-во сообщений>`
<img src={require('@site/static/examples/antiflood/main-messages.png').default} />

### Второе окно
Пользователь получит мут, если отправит больше сообщений, чем указано, за время окна

`!af seсond messages <кол-во сообщений> time <время в секундах>`
<img src={require('@site/static/examples/antiflood/second.png').default} />


#### Удаление второго окна
`!af seсond del`


## Сброс настроек
Сброс настроек установленного режима

`!af reset`
<img src={require('@site/static/examples/antiflood/reset.png').default} />
