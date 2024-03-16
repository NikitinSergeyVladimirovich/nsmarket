import { type ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import Grid from '@mui/material/Grid';
import Block from "./block";

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({
    children,
}: LayoutProps) => {
    return (
        <>
            <Header />
            { children }
            <Footer/>
        </>
    );
    
}

export default Layout;