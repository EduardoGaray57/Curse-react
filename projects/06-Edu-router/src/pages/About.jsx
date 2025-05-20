import { Link } from '../Link.jsx';

export default function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <div>
                <img src="https://media.licdn.com/dms/image/v2/D4E35AQEPrXl6l1BtNg/profile-framedphoto-shrink_200_200/B4EZYiDhUuHMAY-/0/1744328070700?e=1748221200&v=beta&t=ReVlyGhN6PDzfTmM9uiU1HdXTBQRY9D2Y-pZkpEMMSw"
                    alt="Foto de Eduardo" />
                <p>Estoy creando un clon de React Router</p>
            </div>
            <Link to='/'>Ir a la home</Link>
        </>
    )
}