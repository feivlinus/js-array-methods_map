console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];

//Task 1
// ['as often as you like.', ...]
const lowerCaseAnswers = cards.map((cards) => {
  return cards.answer.toLowerCase();
});

console.log(lowerCaseAnswers);

//Task 2
// ["How often can I use <header>? - As often as you like.", ...]
const questionsAndAnswersTogether = cards.map((card) => {
  return `${card.question} - ${card.answer}`;
});

console.log(questionsAndAnswersTogether);

//Task 3
// [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]
const questionAndAnswer = cards.map((card) => {
  return { question: card.question, answer: card.answer };
});

console.log(questionAndAnswer);

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };
