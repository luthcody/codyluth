import React from 'react';
import Typed from 'typed.js';

export default function Error({ lightMode }) {
  const el = React.useRef(null);
	const typed = React.useRef(null);
  React.useEffect(() => {
    const accentClass = !lightMode ? 'text-color-blue' : '';

    const options = {
      strings: [
        "Sorry... ",
        `Sorry... I haven't <span class='${accentClass}'>built</span> that page yet.`,
        `Sorry... I haven't <span class='${accentClass}'>built</span> that page yet.</br>[ 404 ]`,
      ],
      typeSpeed: 40,
      backSpeed: 50,
    };
    
    typed.current = new Typed(el.current, options);
    
    return () => {
      typed.current.destroy();
    }
  })

  return (
    <h1 className="text-center h4 mt-5 pt-5">
      <span ref={el} />
    </h1>
  );
}
