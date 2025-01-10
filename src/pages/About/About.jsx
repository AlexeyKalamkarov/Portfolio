import CSS3 from '../../images/About/CSS3.svg';
import Figma from '../../images/About/Figma.svg';
import HTML5 from '../../images/About/HTML5.svg';
import JS from '../../images/About/JS.svg';
import React from '../../images/About/React.svg';
import { useState } from 'react';
const About = () => {
    const [FirstName, setFirstName] = useState('')
    const [Email, setEmail] = useState('')
    const [Message, setMessage] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${FirstName}, Email: ${Email}, Message: ${Message}`);
        console.log(
            FirstName,
            Email,
            Message,
        );
    }
    return ( 
        <div className="about">
            <div className="about-section1">
                <div className="about-section1-left-content">
                    <h2 className='h2-about'>Привет!</h2>
                    <h2>С вами Каламкаров Алексей</h2>
                    <p>В настоящее время я работаю Frontend-разработчиком. До этого работал инженером АСУ ТП и информационной безопасности АСУ ТП, что дало мне ценный опыт работы с информационной безопасностью автоматизированных систем управления. Дополнительно занимаюсь проектирование дизайна интерфейсов. Помимо работы, увлекаюсь настольными играми, автомобилями и музыкой. Всегда открыт к новым возможностям для роста.</p>
                </div>
                <div className="about-section1-right-content">
                    <img src={CSS3} alt="" />
                    <img src={HTML5} alt="" />
                    <img src={Figma} alt="" />
                    <img src={JS} alt="" />
                    <img src={React} alt="" />
                </div>
            </div>
            <section className="about-section2">
                <div className='contact-form'>
                    <div className="contact-form-title">
                        <p>контакты</p>
                        <h4>Отправьте Ваше сообщение</h4>
                    </div>
                    <fieldset>
                        <form action="kalamkarovalexey@gmail.com" method='get'>
                            <input type="text" value={FirstName} onChange={(e) => setFirstName(e.target.value)} name='firstname' className="firstname" id='firstname' placeholder='имя' />
                            <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)}   name='email' className="email" id='email' placeholder='email' />
                            <textarea name="message" value={Message} onChange={(e) => setMessage(e.target.value)} id="message" cols="30" rows="10"  placeholder="Ваше сообщение:" required></textarea>
                            <button type="submit" onClick={(e) => handleSubmit(e)} value="Submit" className="button-submit">Отправить сообщение</button>
                        </form>
                    </fieldset>
                </div>
            </section>
        </div>
     );
}
 
export default About;