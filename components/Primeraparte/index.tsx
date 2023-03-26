export default function PrimeraParte(): JSX.Element {
  return (
    <div style={{ 
      backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/assets/fA_Photo11.jpg")`, 
      backgroundSize: 'cover', 
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{ 
        position: 'absolute', 
        bottom: 0, 
        left: 0,  
        paddingLeft: '2rem', 
        paddingBottom: '2rem',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        height: '60vh'
      }}>
        <p className="text-white ml-3 h1 sm:text-3xl md:text-4xl" style={{ fontSize: '3em' }}>Arquitectura</p>
        <p className="text-white ml-3 font-weight-bold leading-tight h3 sm:text-5xl md:text-6xl" style={{ fontSize: '4em' }}>
          Casa Cantera
        </p>
        <p className="text-white ml-3 h6 sm:text-xl md:text-2xl" style={{ fontSize: '1.5em' }}>Santiago de Querétaro, Qro.</p>
      </div>
    </div>
  );
}
