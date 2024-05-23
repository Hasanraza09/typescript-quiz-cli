#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
const questions = [
    {
        question: "What is TypeScript?",
        choices: [
            "A programming language",
            "A superset of JavaScript",
            "A version of Java",
            "A style sheet language",
        ],
        correctAnswer: 1,
    },
    {
        question: "Which command is used to compile TypeScript files?",
        choices: ["tsc", "tsrun", "typescript-compile", "node-ts"],
        correctAnswer: 0,
    },
    {
        question: "Which of the following is a correct way to define an interface in TypeScript?",
        choices: [
            "type MyInterface = { }",
            "class MyInterface { }",
            "interface MyInterface { }",
            "module MyInterface { }",
        ],
        correctAnswer: 2,
    },
    {
        question: "How do you specify a variable as an optional in an interface?",
        choices: [
            "By using the `optional` keyword",
            "By using the `?` symbol after the variable name",
            "By using the `opt` prefix",
            "By using the `optional` symbol",
        ],
        correctAnswer: 1,
    },
    {
        question: "Which of the following TypeScript feature allows you to create a blueprint for an object?",
        choices: ["Class", "Interface", "Module", "Namespace"],
        correctAnswer: 1,
    },
    {
        question: "How do you declare a tuple in TypeScript?",
        choices: [
            "let tuple = [string, number];",
            "let tuple: {string, number};",
            "let tuple = {string, number};",
            "let tuple: [string, number];"
        ],
        correctAnswer: 3,
    },
    {
        question: "Which of the following is the correct way to define a union type in TypeScript?",
        choices: [
            "type ID = string | number;",
            "type ID = string || number;",
            "type ID = string && number;",
            "type ID = string & number;",
        ],
        correctAnswer: 0,
    },
    {
        question: "What is the output of the following TypeScript code: `console.log(typeof null);`?",
        choices: ["null", "object", "undefined", "number"],
        correctAnswer: 1,
    },
    {
        question: "How do you install TypeScript globally using npm?",
        choices: [
            "npm install typescript",
            "npm install -g typescript",
            "npm install --global ts",
            "npm get typescript",
        ],
        correctAnswer: 1,
    },
    {
        question: "What is the purpose of the `never` type in TypeScript?",
        choices: [
            "To represent values that will never occur",
            "To represent an absence of value",
            "To represent any type of value",
            "To represent a union of all types",
        ],
        correctAnswer: 0,
    },
];
(function displayText() {
    console.clear();
    console.log(chalk.bold.green(figlet.textSync('TypeScript Quiz')));
})();
async function quiz() {
    let score = 0;
    let incorrectAnswers = [];
    for (const [idx, q] of questions.entries()) {
        const answer = await inquirer.prompt({
            type: "list",
            name: `question${idx}`,
            message: chalk.yellow(q.question),
            choices: q.choices,
        });
        const userAnswer = q.choices.indexOf(answer[`question${idx}`]);
        const correctAnswer = q.choices[q.correctAnswer];
        if (userAnswer == q.correctAnswer) {
            score++;
        }
        else {
            incorrectAnswers.push({ question: q.question, correctAnswer }); // Add the incorrect question to the list
        }
    }
    let message = "";
    switch (score) {
        case 10:
            message = chalk.bold.greenBright("Perfect! 👏👏👏");
            break;
        case 9:
            message = chalk.bold.greenBright("Excellent! 👍👍👍");
            break;
        case 8:
            message = chalk.bold.greenBright("Great! 💪💪💪");
            break;
        case 7:
            message = chalk.bold.greenBright("Good!");
            break;
        case 6:
            message = chalk.bold.greenBright("Not bad!");
            break;
        case 5:
            message = chalk.bold.yellowBright("Good effort!");
            break;
        case 4:
            message = chalk.bold.yellowBright("Keep practicing!");
            break;
        default:
            message = chalk.bold.redBright("You can do better! 😕");
            break;
    }
    console.log(chalk.italic.bold.green(`You scored ${chalk.bold.blueBright(score)} out of ${questions.length}`));
    console.log(message);
    if (incorrectAnswers.length > 0) {
        console.log(chalk.red.bold("Incorrect Answers:"));
        incorrectAnswers.forEach((incorrect, idx) => {
            console.log(chalk.red(`${idx + 1}- ${incorrect.question}`));
            console.log(chalk.green(`Correct Answer: ${incorrect.correctAnswer}`));
        });
    }
}
quiz();
