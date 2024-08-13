import { animated, config, useSpring } from "@react-spring/web";
import { ReactNode } from "react";
interface Props {
  animate: boolean;
  delay: number;
  children?: ReactNode;
}

const FadeSlideFromBottomDelay = ({ animate, delay, children }: Props) => {
  const props = useSpring({
    to: {
      opacity: animate ? 1 : 0,
      transform: animate ? "translateY(0)" : "translateY(100px)",
    },
    from: { opacity: 0, transform: "translateY(100px)" },
    config: config.slow,
    delay: delay * 50,
  });

  return <animated.div style={props}>{children}</animated.div>;
};

export default FadeSlideFromBottomDelay;
