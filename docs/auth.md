---
sidebar_position: 2
custom_edit_url: null
---

# Авторизация

Twitch **[требует](https://dev.twitch.tv/docs/authentication#user-access-tokens)** у создателей ботов запрашивать у пользователей прохождение авторизации для получения доступа к большинству функций.

Для прохождения авторизации, перейдите по **[ссылке](https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=xiudfd2nsod7a4kukl5bluhjt5wedo&redirect_uri=https://modboty-auth.onrender.com/api/v1/auth&scope=channel:read:subscriptions+moderation:read+channel:manage:broadcast+channel:manage:polls+channel:manage:predictions+channel:read:polls+channel:read:predictions+channel:read:vips+channel:manage:vips+channel:moderate+moderator:manage:banned_users+moderator:manage:announcements&force_verify=true)**, это может занять до минуты.