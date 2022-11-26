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
- `duration` - продолжительность ставки в секундах (необязательно, по умолчанию 60)
- `title` - заголовок ставки
- `outcome` - возможные исходы (до 10 штук)

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