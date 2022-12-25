---
id: limits
title: Ограничения
description: Ограничения
slug: /limits
custom_edit_url: null
---

## Общие ограничения

Существуют **[общие ограничения для ботов Twitch](https://dev.twitch.tv/docs/irc#:~:text=The%20bot%20is%20limited%20to,messages%20per%2030%20second%20limit)**, а именно 100 действий в чате в течение 30 секунд. Также, в боте есть собственное ограничение в 60 действий на один канал. Из-за этого бот иногда не сможет отвечать на команды, в таком случае просто немного подождите.

## Другие ограничения

- 50 [банвордов](features/banwords.md)
- 40 кастомных [команд](features/links.md)
- 5 [элиасов](features/links#элиасы) на команду
- 5 активных [таймеров](features/timers.md)
- Спам [командой](features/links.md) до 15 сообщений с кд в 3 секунды
- [!mb](features/massban.md#бан-по-фразе) и [!m](features/massban.md#мут-по-фразе) захватывают до 50 старых сообщений
- 20 [элиасов категорий](features/streaminfo.md#добавить-элиас)
- 20 [отложенных анвипов](features/vips.md#отложенный-анвип)