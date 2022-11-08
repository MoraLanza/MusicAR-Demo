import React from 'react';
import image from '../assets/images/logo.png';
import ContentWrapper from './ContentWrapper';
import CategoriesPagination from './CategoriesPagination';
import ProductsList from './ProductsList';
import ProductDetail from './ProductDetail';
import UsersPagination from './UsersPagination';
import SearchMovies from './SearchMovies';

import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';
import LastEventInDb from './LastEventInDb';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-color sidebar sidebar-dark accordion bg-red" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Musicar</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Menu</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/users">
                        <i className="fas fa-users"></i>
                        <span>Usuarios</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/ProductsList">
                        <i className="fas fa-ticket-alt"></i>
                        <span>Eventos</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/CategoriesPagination">
                        <i className="fas fa-music"></i>
                        <span>Categorías</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/CategoriesPagination">
                    <CategoriesPagination />
                </Route>
                <Route path="/ProductsList">
                    <ProductsList />
                </Route>
                <Route path="/products/:id">
                    <ProductDetail />
                </Route>
                <Route path="/users">
                    <UsersPagination />
                </Route>
                <Route path="/SearchEvent">
                    <SearchMovies />
                </Route>
                <Route path="/LastEventInDb">
                    <LastEventInDb />
                </Route>
                <Route component={NotFound} />
            </Switch>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;