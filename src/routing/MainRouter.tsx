import React  from 'react'
import { RouteObject, useRoutes } from "react-router-dom";
import About from '../components/FuncComp/AboutComp';
import { FAQ } from '../components/FAQComp';
import { TableComp } from '../components/FuncComp/TableComp';

import { Contacts } from '../components/ContactsComp';
import { CONTACT_ROUTE, FAQ_ROUTE, ABOUT_ROUTE, TABLE_ROUTE, PAGINATION_ROUTE } from "../routing/ConfigRoutes";
import { useAuth } from '../hooks/useAuth';
import { Pagination } from 'antd';
import { PaginationComp } from '../components/FuncComp/PaginationComp';

export const MainRouter: React.FC = () => {
  const { isAuth } = useAuth();
  
  const basedPath: RouteObject[] = [
    { path: ABOUT_ROUTE, element: <About /> },
    { path: FAQ_ROUTE, element: <FAQ /> },
    { path: TABLE_ROUTE, element: <TableComp/> },
    { path: PAGINATION_ROUTE, element: <PaginationComp /> },
  ];

  const authPath: RouteObject[] = isAuth
    ? [{ path: CONTACT_ROUTE, element: <Contacts /> }]
    : [];
    

  const resultPaths: RouteObject[] = basedPath.concat(authPath);
  return useRoutes(resultPaths);
};