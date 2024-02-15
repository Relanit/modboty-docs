---
id: add
slug: add
custom_edit_url: null
sidebar_position: 1
---

# Добавление смайлов

Добавление смайлов на ваш канал.

## Использование
`!7add <название>`

<img src={require('@site/static/examples/7tv/7add.png').default} />

### Добавление с тегами
`!7add <название> <теги через пробел>`
<img src={require('@site/static/examples/7tv/7add-tags.png').default} />

### Добавление по ссылке
`!7add <ссылки через пробел>`
<img src={require('@site/static/examples/7tv/7add-link.png').default} />

### Добавление с элиасом
`!7add <название или ссылка> as <элиас>`
<img src={require('@site/static/examples/7tv/7add-alias.png').default} />

### Добавление с другого канала
`!7add <смайлы через пробел> from <ник>`
<img src={require('@site/static/examples/7tv/7add-from.png').default} />

### Добавление в набор с указанным названием
`!7add <значения> to <название набора>`
<img src={require('@site/static/examples/7tv/7add-to.png').default} />

### Добавление с заменой смайла
Если произойдёт конфликт названий, то новый смайл заменит предыдущий

`!7add <значения> -r`
<img src={require('@site/static/examples/7tv/7add-replace.png').default} />
