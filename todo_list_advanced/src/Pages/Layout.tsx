
import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

type Props = {
    page: string,
    children: React.ReactNode
}
const Layout: React.FC<Props> = ({ page, children }: Props) => {
    return (
        <div>
            <Navbar />
            <Header page={page} />
            <main>{children}</main>
        </div>)
}
export default Layout;
