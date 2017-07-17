import './less/index';
import React from 'react';
import { render } from 'react-dom';

import App from './components/Game';

function run()
{
    render(
        <App />,
        document.getElementById("root")
    );
}

run();
