import React from 'react';
import '../Works/work.css';
import port1 from '../../assets/port1.jpg';
import port2 from '../../assets/port2.jpg';
import port3 from '../../assets/port3.jpg';
import port4 from '../../assets/port4.jpg';
import port5 from '../../assets/port5.jpg';
import port6 from '../../assets/port6.jpg';



const Works = () => {
    return (
        <section id='works'>
            <h2 className='workstitle'>My Portfolio</h2>
            <span className='worksDesc'>I take pride in paying attention to the smallest detail and making sure that my work in pixcel perfect. i am excited to bring my skills and expierence to help bussiness archieve their goals and create a strong online presence.</span>
            <div className='worksImgs'>
                <img src={port1} alt='' className='worksImg'/>
                <img src={port2} alt='' className='worksImg'/>
                <img src={port3} alt='' className='worksImg'/>
                <img src={port4} alt='' className='worksImg'/>
                <img src={port5} alt='' className='worksImg'/>
                <img src={port6} alt='' className='worksImg'/>

            </div>
            <button className='workbtn'>See More</button>
        </section>
    );
}

export default Works
