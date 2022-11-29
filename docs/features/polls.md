---
sidebar_position: 7
custom_edit_url: null
---

# Опросы

Создание и завершение опросов

:::note Примечание
Для работы команды требуется **[авторизация](../auth.md)**
:::

**[Исходный код](https://github.com/Relanit/ModBoty/blob/master/ModBoty/cogs/polls.py)**

## Создание опроса
`!poll duration title \ option \ option`
- `duration` - продолжительность опроса в секундах (необязательно, по умолчанию 60)
- `title` - заголовок опроса
- `option` - вариант выбора (до 5 штук)

Пример:
```
!poll 180 Ваш возраст \ до 14 \ 14-17 \ 18+
```

:::caution Осторожно
Twitch не создаст опрос, содержащий мат
:::

## Удаление опроса
`!delpoll` - удалит активный опрос