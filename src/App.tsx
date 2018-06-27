import * as React from 'react';
import { hot } from 'react-hot-loader';

import app from './app.css';

class App extends React.Component {
    render() {
        const css = app.locals;
        app.use();
        return <p className={css.hello}>Hello World!</p>;
    }
}

function a(b: string): string {
    console.log('b = ', b); // tslint:disable-line

    return b;
}

if (__DEV__) {
    a('Hello!');
}

export default (__DEV__ ? hot(module)(App) : App);
