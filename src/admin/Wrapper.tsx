import React,{ReactNode} from "react";
import Nav from './components/Nav';
import Menu from './components/Menu';


const Wrapper = ({children}:{children:ReactNode}) => {
    return (
        <div>
            
                <Nav />
                <div className="container-fluid">
                    <div className="row">
                        <Menu />
                        <main role="main" className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                           {children}
                        </main>
                    </div>
                </div >
            </div >
    )
}

export default Wrapper;