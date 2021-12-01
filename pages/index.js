import React from "react";
import Typed from 'typed.js';
import styles from './index.module.scss';

export default function Index() {
  const el = React.useRef(null);
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        "Hey... ",
        "Hey... I'm <span class='text-color-blue'>Cody</span>.",
        "Hey... I'm <span class='text-color-blue'>Cody</span>.</br>I'm a web developer for <span class='text-color-blue'>Leatherman Tool Group</span>.",
        "Hey... I'm <span class='text-color-blue'>Cody</span>.</br>I'm a web developer for <span class='text-color-blue'>Leatherman Tool Group</span>.</br>I also <span class='text-color-blue'>freelance</span>.",
      ],
      typeSpeed: 40,
      backSpeed: 50,
    };
    
    typed.current = new Typed(el.current, options);
    
    return () => {
      typed.current.destroy();
    }
  }, [])

  return (
    <div className="row justify-content-center">
      <div className={'col-12 col-md-8 px-4 ' + styles.typed}>
        <span ref={el} />
      </div>

      <h3 className="col-12 text-center mt-4">Projects</h3>
    </div>
  )
}
