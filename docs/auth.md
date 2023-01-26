---
sidebar_position: 2
custom_edit_url: null
---

# Авторизация

Twitch **[требует](https://dev.twitch.tv/docs/authentication#user-access-tokens)** у создателей ботов запрашивать у пользователей прохождение авторизации для получения доступа к некоторым функциям.

Список функций:
- [Управление випами](./features/vips.md)
- [Опросы](./features/polls.md)
- [Ставки](./features/predictions.md)
- [Настройки стрима](./features/streaminfo.md)
- [Разбан всех пользователей](./features/unbanall)


Для прохождения авторизации, перейдите по **[ссылке](https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=xiudfd2nsod7a4kukl5bluhjt5wedo&redirect_uri=https://modboty-auth.onrender.com/api/v1/auth&scope=channel:read:subscriptions+moderation:read+channel:manage:broadcast+channel:manage:polls+channel:manage:predictions+channel:read:polls+channel:read:predictions+channel:read:vips+channel:manage:vips&force_verify=true)**, это может занять до минуты.