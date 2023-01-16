---
sidebar_position: 7
custom_edit_url: null
---

# Управление випами

Вип и анвип пользователей

<details>
  <summary>Общая информация</summary>
  <ul>
    <li><b>Название:</b> vip</li>
    <li><b>Элиасы:</b> unvip, unvips, delunvip</li>
    <li><b>Кулдаун:</b> общий 3 секунды</li>
    <li><a href="https://github.com/Relanit/ModBoty/blob/master/ModBoty/cogs/vips.py"><b>Исходный код</b></a></li>
  </ul>
</details>

:::note
- Для работы команды требуется **[авторизация](../auth.md)**
- Команда доступна только **[редакторам бота](./editors.md)**
:::

## Вип
`!vip user`
- `user` ‒ логин пользователя

## Анвип

`!unvip user`

### Отложенный анвип

`!unvip user time`
- `time` ‒ время анвипа, возможны следующие варианты:

#### С ключевым словом `in` ‒ анвип произойдёт через указанное время

    !unvip user in 5m   m - минуты
    !unvip user in 1h   h - часы
    !unvip user in 1d   d - дни
    !unvip user in 2w   w - недели
    !unvip user in 2mo  mo - месяцы
    !unvip user in 1y   y - годы

    Можно указывать разные значения слитно
    !unvip user in 1h30m ‒ анвип произойдёт через полтора часа

#### Продление/уменьшение срока випки через ключевое слово `extend`

Работает также, как ключевое слово `in`, но увеличивает/уменьшает дату анвипа на указанное время.

    Анвип произойдёт на неделю позже изначального времени
    !unvip user extend 1w

    Анвип произойдёт на 3 дня раньше изначального времени
    !unvip user extend -3d

#### С ключевым словом `on` ‒ анвип произойдёт в указанную дату и/или время

    !unvip user on 1/5  анвип будет 5 января
    !unvip user on 1st december
    !unvip user on 21:00
    !unvip user on 2023.1.1 00:00
    !unvip user on tomorrow 00:00
    !unvip user on fri  анвип будет в пятницу
    !unvip user on next wed   анвип будет в следующую среду

#### В конце любого варианта можно указать `offline`, тогда анвип будет вне стрима

    !unvip user offline   анвип будет после окончания текущего стрима
    !unvip user in 2w offline
    !unvip user in 1mo offline
    !unvip user on 1/5 offline


### Просмотр отложенных анвипов

`!unvips` ‒ cписок пользователей с отложенным анвипом

`!unvips user`
- `user` ‒ логин пользователя

Покажет дату и время анвипа пользователя

### Удаление отложенных анвипов

`!delunvip user`