import { universeBackground } from "../background";

export default {
    title: "Space Exploration Quiz",
    description: "Test your knowledge about space exploration, missions, and astronomy.",
    background: universeBackground,
    questions: [
        {
            text: "Who was the first person to walk on the moon?",
            choices: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
            correctAnswer: ["Neil Armstrong"]
        },
        {
            text: "What is the name of NASA's most famous space telescope?",
            choices: ["Hubble", "Voyager", "Chandra", "James Webb"],
            correctAnswer: ["Hubble"]
        },
        {
            text: "Which planet is known as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            correctAnswer: ["Mars"]
        },
        {
            text: "What is the closest star to Earth?",
            choices: ["The Sun", "Proxima Centauri", "Sirius", "Alpha Centauri"],
            correctAnswer: ["The Sun"]
        },
        {
            text: "Which spacecraft was the first to land on the surface of Mars?",
            choices: ["Viking 1", "Curiosity", "Perseverance", "Spirit"],
            correctAnswer: ["Viking 1"]
        },
        {
            text: "Which space mission first landed humans on the Moon?",
            choices: ["Apollo 11", "Apollo 12", "Apollo 13", "Apollo 14"],
            correctAnswer: ["Apollo 11"]
        },
        {
            text: "What is the largest planet in our solar system?",
            choices: ["Jupiter", "Saturn", "Uranus", "Neptune"],
            correctAnswer: ["Jupiter"]
        },
        {
            text: "Which mission is known for providing the first detailed images of Pluto?",
            choices: ["New Horizons", "Voyager 1", "Pioneer 10", "Hubble"],
            correctAnswer: ["New Horizons"]
        },
        {
            text: "What is the name of the first artificial satellite launched into space?",
            choices: ["Sputnik 1", "Explorer 1", "Vostok 1", "Apollo 8"],
            correctAnswer: ["Sputnik 1"]
        },
        {
            text: "Which space agency is responsible for the Mars rover 'Curiosity'?",
            choices: ["NASA", "ESA", "Roscosmos", "JAXA"],
            correctAnswer: ["NASA"]
        }
    ],
};

