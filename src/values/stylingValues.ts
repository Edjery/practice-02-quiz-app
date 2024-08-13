import { flowersLikeEyes, transparency } from "./colors";

// transition
export const easeInOut = "0.3s ease-in-out";

// normal styles
export const centerItem = { display: "flex", justifyContent: "center", alignContent: "center", height: "100vh" };

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

export const animationStyleFade = (isVisible: boolean, animate: boolean) => ({
    display: isVisible ? "flex" : "none",
    transform: animate ? "scale(1)" : "scale(0.5)",
    opacity: animate ? 1 : 0,
    transition: `opacity ${easeInOut}, transform ${easeInOut}`,
});

