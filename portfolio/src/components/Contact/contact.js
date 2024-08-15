import React from 'react';
import '../Contact/contact.css';
import cl1 from '../../assets/facebooks.png';
import cl2 from '../../assets/microsoft.png';
import cl3 from '../../assets/adobe.png';
import cl4 from '../../assets/welmart.png';
import fbicon from '../../assets/facebook.png';
import instaicon from '../../assets/instagram.png';
import twiticon from '../../assets/twitter.png';
import youtubeicon from '../../assets/youtube.png';



const Contact = () => {
    return(
        <section id='contactPage'>
            <div id='clients'>
                <h1 className='contacttitle'>Clients</h1>
                <p className='clientDesc'>I have had the opportunity to work with a diverse group of companies.Some of the notable companies I have worked with Includes</p>
                <div className='clientImgs'>
                    <img src={cl1} className='clientImg'/>
                    <img src={cl2} className='clientImg'/>
                    <img src={cl3} className='clientImg'/>
                    <img src={cl4} className='clientImg'/>

                </div>
            </div>
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm'>
                    <input type="text" className="name" placeholder='your Name'/>
                    <input type="email" className="email" placeholder='your Email'/>
                    <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                    <button type="submit" className="submitBtn" value="send" >Submit</button>
                    <div className="links">
                        <img src={fbicon} alt="Facebook" className="link"/>
                        <img src={instaicon} alt="Instagram" className="link"/>
                        <img src={twiticon} alt="Twitter" className="link"/>
                        <img src={youtubeicon} alt="Youtube" className="link"/>

                    </div>
                    </form>        
            </div>
        </section>
    );
}
export default Contact