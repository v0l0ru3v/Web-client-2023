import React from "react";
import { NavLink } from 'react-router-dom';
import { CONTACT_ROUTE, FAQ_ROUTE, ABOUT_ROUTE, TABLE_ROUTE,PAGINATION_ROUTE } from "../routing/ConfigRoutes";
import { useAuth } from "../hooks/useAuth";


export const Navbar = () => {
    const { isAuth, setIsAuth } = useAuth();

    const handleLogin = () => {
        setIsAuth(!isAuth);
    }

    return (
            <header>
                <nav>
                    <NavLink className={'link'} to={TABLE_ROUTE}>Таблица</NavLink>
                    <NavLink className={'link'} to={ABOUT_ROUTE}>Форма с pdf</NavLink>
                    <NavLink className={'link'} to={FAQ_ROUTE}>Вопрос-ответ</NavLink>
                    <NavLink className={'link'} to={PAGINATION_ROUTE}>Пагинация</NavLink>
                    { isAuth && <NavLink className={'link'} to={CONTACT_ROUTE}>Контакты</NavLink> }
                    <button onClick={handleLogin}>{!isAuth ? 'Войти' : 'Выйти'}</button>
                </nav>
            </header>
    )
}



