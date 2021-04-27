const queryString = [
  {
    language: [
      "JavaScript",
      "Python",
      "Java",
      "TypeScript",
      "C#",
      "PhP",
      "C++",
      "C",
      "Shell",
      "Ruby",
      "Visual Basic .NET",
      "Objective-C",
      "SQL",
      "Ruby",
      "MATLAB",
      "Groovy",
      "Pascal",
      "Assembly",
      "Visual Basic",
      "Go",
      "Swift",
      "Perl",
      "R",
    ],
  },
  {
    size: ["<5000", "50000..1000000", ">=1000000"],
  },
  {
    created: [
      "2018-01-01..2018-12-31",
      "2019-01-01..2019-12-31",
      "2020-01-01..2020-12-31",
    ],
  },
  {
    stars: ["<=10", "10..100", ">=100"],
  },
];

const initialData = {
  name: "initialData",
  children: [
    {
      name: "JavaScript",
      longname: "language JavaScript",
      children: [
        {
          name: "<5000",
          longname: "size <5000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1666220,
                },
                {
                  name: "10..100",
                  size: 18797,
                },
                {
                  name: ">=100",
                  size: 2788,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 2024393,
                },
                {
                  name: "10..100",
                  size: 13152,
                },
                {
                  name: ">=100",
                  size: 1637,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 3465978,
                },
                {
                  name: "10..100",
                  size: 10455,
                },
                {
                  name: ">=100",
                  size: 1053,
                },
              ],
            },
          ],
        },
        {
          name: "50000..1000000",
          longname: "size 50000..1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 49196,
                },
                {
                  name: "10..100",
                  size: 977,
                },
                {
                  name: ">=100",
                  size: 290,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 50841,
                },
                {
                  name: "10..100",
                  size: 873,
                },
                {
                  name: ">=100",
                  size: 240,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 56792,
                },
                {
                  name: "10..100",
                  size: 642,
                },
                {
                  name: ">=100",
                  size: 137,
                },
              ],
            },
          ],
        },
        {
          name: ">=1000000",
          longname: "size >=1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 464,
                },
                {
                  name: "10..100",
                  size: 21,
                },
                {
                  name: ">=100",
                  size: 11,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 493,
                },
                {
                  name: "10..100",
                  size: 22,
                },
                {
                  name: ">=100",
                  size: 5,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 673,
                },
                {
                  name: "10..100",
                  size: 18,
                },
                {
                  name: ">=100",
                  size: 8,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Python",
      longname: "language Python",
      children: [
        {
          name: "<5000",
          longname: "size <5000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 894883,
                },
                {
                  name: "10..100",
                  size: 18351,
                },
                {
                  name: ">=100",
                  size: 3143,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1138683,
                },
                {
                  name: "10..100",
                  size: 16824,
                },
                {
                  name: ">=100",
                  size: 2718,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1742143,
                },
                {
                  name: "10..100",
                  size: 13998,
                },
                {
                  name: ">=100",
                  size: 1770,
                },
              ],
            },
          ],
        },
        {
          name: "50000..1000000",
          longname: "size 50000..1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 33683,
                },
                {
                  name: "10..100",
                  size: 1980,
                },
                {
                  name: ">=100",
                  size: 632,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 41330,
                },
                {
                  name: "10..100",
                  size: 2056,
                },
                {
                  name: ">=100",
                  size: 537,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 44607,
                },
                {
                  name: "10..100",
                  size: 1691,
                },
                {
                  name: ">=100",
                  size: 350,
                },
              ],
            },
          ],
        },
        {
          name: ">=1000000",
          longname: "size >=1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 839,
                },
                {
                  name: "10..100",
                  size: 57,
                },
                {
                  name: ">=100",
                  size: 15,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1186,
                },
                {
                  name: "10..100",
                  size: 59,
                },
                {
                  name: ">=100",
                  size: 12,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1414,
                },
                {
                  name: "10..100",
                  size: 60,
                },
                {
                  name: ">=100",
                  size: 16,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Java",
      longname: "language Java",
      children: [
        {
          name: "<5000",
          longname: "size <5000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1393442,
                },
                {
                  name: "10..100",
                  size: 7390,
                },
                {
                  name: ">=100",
                  size: 1078,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1570123,
                },
                {
                  name: "10..100",
                  size: 5211,
                },
                {
                  name: ">=100",
                  size: 633,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1860645,
                },
                {
                  name: "10..100",
                  size: 3148,
                },
                {
                  name: ">=100",
                  size: 325,
                },
              ],
            },
          ],
        },
        {
          name: "50000..1000000",
          longname: "size 50000..1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 32567,
                },
                {
                  name: "10..100",
                  size: 629,
                },
                {
                  name: ">=100",
                  size: 232,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 31280,
                },
                {
                  name: "10..100",
                  size: 506,
                },
                {
                  name: ">=100",
                  size: 145,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 24270,
                },
                {
                  name: "10..100",
                  size: 318,
                },
                {
                  name: ">=100",
                  size: 61,
                },
              ],
            },
          ],
        },
        {
          name: ">=1000000",
          longname: "size >=1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 357,
                },
                {
                  name: "10..100",
                  size: 19,
                },
                {
                  name: ">=100",
                  size: 6,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 430,
                },
                {
                  name: "10..100",
                  size: 9,
                },
                {
                  name: ">=100",
                  size: 1,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 368,
                },
                {
                  name: "10..100",
                  size: 7,
                },
                {
                  name: ">=100",
                  size: 2,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "TypeScript",
      longname: "language TypeScript",
      children: [
        {
          name: "<5000",
          longname: "size <5000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 262069,
                },
                {
                  name: "10..100",
                  size: 4578,
                },
                {
                  name: ">=100",
                  size: 898,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 359758,
                },
                {
                  name: "10..100",
                  size: 5441,
                },
                {
                  name: ">=100",
                  size: 809,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 618183,
                },
                {
                  name: "10..100",
                  size: 5622,
                },
                {
                  name: ">=100",
                  size: 698,
                },
              ],
            },
          ],
        },
        {
          name: "50000..1000000",
          longname: "size 50000..1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 4259,
                },
                {
                  name: "10..100",
                  size: 161,
                },
                {
                  name: ">=100",
                  size: 121,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 6202,
                },
                {
                  name: "10..100",
                  size: 220,
                },
                {
                  name: ">=100",
                  size: 76,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 7764,
                },
                {
                  name: "10..100",
                  size: 228,
                },
                {
                  name: ">=100",
                  size: 81,
                },
              ],
            },
          ],
        },
        {
          name: ">=1000000",
          longname: "size >=1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 12,
                },
                {
                  name: "10..100",
                  size: 2,
                },
                {
                  name: ">=100",
                  size: 5,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 27,
                },
                {
                  name: "10..100",
                  size: 3,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 44,
                },
                {
                  name: "10..100",
                  size: 1,
                },
                {
                  name: ">=100",
                  size: 1,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "C#",
      longname: "language C#",
      children: [
        {
          name: "<5000",
          longname: "size <5000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 335530,
                },
                {
                  name: "10..100",
                  size: 4197,
                },
                {
                  name: ">=100",
                  size: 542,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 396716,
                },
                {
                  name: "10..100",
                  size: 3680,
                },
                {
                  name: ">=100",
                  size: 426,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 574148,
                },
                {
                  name: "10..100",
                  size: 2652,
                },
                {
                  name: ">=100",
                  size: 275,
                },
              ],
            },
          ],
        },
        {
          name: "50000..1000000",
          longname: "size 50000..1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 35061,
                },
                {
                  name: "10..100",
                  size: 520,
                },
                {
                  name: ">=100",
                  size: 152,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 37484,
                },
                {
                  name: "10..100",
                  size: 493,
                },
                {
                  name: ">=100",
                  size: 112,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 36553,
                },
                {
                  name: "10..100",
                  size: 322,
                },
                {
                  name: ">=100",
                  size: 84,
                },
              ],
            },
          ],
        },
        {
          name: ">=1000000",
          longname: "size >=1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1477,
                },
                {
                  name: "10..100",
                  size: 18,
                },
                {
                  name: ">=100",
                  size: 9,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1916,
                },
                {
                  name: "10..100",
                  size: 20,
                },
                {
                  name: ">=100",
                  size: 6,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 2214,
                },
                {
                  name: "10..100",
                  size: 17,
                },
                {
                  name: ">=100",
                  size: 3,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "PhP",
      longname: "language PhP",
      children: [
        {
          name: "<5000",
          longname: "size <5000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 344576,
                },
                {
                  name: "10..100",
                  size: 4100,
                },
                {
                  name: ">=100",
                  size: 468,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 376382,
                },
                {
                  name: "10..100",
                  size: 2978,
                },
                {
                  name: ">=100",
                  size: 369,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 489726,
                },
                {
                  name: "10..100",
                  size: 2139,
                },
                {
                  name: ">=100",
                  size: 226,
                },
              ],
            },
          ],
        },
        {
          name: "50000..1000000",
          longname: "size 50000..1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 13419,
                },
                {
                  name: "10..100",
                  size: 83,
                },
                {
                  name: ">=100",
                  size: 43,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 11766,
                },
                {
                  name: "10..100",
                  size: 88,
                },
                {
                  name: ">=100",
                  size: 15,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 10180,
                },
                {
                  name: "10..100",
                  size: 49,
                },
                {
                  name: ">=100",
                  size: 11,
                },
              ],
            },
          ],
        },
        {
          name: ">=1000000",
          longname: "size >=1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 168,
                },
                {
                  name: "10..100",
                  size: 1,
                },
                {
                  name: ">=100",
                  size: 2,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 149,
                },
                {
                  name: "10..100",
                  size: 1,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 119,
                },
                {
                  name: "10..100",
                  size: 0,
                },
                {
                  name: ">=100",
                  size: 1,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "C++",
      longname: "language C++",
      children: [
        {
          name: "<5000",
          longname: "size <5000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 324841,
                },
                {
                  name: "10..100",
                  size: 4813,
                },
                {
                  name: ">=100",
                  size: 654,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 368787,
                },
                {
                  name: "10..100",
                  size: 3934,
                },
                {
                  name: ">=100",
                  size: 479,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 473703,
                },
                {
                  name: "10..100",
                  size: 3060,
                },
                {
                  name: ">=100",
                  size: 346,
                },
              ],
            },
          ],
        },
        {
          name: "50000..1000000",
          longname: "size 50000..1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 21364,
                },
                {
                  name: "10..100",
                  size: 848,
                },
                {
                  name: ">=100",
                  size: 247,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 22181,
                },
                {
                  name: "10..100",
                  size: 806,
                },
                {
                  name: ">=100",
                  size: 202,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 19839,
                },
                {
                  name: "10..100",
                  size: 622,
                },
                {
                  name: ">=100",
                  size: 141,
                },
              ],
            },
          ],
        },
        {
          name: ">=1000000",
          longname: "size >=1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 567,
                },
                {
                  name: "10..100",
                  size: 25,
                },
                {
                  name: ">=100",
                  size: 12,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 720,
                },
                {
                  name: "10..100",
                  size: 29,
                },
                {
                  name: ">=100",
                  size: 11,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 857,
                },
                {
                  name: "10..100",
                  size: 18,
                },
                {
                  name: ">=100",
                  size: 7,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "C",
      longname: "language C",
      children: [
        {
          name: "<5000",
          longname: "size <5000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 199761,
                },
                {
                  name: "10..100",
                  size: 2968,
                },
                {
                  name: ">=100",
                  size: 463,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 225248,
                },
                {
                  name: "10..100",
                  size: 2365,
                },
                {
                  name: ">=100",
                  size: 318,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 278687,
                },
                {
                  name: "10..100",
                  size: 1908,
                },
                {
                  name: ">=100",
                  size: 241,
                },
              ],
            },
          ],
        },
        {
          name: "50000..1000000",
          longname: "size 50000..1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 12920,
                },
                {
                  name: "10..100",
                  size: 500,
                },
                {
                  name: ">=100",
                  size: 119,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 12260,
                },
                {
                  name: "10..100",
                  size: 458,
                },
                {
                  name: ">=100",
                  size: 113,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 9946,
                },
                {
                  name: "10..100",
                  size: 321,
                },
                {
                  name: ">=100",
                  size: 66,
                },
              ],
            },
          ],
        },
        {
          name: ">=1000000",
          longname: "size >=1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1066,
                },
                {
                  name: "10..100",
                  size: 78,
                },
                {
                  name: ">=100",
                  size: 7,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1311,
                },
                {
                  name: "10..100",
                  size: 90,
                },
                {
                  name: ">=100",
                  size: 8,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1686,
                },
                {
                  name: "10..100",
                  size: 62,
                },
                {
                  name: ">=100",
                  size: 3,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Shell",
      longname: "language Shell",
      children: [
        {
          name: "<5000",
          longname: "size <5000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 160920,
                },
                {
                  name: "10..100",
                  size: 3268,
                },
                {
                  name: ">=100",
                  size: 479,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 164364,
                },
                {
                  name: "10..100",
                  size: 2866,
                },
                {
                  name: ">=100",
                  size: 398,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 214032,
                },
                {
                  name: "10..100",
                  size: 2340,
                },
                {
                  name: ">=100",
                  size: 271,
                },
              ],
            },
          ],
        },
        {
          name: "50000..1000000",
          longname: "size 50000..1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 3519,
                },
                {
                  name: "10..100",
                  size: 207,
                },
                {
                  name: ">=100",
                  size: 54,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 3721,
                },
                {
                  name: "10..100",
                  size: 212,
                },
                {
                  name: ">=100",
                  size: 53,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 3823,
                },
                {
                  name: "10..100",
                  size: 168,
                },
                {
                  name: ">=100",
                  size: 36,
                },
              ],
            },
          ],
        },
        {
          name: ">=1000000",
          longname: "size >=1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 209,
                },
                {
                  name: "10..100",
                  size: 11,
                },
                {
                  name: ">=100",
                  size: 3,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 270,
                },
                {
                  name: "10..100",
                  size: 19,
                },
                {
                  name: ">=100",
                  size: 3,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 274,
                },
                {
                  name: "10..100",
                  size: 15,
                },
                {
                  name: ">=100",
                  size: 6,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Visual Basic .NET",
      longname: "language Visual Basic .NET",
      children: [
        {
          name: "<5000",
          longname: "size <5000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1239,
                },
                {
                  name: "10..100",
                  size: 15,
                },
                {
                  name: ">=100",
                  size: 1,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1377,
                },
                {
                  name: "10..100",
                  size: 15,
                },
                {
                  name: ">=100",
                  size: 3,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1971,
                },
                {
                  name: "10..100",
                  size: 9,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
          ],
        },
        {
          name: "50000..1000000",
          longname: "size 50000..1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 32,
                },
                {
                  name: "10..100",
                  size: 0,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 27,
                },
                {
                  name: "10..100",
                  size: 1,
                },
                {
                  name: ">=100",
                  size: 1,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 42,
                },
                {
                  name: "10..100",
                  size: 1,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
          ],
        },
        {
          name: ">=1000000",
          longname: "size >=1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 0,
                },
                {
                  name: "10..100",
                  size: 0,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 0,
                },
                {
                  name: "10..100",
                  size: 0,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 0,
                },
                {
                  name: "10..100",
                  size: 0,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Objective-C",
      longname: "language Objective-C",
      children: [
        {
          name: "<5000",
          longname: "size <5000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 43132,
                },
                {
                  name: "10..100",
                  size: 1124,
                },
                {
                  name: ">=100",
                  size: 135,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 33041,
                },
                {
                  name: "10..100",
                  size: 538,
                },
                {
                  name: ">=100",
                  size: 72,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 21043,
                },
                {
                  name: "10..100",
                  size: 216,
                },
                {
                  name: ">=100",
                  size: 35,
                },
              ],
            },
          ],
        },
        {
          name: "50000..1000000",
          longname: "size 50000..1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 2922,
                },
                {
                  name: "10..100",
                  size: 97,
                },
                {
                  name: ">=100",
                  size: 29,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 2148,
                },
                {
                  name: "10..100",
                  size: 64,
                },
                {
                  name: ">=100",
                  size: 19,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1029,
                },
                {
                  name: "10..100",
                  size: 28,
                },
                {
                  name: ">=100",
                  size: 4,
                },
              ],
            },
          ],
        },
        {
          name: ">=1000000",
          longname: "size >=1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 13,
                },
                {
                  name: "10..100",
                  size: 2,
                },
                {
                  name: ">=100",
                  size: 1,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 16,
                },
                {
                  name: "10..100",
                  size: 1,
                },
                {
                  name: ">=100",
                  size: 1,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 4,
                },
                {
                  name: "10..100",
                  size: 0,
                },
                {
                  name: ">=100",
                  size: 1,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "SQL",
      longname: "language SQL",
      children: [
        {
          name: "<5000",
          longname: "size <5000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 34,
                },
                {
                  name: "10..100",
                  size: 1,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 47,
                },
                {
                  name: "10..100",
                  size: 0,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 104,
                },
                {
                  name: "10..100",
                  size: 1,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
          ],
        },
        {
          name: "50000..1000000",
          longname: "size 50000..1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1,
                },
                {
                  name: "10..100",
                  size: 0,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 0,
                },
                {
                  name: "10..100",
                  size: 0,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 2,
                },
                {
                  name: "10..100",
                  size: 0,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
          ],
        },
        {
          name: ">=1000000",
          longname: "size >=1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 0,
                },
                {
                  name: "10..100",
                  size: 0,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 0,
                },
                {
                  name: "10..100",
                  size: 0,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 0,
                },
                {
                  name: "10..100",
                  size: 0,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Ruby",
      longname: "language Ruby",
      children: [
        {
          name: "<5000",
          longname: "size <5000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 212716,
                },
                {
                  name: "10..100",
                  size: 1115,
                },
                {
                  name: ">=100",
                  size: 150,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 237577,
                },
                {
                  name: "10..100",
                  size: 817,
                },
                {
                  name: ">=100",
                  size: 110,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 582270,
                },
                {
                  name: "10..100",
                  size: 620,
                },
                {
                  name: ">=100",
                  size: 68,
                },
              ],
            },
          ],
        },
        {
          name: "50000..1000000",
          longname: "size 50000..1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1820,
                },
                {
                  name: "10..100",
                  size: 24,
                },
                {
                  name: ">=100",
                  size: 7,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1657,
                },
                {
                  name: "10..100",
                  size: 35,
                },
                {
                  name: ">=100",
                  size: 10,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1651,
                },
                {
                  name: "10..100",
                  size: 18,
                },
                {
                  name: ">=100",
                  size: 1,
                },
              ],
            },
          ],
        },
        {
          name: ">=1000000",
          longname: "size >=1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 28,
                },
                {
                  name: "10..100",
                  size: 1,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 14,
                },
                {
                  name: "10..100",
                  size: 1,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 15,
                },
                {
                  name: "10..100",
                  size: 2,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "MATLAB",
      longname: "language MATLAB",
      children: [
        {
          name: "<5000",
          longname: "size <5000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 29693,
                },
                {
                  name: "10..100",
                  size: 465,
                },
                {
                  name: ">=100",
                  size: 9,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 34141,
                },
                {
                  name: "10..100",
                  size: 290,
                },
                {
                  name: ">=100",
                  size: 3,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 40901,
                },
                {
                  name: "10..100",
                  size: 121,
                },
                {
                  name: ">=100",
                  size: 3,
                },
              ],
            },
          ],
        },
        {
          name: "50000..1000000",
          longname: "size 50000..1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 3334,
                },
                {
                  name: "10..100",
                  size: 137,
                },
                {
                  name: ">=100",
                  size: 18,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 3103,
                },
                {
                  name: "10..100",
                  size: 121,
                },
                {
                  name: ">=100",
                  size: 5,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 2668,
                },
                {
                  name: "10..100",
                  size: 46,
                },
                {
                  name: ">=100",
                  size: 4,
                },
              ],
            },
          ],
        },
        {
          name: ">=1000000",
          longname: "size >=1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 104,
                },
                {
                  name: "10..100",
                  size: 8,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 144,
                },
                {
                  name: "10..100",
                  size: 3,
                },
                {
                  name: ">=100",
                  size: 1,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 126,
                },
                {
                  name: "10..100",
                  size: 3,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Groovy",
      longname: "language Groovy",
      children: [
        {
          name: "<5000",
          longname: "size <5000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 8121,
                },
                {
                  name: "10..100",
                  size: 152,
                },
                {
                  name: ">=100",
                  size: 15,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 8360,
                },
                {
                  name: "10..100",
                  size: 96,
                },
                {
                  name: ">=100",
                  size: 4,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 9011,
                },
                {
                  name: "10..100",
                  size: 40,
                },
                {
                  name: ">=100",
                  size: 1,
                },
              ],
            },
          ],
        },
        {
          name: "50000..1000000",
          longname: "size 50000..1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 108,
                },
                {
                  name: "10..100",
                  size: 7,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 95,
                },
                {
                  name: "10..100",
                  size: 2,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 65,
                },
                {
                  name: "10..100",
                  size: 1,
                },
                {
                  name: ">=100",
                  size: 1,
                },
              ],
            },
          ],
        },
        {
          name: ">=1000000",
          longname: "size >=1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 2,
                },
                {
                  name: "10..100",
                  size: 0,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1,
                },
                {
                  name: "10..100",
                  size: 1,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1,
                },
                {
                  name: "10..100",
                  size: 0,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Pascal",
      longname: "language Pascal",
      children: [
        {
          name: "<5000",
          longname: "size <5000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 4249,
                },
                {
                  name: "10..100",
                  size: 139,
                },
                {
                  name: ">=100",
                  size: 4,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 4648,
                },
                {
                  name: "10..100",
                  size: 112,
                },
                {
                  name: ">=100",
                  size: 9,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 5692,
                },
                {
                  name: "10..100",
                  size: 101,
                },
                {
                  name: ">=100",
                  size: 4,
                },
              ],
            },
          ],
        },
        {
          name: "50000..1000000",
          longname: "size 50000..1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 298,
                },
                {
                  name: "10..100",
                  size: 31,
                },
                {
                  name: ">=100",
                  size: 4,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 254,
                },
                {
                  name: "10..100",
                  size: 22,
                },
                {
                  name: ">=100",
                  size: 2,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 223,
                },
                {
                  name: "10..100",
                  size: 18,
                },
                {
                  name: ">=100",
                  size: 2,
                },
              ],
            },
          ],
        },
        {
          name: ">=1000000",
          longname: "size >=1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 2,
                },
                {
                  name: "10..100",
                  size: 0,
                },
                {
                  name: ">=100",
                  size: 2,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 2,
                },
                {
                  name: "10..100",
                  size: 1,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 7,
                },
                {
                  name: "10..100",
                  size: 2,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Assembly",
      longname: "language Assembly",
      children: [
        {
          name: "<5000",
          longname: "size <5000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 11137,
                },
                {
                  name: "10..100",
                  size: 197,
                },
                {
                  name: ">=100",
                  size: 16,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 13437,
                },
                {
                  name: "10..100",
                  size: 182,
                },
                {
                  name: ">=100",
                  size: 22,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 16837,
                },
                {
                  name: "10..100",
                  size: 132,
                },
                {
                  name: ">=100",
                  size: 16,
                },
              ],
            },
          ],
        },
        {
          name: "50000..1000000",
          longname: "size 50000..1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 342,
                },
                {
                  name: "10..100",
                  size: 17,
                },
                {
                  name: ">=100",
                  size: 3,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 597,
                },
                {
                  name: "10..100",
                  size: 26,
                },
                {
                  name: ">=100",
                  size: 2,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 554,
                },
                {
                  name: "10..100",
                  size: 16,
                },
                {
                  name: ">=100",
                  size: 6,
                },
              ],
            },
          ],
        },
        {
          name: ">=1000000",
          longname: "size >=1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 2,
                },
                {
                  name: "10..100",
                  size: 0,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 4,
                },
                {
                  name: "10..100",
                  size: 2,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 4,
                },
                {
                  name: "10..100",
                  size: 1,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Visual Basic",
      longname: "language Visual Basic",
      children: [
        {
          name: "<5000",
          longname: "size <5000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 94640,
                },
                {
                  name: "10..100",
                  size: 651,
                },
                {
                  name: ">=100",
                  size: 70,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 116011,
                },
                {
                  name: "10..100",
                  size: 500,
                },
                {
                  name: ">=100",
                  size: 61,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 164130,
                },
                {
                  name: "10..100",
                  size: 425,
                },
                {
                  name: ">=100",
                  size: 37,
                },
              ],
            },
          ],
        },
        {
          name: "50000..1000000",
          longname: "size 50000..1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1251,
                },
                {
                  name: "10..100",
                  size: 34,
                },
                {
                  name: ">=100",
                  size: 8,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1407,
                },
                {
                  name: "10..100",
                  size: 43,
                },
                {
                  name: ">=100",
                  size: 6,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1565,
                },
                {
                  name: "10..100",
                  size: 34,
                },
                {
                  name: ">=100",
                  size: 8,
                },
              ],
            },
          ],
        },
        {
          name: ">=1000000",
          longname: "size >=1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 13,
                },
                {
                  name: "10..100",
                  size: 2,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 15,
                },
                {
                  name: "10..100",
                  size: 0,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 29,
                },
                {
                  name: "10..100",
                  size: 1,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Go",
      longname: "language Go",
      children: [
        {
          name: "<5000",
          longname: "size <5000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 105809,
                },
                {
                  name: "10..100",
                  size: 4559,
                },
                {
                  name: ">=100",
                  size: 909,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 131864,
                },
                {
                  name: "10..100",
                  size: 4049,
                },
                {
                  name: ">=100",
                  size: 714,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 178758,
                },
                {
                  name: "10..100",
                  size: 3578,
                },
                {
                  name: ">=100",
                  size: 589,
                },
              ],
            },
          ],
        },
        {
          name: "50000..1000000",
          longname: "size 50000..1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1269,
                },
                {
                  name: "10..100",
                  size: 196,
                },
                {
                  name: ">=100",
                  size: 151,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1832,
                },
                {
                  name: "10..100",
                  size: 173,
                },
                {
                  name: ">=100",
                  size: 77,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 1754,
                },
                {
                  name: "10..100",
                  size: 130,
                },
                {
                  name: ">=100",
                  size: 48,
                },
              ],
            },
          ],
        },
        {
          name: ">=1000000",
          longname: "size >=1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 9,
                },
                {
                  name: "10..100",
                  size: 1,
                },
                {
                  name: ">=100",
                  size: 4,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 7,
                },
                {
                  name: "10..100",
                  size: 1,
                },
                {
                  name: ">=100",
                  size: 1,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 13,
                },
                {
                  name: "10..100",
                  size: 0,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Swift",
      longname: "language Swift",
      children: [
        {
          name: "<5000",
          longname: "size <5000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 120902,
                },
                {
                  name: "10..100",
                  size: 1724,
                },
                {
                  name: ">=100",
                  size: 323,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 130736,
                },
                {
                  name: "10..100",
                  size: 1504,
                },
                {
                  name: ">=100",
                  size: 291,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 149016,
                },
                {
                  name: "10..100",
                  size: 1254,
                },
                {
                  name: ">=100",
                  size: 205,
                },
              ],
            },
          ],
        },
        {
          name: "50000..1000000",
          longname: "size 50000..1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 4918,
                },
                {
                  name: "10..100",
                  size: 129,
                },
                {
                  name: ">=100",
                  size: 60,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 4292,
                },
                {
                  name: "10..100",
                  size: 124,
                },
                {
                  name: ">=100",
                  size: 46,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 3478,
                },
                {
                  name: "10..100",
                  size: 89,
                },
                {
                  name: ">=100",
                  size: 28,
                },
              ],
            },
          ],
        },
        {
          name: ">=1000000",
          longname: "size >=1000000",
          children: [
            {
              name: "2018-01-01..2018-12-31",
              longname: "created 2018-01-01..2018-12-31",
              children: [
                {
                  name: "<=10",
                  size: 11,
                },
                {
                  name: "10..100",
                  size: 2,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
            {
              name: "2019-01-01..2019-12-31",
              longname: "created 2019-01-01..2019-12-31",
              children: [
                {
                  name: "<=10",
                  size: 13,
                },
                {
                  name: "10..100",
                  size: 0,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
            {
              name: "2020-01-01..2020-12-31",
              longname: "created 2020-01-01..2020-12-31",
              children: [
                {
                  name: "<=10",
                  size: 13,
                },
                {
                  name: "10..100",
                  size: 1,
                },
                {
                  name: ">=100",
                  size: 0,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
export default [queryString, initialData];
