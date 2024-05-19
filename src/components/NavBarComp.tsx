import React from "react";
import { NavLink } from 'react-router-dom';
import { CONTACT_ROUTE, FAQ_ROUTE, ABOUT_ROUTE, TABLE_ROUTE, PAGINATION_ROUTE } from "../routing/ConfigRoutes";
import { useAuth } from "../hooks/useAuth";
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0; 
    padding: 0;
  }
`;

const Header = styled.header`
  width: 100%;
  background-color: #333;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;

  @media (min-width: 750px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 0;
  transition: 0.4s;

  &.active {
    font-weight: bold;
  }

  &:hover {
    color: #e2d13b;
    transition: 0.4s;
  }

  @media (min-width: 750px) {
    padding: 0;
  }
`;

const Button = styled.button`
  background-color: #555;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: #e2d13b;;
    transition: 0.4s;
  }

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export const Navbar = () => {
    const { isAuth, setIsAuth } = useAuth();

    const handleLogin = () => {
        setIsAuth(!isAuth);
    }

    return (
        <>
            <GlobalStyle />
            <Header>
                <Nav>
                    <StyledNavLink to={TABLE_ROUTE}>Таблица</StyledNavLink>
                    <StyledNavLink to={ABOUT_ROUTE}>Форма с pdf</StyledNavLink>
                    <StyledNavLink to={FAQ_ROUTE}>Вопрос-ответ</StyledNavLink>
                    <StyledNavLink to={PAGINATION_ROUTE}>Пагинация</StyledNavLink>
                    { isAuth && <StyledNavLink to={CONTACT_ROUTE}>Контакты</StyledNavLink> }
                    <Button onClick={handleLogin}>{!isAuth ? 'Войти' : 'Выйти'}</Button>
                </Nav>
            </Header>
        </>
    )
}
