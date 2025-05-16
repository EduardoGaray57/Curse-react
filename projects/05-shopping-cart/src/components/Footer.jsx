import './Footer.css';
import { useFiltres } from "../hooks/useFilters"

export function Footer() {
    const { filters } = useFiltres()
    return (
        <footer className="footer">
            {
                JSON.stringify(filters, null, 2)
            }
            {/*
            <h4>Prueba tecnica</h4>
            <span>Eduardo</span>
            <h5>Shopping Cart con useContext & useReduce</h5>
            */}
        </footer>
    )
}