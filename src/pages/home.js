import React from 'react';
import Banner from '../components/Banner';
import Titre from '../components/Titre';
import Gallery from '../components/galerry';





const Home = () => {
    return (
        <div>
            <div className="banner-home">
               <Banner/>
            </div>
            <Titre/>

           <Gallery />
                
           
        </div>
    );
};

export default Home;