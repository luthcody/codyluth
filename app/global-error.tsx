'use client'

import React from 'react';
import Typed from 'typed.js'; 
import '../static/global.scss'

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    const el = React.useRef(null);

    React.useEffect(() => {
      const options = {
        strings: [
          "Sorry... ",
          "Sorry... I haven't <span class='text-color-blue'>built</span> that page yet.",
          "Sorry... I haven't <span class='text-color-blue'>built</span> that page yet.</br>[ 404 ]",
        ],
        typeSpeed: 40,
        backSpeed: 50,
      };
      
      const typed = new Typed(el.current, options);
      
      return () => {
        typed.destroy();
      }
    })
  
    return (
      <html>
        <body>
          <h1 className="text-center h4 mt-5 pt-5">
            <span ref={el} />
            <button className="btn-secondary" onClick={() => reset()}>Try Again</button>
          </h1>
        </body>
      </html>
    );
}
