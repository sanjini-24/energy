import React from 'react'

const Choco = () => {
  return (
    <div>
        <h1 style={{ color: '#895129' }}>Chocolate<span style={{ paddingLeft: '160px' }}>=</span></h1>
      <img src="/images/choco_extr.png" alt='choco' width={200} height={200}/>
      <br/>
      <div style={{ marginTop: '10px' }}>
      <input type="Number" placeholder="no of choco" style={{ borderRadius: '6px',border:'2px solid #895129',padding: '10px' }}/>
      
      </div>
    </div>
  )
}

export default Choco
