import React, {Suspense, Component} from 'react';

import {
    BrowserRouter as Router, Route, Link,
    // Switch,
    // Redirect,
    // withRouter,
    // Prompt,
    // StaticRouter
} from "react-router-dom";
// import Button from 'antd/lib/button';
import {Button} from 'antd';

import './App.less';

const Other = React.lazy(() => import('./pages/test/other'));


// const Home = React.lazy(() => import('./pages/home/home.component'))
// const dashboard = React.lazy(() => import('./pages/dashboard/dashboard.component'));
// const about = React.lazy(() => import('./pages/about/about.component'));

// class App extends Component {
//
//     render() {
//         return (
//             <Suspense fallback={<div>loading...</div>}>
//                 <Other></Other>
//             </Suspense>
//         )
//     }
// }


const App = () => (
    <div>
        <Button type="primary">123</Button>
    </div>
);

export default App;
