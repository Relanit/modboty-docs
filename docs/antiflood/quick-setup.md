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

### Адаптивные таймауты
Увеличивает длительность уже установленных таймаутов в зависимости от размера сообщения

`!timeouts base <значение от 1.0 до 5.0> rate <значение от 0.0 до 1.0>`
- `base` ‒ Базовое значение, чем ближе к 5.0, тем сильнее будут увеличиваться таймауты
- `rate` ‒ Замедление увеличения, чем ближе к 1.0, тем менее значительно будут увеличиваться уже большие таймауты


Для отключения ‒ `!af base 0` или `!af rate 0`
<img src={require('@site/static/examples/antiflood/adaptive_timeouts.png').default} />

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