import React, {
    Suspense,
    Component
} from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    // Switch,
    // Redirect,
    // withRouter,
    // Prompt,
    // StaticRouter
} from "react-router-dom";

import './App.css';

import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

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

console.log(VisibleTodoList, 111);

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App;
