import { useEffect, useRef } from "react";
import Head from 'next/head'
import Page from '../components/page';
import CircleType from 'circletype';

export default function Index() {
  return(
    <h2> Hell oworld! </h2>
  )
}

Index.getLayout = function getLayout(page) {
  const circleInstance = useRef();

  useEffect(() => {
    new CircleType(circleInstance.current).radius(800).dir(-1);
  }, []);

  return (
    <Page>
      <h1>Hello world!</h1>
    </Page>
  )
}