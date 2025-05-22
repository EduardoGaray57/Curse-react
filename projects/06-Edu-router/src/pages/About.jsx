import { Link } from '../Link.jsx';


const i18n = {
    es:{
        title: 'Sobre mi',
        button: 'Volver a la pagina principal',
        description: 'Estoy creando un clon de React Router'
    },
    en:{
        title: 'About me',
        button: 'Back to the main page',
        description: 'I am creating a clone of React Router'
    }      
}

const useI18n = (lang) => {
    return i18n[lang] || i18n.en
}

export default function AboutPage({ routerParams }) {
    const i18n = useI18n(routerParams.lang ?? 'es')
    return (
        <>
            <h1>{i18n.title}</h1>
            <div>
                <img src="https://media.licdn.com/dms/image/v2/D4E35AQEPrXl6l1BtNg/profile-framedphoto-shrink_200_200/B4EZYiDhUuHMAY-/0/1744328070700?e=1748221200&v=beta&t=ReVlyGhN6PDzfTmM9uiU1HdXTBQRY9D2Y-pZkpEMMSw"
                    alt="Foto de Eduardo" />
                <p>{i18n.description}</p>
            </div>
            <Link to='/'>{i18n.button}</Link>
        </>
    )
}