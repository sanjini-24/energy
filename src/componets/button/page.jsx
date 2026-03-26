import React from 'react'

const Button = ({calculateEnergy}) => {
  return (
    <div>
      <button onClick={calculateEnergy} style={ { backgroundColor: '#895129', color: 'white', padding: '10px 20px', border: '5px', borderRadius: '5px',fontSize: '16px',marginTop: '10px',color: 'white'}}>Calculate</button>
    </div>
  )
}

export default Button
