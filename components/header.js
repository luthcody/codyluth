import { useEffect, useRef } from "react";
import CircleType from 'circletype';

export default function MainHeader() {
  const circleInstance = useRef();

  useEffect(() => {
    new CircleType(circleInstance.current).radius(800).dir(-1);
  }, []);

  return (
    <div className="header">
        <div className="header-title" ref={circleInstance}>Cody Luth</div>
    </div>
  )
}
