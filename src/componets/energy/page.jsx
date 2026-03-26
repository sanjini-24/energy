import React from 'react'

const Energy = ({result}) => {
  let image = "";
  let text = "";

  if (result <= 100){
    image = "/images/lowlevel1.jpeg";
    text = "low energy";
  }else if ( result >= 1000){
    image = "/images/happyyy.png" ;
    text = "high energy";
  }else{
    image = "/images/mediumlevel.jpeg";
    text = "medium energy";
  }
  return (
    <div>

        <h1 style={{ color: '#895129' }} >{text}</h1>
      <img src={image} alt='energy' width={200} height={200} />
      <br/>
      <div style={{ marginTop: '10px' }}>
      <input type="Number" placeholder="Amount of energy" value={result} style={{ borderRadius: '6px',border:'2px solid #895129',padding: '10px' }}/>
      </div>
    </div>
  )
}

export default Energy;
