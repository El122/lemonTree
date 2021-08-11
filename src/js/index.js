//Данные для дерева
const data = [
  {
    id: 1,
    name: "Новая папка",
    children: [
      {
        id: 2,
        name: "Новая папка 2",
        children: [
          {
            id: 3,
            name: "Файл 1",
            children: [
              {
                id: 2,
                name: "Новая папка 2",
                children: [
                  { id: 3, name: "Файл 1" },
                  { id: 4, name: "Файл 2" },
                ],
              },
            ],
          },
          { id: 4, name: "Файл 2" },
        ],
      },
    ],
  },
  { id: 5, name: "Новая папка" },
  {
    id: 1,
    name: "Новая папка",
    children: [
      {
        id: 2,
        name: "Новая папка 2",
        children: [
          {
            id: 3,
            name: "Файл 1",
          },
          { id: 4, name: "Файл 2" },
        ],
      },
    ],
  },
];

// Опции для настройки дерева
const options = {
  data,
};

new LemonTree(document.getElementById("lemon-tree"), options);
