import './style.css'
import Projects from '../Projects/Projects';
const Banner = () => {
    return ( 
        
            <section class="banner" id='banner'>
                <div className="banner-title1">
                    <div className="banner-subtitle1">
                        <h1>frontend development</h1>
                    </div>
                    <section class="banner-subtitle2">
                        <div id='scrollButton' onClick={scrollButton}>scroll down </div>
                    </section>
                </div>
                <div className="banner-title2">
                    <div className="banner-subtitle3">
                        <b>Для связи</b>
                        <p><a href="mailto:kalamkarovalexey@gmail.com">kalamkarovalexey@gmail.com</a></p>
                    </div>
                    <div className="banner-subtitle4">
                        <p>Привет! Меня зовут Алексей, я из Москвы.
                        В настоящее время я работаю frontend-разработчиком До этого работал инженером АСУ ТП и информационной безопасности АСУ ТП, некоторое время занимался проектированием дизайна интерфейсов, поэтому сейчас изучаю Frontend разработку. Помимо работы, увлекаюсь настольными играми, автомобилями и музыкой. Всегда открыт к новым приключениям и возможностям для роста.</p>
                    </div>
                </div>
            </section>
     );
}
export default Banner;

function scrollButton() {
    
    setTimeout(() => {
        const projectForm = document.querySelector('#projects');
    
        projectForm.scrollIntoView({
            block: 'nearest', // к ближайшей границе экрана
            behavior: 'smooth',
        })
    }, 100);
};