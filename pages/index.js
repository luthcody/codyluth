import React from "react";
import Typed from 'typed.js';
import { useRouter } from "next/router";
import ProjectTile from '../components/projectTile';
import styles from './index.module.scss';
import projects from '../static/json/projects.json';

function getTypedStrings(ref) {
  switch (ref) {
    case 'self':
      return [
        "... ",
        "... weren't you just here?",
        "... weren't you just here?</br>Welcome <span class='text-color-blue'>Back</span>.",
      ]
      break;
    default:
      return [
        "Welcome! ",
        "Welcome! I'm <span class='text-color-blue'>Cody</span>.",
        "Welcome! I'm <span class='text-color-blue'>Cody</span>.</br>I'm a <span class='text-color-blue'>Web Developer</span> for Leatherman Tool Group.",
        "Welcome! I'm <span class='text-color-blue'>Cody</span>.</br>I'm a <span class='text-color-blue'>Web Developer</span> for Leatherman Tool Group.</br>I also <span class='text-color-blue'>Freelance</span>.",
      ]
  }
}

export default function Index() {
  const { query } = useRouter();
  const el = React.useRef(null);
	const typed = React.useRef(null);
  React.useEffect(() => {
    const options = {
      strings: getTypedStrings(query.ref),
      typeSpeed: 40,
      backSpeed: 50,
    };
    
    typed.current = new Typed(el.current, options);
    
    return () => {
      typed.current.destroy();
    }
  }, [query])

  const projectTiles = projects.map((project, i) => <ProjectTile key={project.id} project={project} priority={i < 3}/>);

  return (
    <div className="row gx-0 justify-content-center">
      <h1 className="d-none">Cody Luth</h1>
      <div className={'col-12 col-md-8 px-2 px-md-4 ' + styles.typed}>
        <span ref={el} />
      </div>

      <h3 className="col-12 text-center mt-4">Projects</h3>
      {projectTiles}
    </div>
  )
}
