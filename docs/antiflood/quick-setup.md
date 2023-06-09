---
id: quick-setup
custom_edit_url: null
sidebar_position: 1
---

# Быстрая настройка

## Включение и выключение
`!af <on или off>`
<img src={require('@site/static/examples/antiflood/af-on.png').default} />

## Строгость работы

`!af mode <режим>`

Доступные режимы:

 `1` ‒ мягкий режим, будет мутить только большие сообщения

 `2` ‒ умеренный режим, будет мутить сообщения среднего размера (по умолчанию)

 `3` ‒ строгий режим, будет мутить даже относительно короткие сообщения

<img src={require('@site/static/examples/antiflood/af-mode.png').default} />

## Изменение таймаутов

`!timeouts <длительность мутов через пробел>`
<img src={require('@site/static/examples/antiflood/timeouts.png').default} />

### Время сброса таймаутов
Если пользователь не получает мут в течение указанного времени (по умолчанию 900), его муты сбрасываются.

<img src={require('@site/static/examples/antiflood/timeouts-cd.png').default} />

## Режим работы в оффлайне
По умолчанию антифлуд работает только на стриме.

`!af <online или always>`
<img src={require('@site/static/examples/antiflood/af-offline.png').default} />


## Просмотр настроек

`!af`
<img src={require('@site/static/examples/antiflood/af.png').default} />

:::tip
Если вам не приходит сообщение, попробуйте зафолловиться на бота, написать боту в лс и вызвать команду повторно
:::