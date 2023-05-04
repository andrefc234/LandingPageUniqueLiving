import React from 'react';
import Head from 'next/head';
import Navbar from '../MainComponents/NavB';
import Loader from '../MainComponents/Loader';
import { useRouter } from 'next/router';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  

  React.useEffect(() => {
    // Set a timeout to pause the intro animation after 3 seconds
    setLoading(false);
 

  }, []);

  return (
    <>
     
    
     {loading ? (
     <Loader/>
    ) : (<>
    <Navbar />
      <div>{children}</div>
    </>)}


      
    </>
  );
};

export default Layout;
