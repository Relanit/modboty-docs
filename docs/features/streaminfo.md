---
sidebar_position: 9
---

# Настройки стрима

Изменение названия и категории стрима

Для работы команды требуется **[авторизация](https://relanit.github.io/modboty-docs/docs/auth)**

**[Исходный код](https://github.com/Relanit/ModBoty/blob/master/commands/stream_info.py)**

## Изменение заголовка
`!t title`
- `title` - заголовок стрима (до 140 символов)

## Изменение категории
`!g game`
- `game` - название категории

### Добавить элиас
`!addg alias game`
- `alias` - элиас категории
- `game` - название категории


Пример:
```
Модератор: !addg j just chatting
Модератор: !j
ModBoty: Установлена категория Just Chatting 
```

### Удалить элиас
`!delg alias`
- `alias` - элиас категории

### Просмотр элиасов
`!games`

### Информация об элиасах
`!help name`
- `name` - название или элиас категории