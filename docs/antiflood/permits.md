---
id: permits
custom_edit_url: null
sidebar_position: 2
---

# Разрешения
Бот не будет реагировать на пользователя в течение указанного времени.

`!allow <ник> <*время>`

*Необязательно, по умолчанию 180
<img src={require('@site/static/examples/antiflood/allow-user.png').default} />

## Отмена разрешения
`!disallow <ник>`
<img src={require('@site/static/examples/antiflood/disallow-user.png').default} />

## Приостановка работы антифлуда
`!allow <*время>`

*Необязательно, по умолчанию 180
<img src={require('@site/static/examples/antiflood/allow-all.png').default} />


Возобновление работы ‒ `!disallow`