---
sidebar_position: 9
custom_edit_url: null
---

# Ставки

Создание и редактирование ставок

<details>
  <summary>Общая информация</summary>
  <ul>
    <li><b>Название:</b> pred</li>
    <li><b>Элиасы:</b> endpred, delpred, lockpred, reppred</li>
    <li><b>Кулдаун:</b> глобальный 3 секунды</li>
    <li><a href="https://github.com/Relanit/ModBoty/blob/master/ModBoty/cogs/predictions.py"><b>Исходный код</b></a></li>
  </ul>
</details>

:::note Примечание
Для работы команды требуется **[авторизация](../auth.md)**
:::

## Создание ставки
`!pred duration title \ outcome  \ outcome`
- `\` - разделитель, может быть также `/` 
- `duration` - длительность ставки в секундах (необязательно, по умолчанию 60)
- `title` - заголовок ставки
- `outcome` - возможные исходы (до 10 штук)

Пример:
```
!pred 180 Какое число выпадет?\1\2\3
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
`!reppred duration`
- `duration` - другая длительность ставки в секундах (необязательно)