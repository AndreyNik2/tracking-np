import { FC } from 'react'
import { NavLink, Outlet } from 'react-router-dom';


export const SharedLayout:FC = () => {
    return (
      <>
        <header>
          <nav>
            <NavLink to='/tracking'>Перевірити ТТН</NavLink>
            <NavLink to='/warehouses'>Список відділень</NavLink>
          </nav>
            </header>
            <Outlet />
      </>
    );
}