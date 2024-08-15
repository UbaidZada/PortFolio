import React from 'react';
import './skills.css';
import UI from '../../assets/layers.png';
import Website from '../../assets/web-design.png';
import App from '../../assets/ui-design.png';


const Skills = () =>{
    return(
        <section id='skills'>
            <span className='skilltitle'>What I do</span>
            <span className='skillDesc'>I am skilled and passionate web designer with experience in creating visually appealing and user-friendly-websites.I have a strong understanding od design and a keen eye for Deatail. I am proficient in HTML, CSS and Javascript,as well as design software such as adobe Photoshop and illustrator.</span>
            <div className='skillBars'>
            <div className='skillBar'>
                <img src={UI} className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>This is demo Text, you can write your own content here.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={Website} className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>This demo Teaxt can be changed while making the production ready Website.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={App} className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>You can write your Text related to mobile app development.</p>
                </div>
            </div>
            </div>
        </section>
    );
}
export default Skills