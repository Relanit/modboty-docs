---
sidebar_position: 11
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
  </ul>
</details>

:::note 
Для работы команды требуется **[авторизация](./auth.md)** 
:::

## Создание опроса
`!poll <*длительность> <заголовок> / <вариант> / <вариант>`

*Необязательно, длительность по умолчанию ‒ 60

<img src={require('@site/static/examples/polls/poll.png').default} /> <p></p>


:::caution
Twitch не создаст опрос, содержащий мат
:::

## Удаление опроса
`!delpoll` ‒ удалит активный опрос