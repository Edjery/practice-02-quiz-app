import { animated, useSpring } from "@react-spring/web";
import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
}

const FadeSlideFromBottom = ({ children }: Props) => {
  const [props] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: "translateY(100px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
    config: { tension: 100, friction: 20 },
  }));

  return <animated.div style={props}>{children || ""}</animated.div>;
};

export default FadeSlideFromBottom;
