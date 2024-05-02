import React, {Suspense, useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
    <App/>
</React.StrictMode>,)

function App() {
    const getPath = () => {
        const path = location.pathname.replace('/', '');
        switch (path) {
            case '':
                return 'Home'
            default:
                return path
        }
    }
    const path = getPath();

    const Page = React.lazy(() => import(`./pages/${path}.jsx`));
    return (<BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Page/>
                </Suspense>
            </BrowserRouter>);

}
