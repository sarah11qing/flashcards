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
      text: "What is Boyer-Moore majority vote algorithm?",
      img: "",
    },
    back: {
      text: `The Boyer-Moore majority vote algorithm is an algorithm for finding the majority of a sequence of elements using linear time and constant space.`,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Boyer-Moore_MJRTY.svg/1920px-Boyer-Moore_MJRTY.svg.png",
    },
    level: "hard",
  },
  {
    id: 3,
    front: {
      text: "What is Delayed Calculation?",
      img: "",
    },
    back: {
      text: "We can use delayed calculation to defer an operation until it is actually needed. An example is Design a Stack With Increment Operation.",
      img: "",
    },
    level: "hard",
  },
  {
    id: 4,
    front: {
      text: "What's the use of mono stack?",
      img: "",
    },
    back: {
      text: "A monotonic stack is a data structure that can be used to solve a variety of problems involving finding the next greater element, next smaller element, or similar problems that require identifying the nearest element with some specific property. A monotonic stack is a stack that either maintains a non-decreasing or a non-increasing order of its elements.",
      img: "https://pbs.twimg.com/media/FCEzSnnUYAIt42h?format=png&name=900x900",
    },
    level: "medium",
  },
  {
    id: 5,
    front: {
      text: "What is Greedy Algorithms?",
      img: "",
    },
    back: {
      text: "Greedy algorithms are a class of algorithms that make locally optimal choices at each step with the hope of finding a global optimum. In other words, at each step, the greedy algorithm chooses the option that seems best at that moment, without considering the future consequences or the overall optimal solution.",
      img: "",
    },
    level: "easy",
  },
];
