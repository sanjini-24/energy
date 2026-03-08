import Choco from "./componets/choco/page";
import Energy from "./componets/energy/page";
import Milk from "./componets/milk/page";
import Button from "./componets/button/page";

function App() {
  return ( 
    <div style={{ backgroundImage: 'url("/images/bg77.png")', backgroundSize: 'cover', minHeight: '100vh', padding: '20px' }}>
    <h1 style={{textAlign: 'center', paddingRight:'30px',letterSpacing: '2px',fontFamily: 'Poppins',fontSize: '40px',color: '#411900'}}>CHOCO WORLD</h1>
      <div style={{ display: 'flex', gap: '70px',marginTop: '40px', justifyContent: 'center' }}>
        <Milk />
        <Choco />
        <Energy />
      </div>
      <div style={{ textAlign: 'center' , marginTop: '40px'}}>
        <Button />
      </div>
    </div>
  );
}

export default App;
