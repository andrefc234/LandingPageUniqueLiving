export default function PrimeraParte(): JSX.Element {
  return (
    <div style={{ 
      backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/assets/fA_Photo11.jpg")`, 
      backgroundSize: 'cover', 
      width: '100vw', 
      height: '100vh'
    }}>
      <div className="absolute top-0 left-0 w-full h-full bg-black ">
    
        <div style={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0,  
          paddingLeft: '16rem', 
          marginBottom:'3.5rem', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start'
        }}>
          <p className="text-white ml-3  h1 sm:text-4xl md:text-5xl">Arquitectura</p>
          <p className="text-white ml-3 font-weight-bold leading-tight  h3 sm:text-6xl md:text-7xl">
            Casa Cantera
          </p>
          <p className="text-white  ml-3  h6 sm:text-2xl md:text-3xl">Santiago de Querétaro, Qro.</p>
        </div>
      
      </div>
    </div>
  );
}
