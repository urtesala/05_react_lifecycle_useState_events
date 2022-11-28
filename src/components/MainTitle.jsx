import { useState, Fragment } from 'react';
function MainTitle() {
  const [h1Size, setH1Size] = useState('1rem');
  // const h1Size = '1rem'
  function sizeHandler() {
    console.log('size to 3rem');
    setH1Size('3rem');
  }

  function increaseTitleSizeHandler() {
    setH1Size((prevH1Size) => {
      // pasiimti dabartine reiksme
      console.log('prevH1Size ===', prevH1Size);
      // issitraukti skaitine dali
      let skDalisBeRem = parseFloat(prevH1Size);
      console.log('skDalisBeRem ===', skDalisBeRem);
      // ja padidinti
      skDalisBeRem++;
      // prideti atgal 'rem'
      const padidintaSuRem = skDalisBeRem + 'rem';
      // setitini state su reiksme
      return `${skDalisBeRem}rem`;
    });
  }

  function resetSize() {
    setH1Size('2rem');
  }

  return (
    <>
      {/* grazinti h1 dydi i 2rem */}
      <button onClick={resetSize}>reset</button>
      <h1 onClick={increaseTitleSizeHandler} style={{ fontSize: h1Size }}>
        Lifecycle
      </h1>
    </>
  );
}

export default MainTitle;
