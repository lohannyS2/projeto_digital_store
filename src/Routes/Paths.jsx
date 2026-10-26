import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../pages/Layout"
import HomePage from "../pages/HomePage"
import ProductListing from '../pages/ProductListingPage'
import Categories from "../pages/CategoriesPage"
import Orders from "../pages/OrdersPage"
import NotFound from "../pages/NotFound"


const Paths = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        {/*Rotas da nav principal */}
                        <Route element={<HomePage />} />
                        <Route path="products" element={<ProductListing />} />
                        <Route path="categories" element={<Categories />} />
                        <Route path="orders" element={<Orders />} />

                        {/*Rotas de cadastro e login */}

                        {/*Rota de NotFound*/}
                        <Route path="*" element={<NotFound />}/>

                    </Route>
                </Routes>
        </BrowserRouter>
    );
}

export default Paths
