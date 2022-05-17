// require('./bootstrap');

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';

createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: name => require(`./Pages/${name}`),
    setup: ({ App, props }) => <App {...props} />,
});

InertiaProgress.init();


