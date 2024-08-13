import { black, flowersLikeEyes, pensiveMood, transparency } from "./colors";

// transition
export const easeInOut = "0.3s ease-in-out";

// normal styles
export const betterBoxStyle = {
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    boxShadow: `0px 10px 20px ${black + transparency[75]}, 0px 6px 6px ${black + transparency[85]}`
}
export const centerItem = { display: "flex", justifyContent: "center", alignContent: "center", height: "100vh" };
export const betterScrollStyle = {
    overflowY: "auto",
    overflowX: "hidden",
    "&::-webkit-scrollbar": {
        width: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: `${pensiveMood.pewter}${transparency[50]}`,
        borderRadius: "10px",
    },
    "&::-webkit-scrollbar-track": {
        backgroundColor: "transparent",
    },
}

// function styles
export const backgroundStyleLightGradient = (background: string) => ({
    background: `linear-gradient(${flowersLikeEyes.purpleHaze + transparency[90]}, ${flowersLikeEyes.purpleHaze + transparency[10]
        }), url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
});
export const animationStyleFadeInDownwards = (isVisible: boolean, animate: boolean) => ({
    display: isVisible ? "flex" : "none",
    transform: animate ? "translateY(0)" : "translateY(-100px)",
    opacity: animate ? 1 : 0,
    transition: `opacity ${easeInOut}, transform ${easeInOut}`,
});
export const animationStyleFadeInScale = (isVisible: boolean, animate: boolean) => ({
    display: isVisible ? "flex" : "none",
    transform: animate ? "scale(1)" : "scale(0.5)",
    opacity: animate ? 1 : 0,
    transition: `opacity ${easeInOut}, transform ${easeInOut}`,
});

