import Cinema from '../../images/projects/cards/Cinema.jpg';
import WineApp from '../../images/projects/cards/WineApp.jpg';
import TravelApp from '../../images/projects/cards/TravelApp.png';
import GPI1 from '../../images/projects/cards/GPI1.png';
import TODO from '../../images/projects/cards/TODO.png';
import Behance from '../../images/cards/behance.svg'
import Git from '../../images/cards/git.svg';



const CardMean = [
    {
        id: 'Card1',
        title: 'Сайт онлайн кинотеатра',
        subtitle: 'Агрегатор контента, предоставляющие возможность просмотра видео как через сайты проектов, так и через приложения сервисов для мобильных платформ и Smart TV.',
        img: Cinema,
        icon: Behance,
        path: 'https://www.behance.net/gallery/155522085/Streaming-service'
    },
    {
        id: 'Card2',
        title: 'Мобильное приложение WineApp',
        subtitle: 'Мобильное приложение по подбору вин по критериям и рейтингу. В приложении вы можете по фотографии определить рейтинг напитка. В приложении можно вести дневник с заметками по всем винам. ',
        img: WineApp,
        icon: Behance,
        path: 'https://www.behance.net/gallery/157710669/Wine-AppMobile-App'
    },
    {
        id: 'Card3',
        title: 'Социальная сеть & месседжер',
        subtitle: 'Мобильное приложение для туристов. Позволяет определиться с местом и временем путешествия. Через него вы можетн забронировать отель, купить билеты на самолет или поезд, записаться на экскурсии.',
        img: TravelApp,
        icon: Behance,
        path: 'https://www.behance.net/gallery/161044079/Travel-appGoTravel'
    },
    {
        id: 'Card4',
        title: 'Приложение для создания заметок',
        subtitle: 'TODO list позволяет добавлять еовые заметки с точной датой создания, редактировать их и удалять',
        img: TODO,
        icon: Git,
        path: 'https://github.com/AlexeyKalamkarov/TODO'
    },
    {
        id: 'Card6',
        title: 'Web-site',
        subtitle: 'Сайт организации ООО Газпром информ',
        img: GPI1,
        icon: Git,
        path: 'https://github.com/AlexeyKalamkarov/GPI-SITE'
    },
    
]

export {CardMean};