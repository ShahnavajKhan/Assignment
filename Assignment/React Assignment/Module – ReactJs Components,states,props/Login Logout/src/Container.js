
import React from 'react';
import './Container.css'; 

const Container = () => {
    return (
        <div className="King">

            <div className="container-main">

                <div className="header">
                    <span className='navfont'>Navigation</span>
                    <button className="login-button">Login</button>
                </div>
                <div className="container">
                    <div className="content">
                        <div className="page-preview">
                        
                            <h3 className='pubfont'>Public Views</h3>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <h3 className='footfont'>Footer</h3>
                </div>
            </div>

            <div className="container-main">

                <div className="header">
                    <span className='navfont'>Navigation</span>
                    <button className="login-button">Logout</button>
                </div>
                <div className="container">
                    <div className="content">
                        <div className="page-preview">
                            {/* Page preview content */}
                            <h3 className='pubfont'>Private Views</h3>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <h3 className='footfont'>Footer</h3>
                </div>
            </div>
        </div>



    );
};

export default Container;
