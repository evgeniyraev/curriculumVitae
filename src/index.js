import React from 'react';
import ReactDOM from 'react-dom';
import CV from './cv';
import './index.scss';

ReactDOM[
    process.env.NODE_ENV == "development"
    ? "render"
    : "hydrate"
](
    <CV />,
    document.getElementById('app')
);
