---
sidebar_position: 8
custom_edit_url: null
---

# Опросы

Создание и завершение опросов.

<details>
  <summary>Общая информация</summary>
  <ul>
    <li><b>Название:</b> poll</li>
    <li><b>Элиасы:</b> delpoll</li>
    <li><b>Кулдаун:</b> общий 3 секунды</li>
    <li><a href="https://github.com/Relanit/ModBoty/blob/master/ModBoty/cogs/polls.py"><b>Исходный код</b></a></li>
  </ul>
</details>

:::note 
Для работы команды требуется **[авторизация](../auth.md)** 
:::

## Создание опроса
`!poll duration title \ option \ option`
- `\` ‒ разделитель, можно использовать `/` 
- `duration` ‒ продолжительность опроса в секундах (необязательно, по умолчанию 60)
- `title` ‒ заголовок опроса
- `option` ‒ вариант выбора (до 5 штук)

Пример:

    !poll 180 Ваш возраст \ до 14 \ 14-17 \ 18+


:::caution
Twitch не создаст опрос, содержащий мат
:::

## Удаление опроса
`!delpoll` ‒ удалит активный опрос