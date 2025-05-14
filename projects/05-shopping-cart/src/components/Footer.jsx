import './Footer.css';

export function Footer({ filter }) {
    return (
        <footer className="footer">
            {
                JSON.stringify(filter, null, 2)
            }
            {/*
            <h4>Prueba tecnica</h4>
            <span>Eduardo</span>
            <h5>Shopping Cart con useContext & useReduce</h5>
            */}
        </footer>
    )
}