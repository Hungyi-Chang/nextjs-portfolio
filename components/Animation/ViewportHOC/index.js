import React, {useRef, useEffect, useState} from 'react';
import {ScrollTopContext} from '../Context';

const HOC = (Component) => (props) => {
  const ref = useRef();
  const [enterViewport, setEnterViewport] = useState(false);
  const scrollTop = useRef(0);

  // add listener of scrollTop
  // NOTE: add ref.current to listening list is for initialization
  useEffect(() => {
    if (ref.current) {
      const {top} = ref.current.getBoundingClientRect();
      // when enter viewport
      if (top <= window.innerHeight) setEnterViewport(true);
    }
  }, [scrollTop.current, ref.current]);

  const updateScrollTop = (value) => {
    
    // avoid memory leak, only update before an element enter viewport
    if (!enterViewport) {
      
      scrollTop.current = value;
    }
  };

  return (
    <ScrollTopContext.Consumer>
      {(value) => {
        updateScrollTop(value);
        return <Component ref={ref} enterViewport={enterViewport} {...props} />;
      }}
    </ScrollTopContext.Consumer>
  );
};

export default HOC;
