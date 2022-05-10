import React from "react";
import Padgy from './images/Padgy.jpg';

const Home = () => {
    return (
        <div className="home">
            <h1>Military to Tech</h1>
            <img src={Padgy} alt="pic" />
                <p>
                I am an active duty Marine transitioning out of the military after 11 years of service. 
                My military career began as a Finance Technician and after 5 years I transitioned to become a Contract Specialist.
                </p>
                <p>
                Currently, I am participating in the Microsoft Software and Systems Academy Skillbridge program and sharing my journey with you all. 
                I had ZERO technical background prior to the program and look forward to securing a job offer in the tech field upon my end of service this summer.
                </p>
        </div>
    );
}
 
export default Home;
