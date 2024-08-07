import { Link } from "react-router-dom";
import s from'./Navigation.module.css';

export const Navigation = () => {
    return (
        <nav className = {s.container}>
            <Link to ="/generate">Генерировать QR код</Link>
            <Link to ="/scan">Сканировать QR код</Link>
            <Link to ="/generatehistory">История генерирования</Link>
            <Link to ="/scanhistory">История сканирования</Link>
        </nav>
    )
}