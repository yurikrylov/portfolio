
import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

type Props = {
    children:React.ReactNode
}
const Layout: React.FC<Props> = ({ children }: Props)=> {
    return (<div>
        <Navbar />
<Header />
        <main>{children}</main>
    </div>)
}
export default Layout;
