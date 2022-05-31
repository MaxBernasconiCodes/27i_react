import React from 'react';
import Contador from '../components/Contador';

const home = (props) => {
    let {inicial, maximo} = props;
  return (
      <>
       {inicial} / {maximo}
       <Contador min={inicial} max={maximo} />
      </>
  )
}

export default home