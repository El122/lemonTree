//Данные для дерева
const data = [
  {
    lemonId: 1,
    name: "Новая папка",
    id: "firstId",
    class: ["class1", "class2"],
    icon: "BUP",
    type: "folder",
    children: [
      {
        lemonId: 2,
        name: "Новая папка 2",
        type: "folder",
        children: [
          {
            lemonId: 3,
            name: "Файл 1",
            type: "file",
          },
          { lemonId: 4, name: "Файл 2", type: "file" },
        ],
      },
    ],
  },
  { lemonId: 5, name: "Новая папка", children: [] },
  {
    lemonId: 1,
    name: "Новая папка",
    type: "folder",
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
  actions: {
    click: () => console.log("Bil click"),
    rightClick: () => console.log("Tut can bit context menu"),
    hover: () => console.log("Ne znau zachem, but hover")
  },
  data,
};

const tree = new LemonTree(document.getElementById("lemon-tree"), options);
console.log(tree);