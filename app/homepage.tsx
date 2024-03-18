'use client';

import React from "react";
import Typed from 'typed.js';
import { useSearchParams } from "next/navigation";
import styles from './homepage.module.scss';
import { signIn } from "next-auth/react"

function getTypedStrings(ref) {
  switch (ref) {
    case 'self':
      return [
        "... ",
        "... weren't you just here?",
        "... weren't you just here?</br>Welcome <span class='text-color-blue'>Back</span>.",
      ]
    default:
      return [
        "Welcome! ",
        "Welcome! I'm <span class='text-color-blue'>Cody</span>.",
        "Welcome! I'm <span class='text-color-blue'>Cody</span>. I'm a <span class='text-color-blue'>Developer</span>.",
      ]
  }
}

export default function Homepage() {
  const searchParams = useSearchParams();
  const el = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: getTypedStrings(searchParams ? searchParams.get('ref') : null),
      typeSpeed: 40,
      backSpeed: 50,
    };
    
    const typed = new Typed(el.current, options);
    
    return () => {
      typed.destroy();
    }
  }, [searchParams])

  return (
    <div className="row gx-0 justify-content-center">
      <h1 className="d-none">Cody Luth</h1>
      <div className={'col-12 col-md-8 px-2 px-md-4 ' + styles.typed}>
        <span ref={el} />
      </div>
      {/* <button onClick={() => signIn('auth0')}>Sign in</button> */}
    </div>
  )
}
