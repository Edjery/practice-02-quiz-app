import { animated, useSpring } from "@react-spring/web";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const FadeSlideFromTop = ({ children }: Props) => {
  const [props] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: "translateY(-50px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
    config: { tension: 300, friction: 30 },
  }));

  return (
    <animated.div style={{ ...props, display: "inline-flex", padding: "10px", marginBottom: "20px" }}>{children}</animated.div>
  );
};

export default FadeSlideFromTop;
