
import React from 'react';
import Navbar from '../components/Navbar';

type Props = {
    children:React.ReactNode
}
const Layout: React.FC<Props> = ({ children }: Props)=> {
    return (<div>
        <Navbar />
        <main>{children}</main>
    </div>)
}
export default Layout;
