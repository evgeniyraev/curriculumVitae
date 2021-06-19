import React from 'react';
import ReactDOM from 'react-dom';
import CV from './cv';

ReactDOM.[
    process.env.NODE_ENV == "development"
    ? "render"
    : "hydrate"
](
    <CV />,
    document.getElementById('app')
);
