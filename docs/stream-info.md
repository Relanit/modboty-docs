---
sidebar_position: 13
custom_edit_url: null
---

# Название и категория стрима

Изменение названия и категории стрима, элиасы категорий.

<details>
  <summary>Общая информация</summary>
  <ul>
    <li><b>Название:</b> t</li>
    <li><b>Элиасы:</b> g, addg, delg, games</li>
    <li><b>Кулдаун:</b> общий 3 секунды</li>
  </ul>
</details>

:::note
Для работы команды требуется **[авторизация](./auth.md)**
:::

export function SynonymsList({items}) {
    const listItems = items.map((item, index) =>
      <li key={index}>
        {item}
      </li>
    );
    return (
        <ul style={{"height": "0px", "opacity": "0"}}>{listItems}</ul>
    );
};

## Изменение заголовка
`!t <заголовок>`
<img src={require('@site/static/examples/stream-info/t.png').default} alt="title"/>

## Изменение категории
`!g <название категории>`
<img src={require('@site/static/examples/stream-info/g.png').default} alt="game just chatting"/>

### Добавить элиас категории

`!addg <элиас> <название категории>`
<img src={require('@site/static/examples/stream-info/addg.png').default} />
<SynonymsList items={['Just Chatting']} />


### Удалить элиас
`!del <элиас>`

### Просмотр элиасов
`!games`
<img src={require('@site/static/examples/stream-info/games.png').default} />

### Копирование элиасов с другого канала
Вы можете скопировать элиасы категорий с другого канала, используя следующую команду:

`!copy <элиасы через пробел> from <логин канала>`

Можно указать `games`, тогда скопируются все элиасы
<img src={require('@site/static/examples/stream-info/copy.png').default} />

### Просмотр информации об элиасах
`!help <название или элиас>`
<img src={require('@site/static/examples/stream-info/help.png').default} /> <p></p>

:::info
Также с помощью !help можно узнать информацию о любых командах бота и **[кастомных командах](commands/index.md)**
:::

## Автосмена категории
:::info
На данный момент, команда работает в бете на ограниченном количестве каналов. В будущем станет платной функцией
:::

Для начала работы, нужно установить steam id стримера:

`!steamid <steam id стримера, выглядит примерно так: 76561198995571697>`

Steam id стримера можно узнать **[тут](https://steamdb.info/calculator/)**

После установки steam id, нужно включить автосмену:
`!autog <on или off>`

:::info
Если у стримера в стиме стоит невидимка, автосмена работать не будет
:::