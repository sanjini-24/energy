import Choco from "./componets/choco/page";
import Energy from "./componets/energy/page";
import Milk from "./componets/milk/page";
import Button from "./componets/button/page";
import { useState } from "react";

function App() {
  const [milk,setMilk] =useState(0);
  const [choco,setChoco] = useState(0);
  const[result,setResult] = useState(0);
  const caculateEnergy = () => {
    const energy = milk*(choco**2);
    setResult(energy);
  }
  return ( 
    <div style={{ backgroundImage: 'url("/images/bg77.png")', backgroundSize: 'cover', minHeight: '100vh', padding: '20px' }}>
    <h1 style={{textAlign: 'center', paddingRight:'30px',letterSpacing: '2px',fontFamily: 'Poppins',fontSize: '40px',color: '#411900'}}>ENERGY CALCULATOR</h1>
      <div style={{ display: 'flex', gap: '70px',marginTop: '40px', justifyContent: 'center' }}>
        <Milk setMilk={setMilk}/>
        <Choco setChoco={setChoco}/>
        
        <Energy result={result}/>
      </div>
      <div style={{ textAlign: 'center' , marginTop: '40px'}}>
        <Button result={result} calculateEnergy={caculateEnergy}/>
      </div>
    </div>
  );
}

export default App;
