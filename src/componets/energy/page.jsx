import React from 'react'

const Energy = () => {
  return (
    <div>

        <h1 style={{ color: '#895129' }} >Energy level</h1>
      <img src="/images/boy.png" alt='energy' width={200} height={200} />
      <br/>
      <div style={{ marginTop: '10px' }}>
      <input type="Number" placeholder="Amount of energy" style={{ borderRadius: '6px',border:'2px solid #895129',padding: '10px' }}/>
      </div>
    </div>
  )
}

export default Energy
