---
sidebar_position: 12
custom_edit_url: null
---

# Ставки

Создание и редактирование ставок.

<details>
  <summary>Общая информация</summary>
  <ul>
    <li><b>Название:</b> pred</li>
    <li><b>Элиасы:</b> endpred, delpred, lockpred, repred</li>
    <li><b>Кулдаун:</b> общий 3 секунды</li>
  </ul>
</details>

:::note
Для работы команды требуется **[авторизация](./auth.md)**
:::

## Создание ставки
`!pred <длительность> <заголовок> / <исход>  / <исход>`

*Можно не указывать длительность и исходы, длительность по умолчанию ‒ `60 секунд`, исходы по умолчанию ‒ `Да и Нет`

<img src={require('@site/static/examples/predictions/pred.png').default} /> <p></p>

:::caution
Twitch не создаст ставку, содержащую мат
:::

## Завершение ставки
`!endpred <номер варианта>` 
<img src={require('@site/static/examples/predictions/endpred.png').default} />

## Отмена ставки
`!delpred` 

## Блокировка ставки
`!lockpred` 

## Повтор предыдущей ставки
`!repred <*длительность>`

*Необязательно, длительность по умолчанию как у прошлой ставки