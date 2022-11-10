---
sidebar_position: 6
---

# Управление випами

Вип и анвип пользователей

Для работы команды требуется **[авторизация](../auth)**

Команда доступна только **[Редакторам бота](./editors)**

**[Исходный код](https://github.com/Relanit/ModBoty/blob/master/commands/vips.py)**

## Вип
`!vip user`
- `user` - логин пользователя

## Анвип

`!unvip user`

### Отложенный анвип

`!unvip user values`

`values` - время анвипа, возможны следующие варианты:

- С ключевым словом `in` - анвип произойдёт через указанное вами время

    Примеры:
    ```
    !unvip test in 5m   m - минуты
    !unvip test in 1h   h - часы
    !unvip test in 1d   d - дни
    !unvip test in 2w   w - недели
    !unvip test in 2mo  mo - месяцы
    !unvip test in 1y   y - годы
    ```

- С ключевым словом `on` - анвип произойдёт в указанную дату и/или время

    Примеры:
    ```
    !unvip test on 1/5  анвип будет 5 января
    !unvip test on 1st december
    !unvip test on 21:00
    !unvip test on 2023.1.1 00:00
    !unvip test on tomorrow 00:00
    !unvip test on fri  анвип будет в пятницу
    !unvip test on next wed   анвип будет в следующую среду
    ```
- В конце любого варианта можно указать `offline`, тогда анвип будет вне стрима

    Примеры:
    ```
    !unvip test offline   анвип будет после окончания текущего стрима
    !unvip test in 2w offline
    !unvip test in 1mo offline
    !unvip test on 1/5 offline
    ```

### Просмотр отложенных анвипов

`!unvips`

список пользователей с отложенным анвипом

`!unvips user`
- `user` - логин пользователя

Покажет дату и время анвипа пользователя