import { bestSellerIcon, graduationHatIcon, medalIcon, rocketIcon, starIcon, stateOfBooksIcon, strongIcon, trophyIcon } from "./icon";

export default [
    {
        minPercentage: 100,
        message: "Outstanding! You scored a perfect 100%!",
        icon: trophyIcon,
    },
    {
        minPercentage: 90,
        message: "Excellent job! Your understanding of the material is exceptional.",
        icon: starIcon,
    },
    {
        minPercentage: 80,
        message: "Well done! You have a strong grasp of the material.",
        icon: graduationHatIcon,
    },
    {
        minPercentage: 60,
        message: "Nice work! You have a solid grasp of the material, but there’s room for improvement.",
        icon: bestSellerIcon,
    },
    {
        minPercentage: 50,
        message: "Good effort! You have a good understanding of the material, but reviewing some concepts might help.",
        icon: medalIcon,
    },
    {
        minPercentage: 40,
        message: "Good job! A bit more practice will help.",
        icon: strongIcon,
    },
    {
        minPercentage: 20,
        message: "You’re getting there. Revisit the material to improve.",
        icon: stateOfBooksIcon,
    },
    {
        minPercentage: 0,
        message: "Keep trying! Review the material and try again.",
        icon: rocketIcon,
    }
]
