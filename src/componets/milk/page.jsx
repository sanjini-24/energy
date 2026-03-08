import React from 'react'

const Milk = () => {
  return (
    <div>
        <h1 style={{ paddingLeft: '80px',color: '#895129' }}>Milk<span style={{ paddingLeft: '160px' }}>*</span></h1>
      <img src="/images/milk_extr.png" alt='milk' width={200} height={200}/>
      <br/>
      <div style={{ marginTop: '10px' }}></div>
      <input type="Number" placeholder="no of milk" style={{ borderRadius: '6px',padding: '10px' ,border:'2px solid #895129'}}/>
    </div>
  )
}

export default Milk
