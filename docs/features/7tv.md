---
sidebar_position: 5
custom_edit_url: null
---

# 7TV

Редактирование 7TV смайлов и управление редакторами

:::note Примечание
Для работы команды боту нужна редакторка 7TV с правами редактировать смайлы и наборы, управления редакторами
:::

**[Исходный код](https://github.com/Relanit/ModBoty/blob/master/ModBoty/cogs/7tv.py)**


## Изменение смайлов

### Добавление смайла
`!7add name values`
- `name` - название смайла
- `values` - дополнительные параметры, возможны следующие варианты:

#### Добавление с тегами

    !7add ok #christmas #newyear


#### Добавление с точным совпадением названия через ключевое слово `exact`

    !7add pepeMelt exact
    !7add ok #christmas #newyear exact


#### Добавление с элиасом через ключевое слово `as элиас`

    !7add PagMan as pag
 

#### Добавление с другого канала через ключевое слово `from название канала`

    !7add dinkDonk from lagoda1337 as dink
    !7add dinkDonk ok pag HUH from lagoda1337


#### Добавление в набор с указанным названием через ключевое слово `to название набора`

    !7add ok #christmas #newyear to new year
    !7add ok #halloween to halloween
    !7add dinkDonk ok pag HUH from lagoda1337 to new year


### Удаление смайлов
`!7del names`
- `names` - названия смайлов

```
!7del pon nepon MEGALUL KNIFEDROP
```

### Элиас смайла
`!7alias name alias`
- `name` - текущее название смайла
- `alias` - будущий элиас смайла

Пример:
```
!7alias PagMan pag
```

## Управление редакторами

### Добавить редактора
`!7editor login`
- `login` - логин пользователя

### Удалить редактора
`!7dele login`
- `login` - логин редактора