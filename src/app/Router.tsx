import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { Main } from "../pages";

export const Router: React.FC = () => {
    const routes = {
        root: '/'
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.root} element={<Main />} />
            </Routes>
        </BrowserRouter>
    )
}