---
sidebar_position: 8
custom_edit_url: null
---

# Ставки

Создание и редактирование ставок

:::note Примечание
Для работы команды требуется **[авторизация](../auth.md)**
:::

**[Исходный код](https://github.com/Relanit/ModBoty/blob/master/ModBoty/cogs/predictions.py)**

## Создание ставки
`!pred duration title / outcome  / outcome`
- `duration` - продолжительность ставки в секундах (от 1 до 1800)
- `title` - заголовок ставки (до 45 символов)
- `outcome` - возможные исходы (до 10 штук, до 25 символов)

Пример:
```
!pred 180 Какое число выпадет? / 1 / 2 / 3
```

:::caution Осторожно
Twitch не создаст ставку, содержащую мат
:::

## Завершение ставки
`!endpred number` 
- `number` - номер победившего варианта

## Отмена ставки
`!delpred` 

## Блокировка ставки
`!lockpred` 

## Повтор предыдущей ставки
`!reppred` 