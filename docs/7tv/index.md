---
id: index
slug: /7TV
custom_edit_url: null
---

# 7TV

Список всех 7TV команд:

import DocCardList from '@theme/DocCardList';

<DocCardList />

export function CheckboxList({items, color}) {
    const listItems = items.map((item) =>
        <li
            style={{"background": `url("data:image/svg+xml,%3Csvg viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cpath id='svg_9' d='m2.76975,10.04874c0,-4.34703 3.65297,-8 8,-8l39,0c4.34703,0 8,3.65297 8,8l0,39c0,4.34703 -3.65297,8 -8,8l-39,0c-4.34703,0 -8,-3.65297 -8,-8l0,-39z' opacity='undefined' stroke-width='2' stroke='%23${color}' fill='%23${color}'/%3E%3Crect id='svg_10' height='0' width='1.02564' y='50.69488' x='277.56974' stroke-width='2' stroke='%23${color}' fill='%23${color}'/%3E%3Cpath stroke='%231a1a1a' id='svg_11' d='m45.14496,20.13145l-21.3228,22.35033' opacity='undefined' stroke-width='7' fill='none'/%3E%3Cpath transform='rotate(90 20.2569 39.5462)' stroke='%231a1a1a' id='svg_13' d='m25.79551,33.59111l-11.07716,11.91012' opacity='undefined' stroke-width='7' fill='none'/%3E%3C/g%3E%3C/svg%3E") no-repeat left 50%`, "padding-left": "1.4em", "margin-left": "-1.4em", "background-size": "1em"}}
        >
            {item}
        </li>
    );
    return (
        <ul style={{"list-style": "none"}}>{listItems}</ul>
    );
}

<details>
  <summary>Общая информация</summary>
  <ul>
    <li><b>Название:</b> 7add</li>
    <li><b>Элиасы:</b> 7del, 7alias, 7editor, 7set, 7origin</li>
    <li><b>Кулдаун:</b> общий 5 секунд</li>
    <li><a href="https://github.com/Relanit/ModBoty/blob/master/ModBoty/cogs/seven_tv/seven_tv.py"><b>Исходный код</b></a></li>
  </ul>
</details>

:::note Боту необходима редакторка 7TV со следующими разрешениями
<CheckboxList color="fdfdfe" items={['Modify Emotes', 'Use Private Emotes', 'Manage Emote Sets', 'Manage Editors']} />
:::

:::note Команды могут вызывать только редакторы 7TV
:::