/**
 * This project was bootstrapped with Reaktive-cli
 * Copyright © reaktive-cli. All rights reserved.
 *
 * @license MIT
 */
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from '@component/App/App';

import './app/style/main.scss';

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<div>Fetching the death star plans!</div>}>
            <App />
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);
