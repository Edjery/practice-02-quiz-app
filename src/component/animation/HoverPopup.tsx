import { animated, useSpring } from "@react-spring/web";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const HoverPopup = ({ children }: Props) => {
  const [props, api] = useSpring(() => ({
    transform: "scale(1)",
    config: { tension: 300, friction: 20 },
  }));

  const handleMouseEnter = () => {
    api.start({ transform: "scale(1.05)" });
  };

  const handleMouseLeave = () => {
    api.start({ transform: "scale(1)" });
  };

  return (
    <animated.div style={{ ...props }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children || ""}
    </animated.div>
  );
};

export default HoverPopup;
