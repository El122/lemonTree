//Данные для дерева
const data = [
  {
    lemonId: 1,
    name: "Новая папка",
    id: "firstId",
    class: ["class1", "class2"],
    children: [
      {
        lemonId: 2,
        name: "Новая папка 2",
        children: [
          {
            lemonId: 3,
            name: "Файл 1",
            children: [
              {
                lemonId: 2,
                name: "Новая папка 2",
                children: [
                  { lemonId: 3, name: "Файл 1" },
                  { lemonId: 4, name: "Файл 2" },
                ],
              },
            ],
          },
          { lemonId: 4, name: "Файл 2" },
        ],
      },
    ],
  },
  { lemonId: 5, name: "Новая папка" },
  {
    lemonId: 1,
    name: "Новая папка",
    children: [
      {
        lemonId: 2,
        name: "Новая папка 2",
        children: [
          {
            lemonId: 3,
            name: "Файл 1",
          },
          { lemonId: 4, name: "Файл 2" },
        ],
      },
    ],
  },
];

// Опции для настройки дерева
const options = {
  closed: true,
  data,
};

const tree = new LemonTree(document.getElementById("lemon-tree"), options);
console.log(tree);