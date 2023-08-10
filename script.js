const array = [
  8,
  "55",
  [
    2,
    "Hello world",
    {
      a: 2,
      b: 5,
    },
    false,
  ],

  {
    arr: [true, 1, NaN, new Array(2, 33)],
    test: null,
    obj: { d: "Moha", last: [2, false, undefined] },
  },
];

const [
  ,
  ,
  [, , { v1 }],
  ,
  {
    arr: [, , , [, v2]],
  },
  ,
  {
    obj: {
      last: [, v3],
    },
  },
] = array;
console.log(b);
