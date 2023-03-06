export const appTitle = "The Ultimate Algorithms Master!";
export const appSubtitle = "How good of do you master algorithms? Test all of your algorithms knowledge here!";

export const cardSet = [
  {
    id: 0,
    front: {
      text: "What is the difference between Memoization and Tabulation in Dynamic Programming?",
      img: "",
    },
    back: {
      text: `
      Memoization is a top-down approach where we cache the results of sub-problems during recursion, while tabulation is a bottom-up approach where we fill up a table or an array with the results of sub-problems in an iterative manner.
      `,
      img: "https://media.geeksforgeeks.org/wp-content/uploads/20220914114911/DynamicProgramming1.jpg",
    },
    level: "easy",
  },
  {
    id: 1,
    front: {
      text: "How to sort a dict in value's descending order?",
      img: "",
    },
    back: {
      text: "Use <h1>sorted_list = sorted(map.items(), key = lambda x: -x[1])</h1>. If you want to sort in key's ascending order in the same time, use `sorted_list = sorted(map.items(), key=lambda x: (-x[1], x[0]))`",
      img: "",
    },
    level: "medium",
  },
  {
    id: 2,
    front: {
      text: "What is Voting algorithm?",
      img: "",
    },
    back: {
      text: "",
      img: "",
    },
    level: "medium",
  },
  {
    id: 0,
    front: {
      text: "What is Delayed Calculation?",
      img: "",
    },
    back: {
      text: "We can use delayed calculation to defer an operation until it is actually needed. An example is Design a Stack With Increment Operation.",
      img: "",
    },
    level: "easy",
  },
  {
    id: 1,
    front: {
      text: "How to sort a dict in value's descending order?",
      img: "",
    },
    back: {
      text: "Use <h1>sorted_list = sorted(map.items(), key = lambda x: -x[1])</h1>. If you want to sort in key's ascending order in the same time, use `sorted_list = sorted(map.items(), key=lambda x: (-x[1], x[0]))`",
      img: "",
    },
    level: "medium",
  },
  {
    id: 2,
    front: {
      text: "What is Voting algorithm?",
      img: "",
    },
    back: {
      text: "",
      img: "",
    },
    level: "medium",
  },
  
];
