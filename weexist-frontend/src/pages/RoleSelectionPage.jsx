import React, { useState, useEffect } from 'react'; // <-- Corrected import statement
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ChooseRole from '../Components/RoleSelectionComponent';  

const RoleSelection = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div>
        <Navbar/>

        <div>
            <ChooseRole/>
        </div>

 

      <div className='w-full'>
        <Footer/>
      </div>
    </div>
  );
};

export default RoleSelection;