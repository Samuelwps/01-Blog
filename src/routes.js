import {BrowserRouter, Switch, Route} from "react-router-dom";

import Main from  './pages/Main'

import Article from  './pages/Article'

import article1 from "./pages/ArticlesDesc/1"
import article2 from "./pages/ArticlesDesc/2"
import article3 from "./pages/ArticlesDesc/3"

const Routes = () => {
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/article" component={Article}/>
            <Route path="/1" component={article1}/>
            <Route path="/2" component={article2}/>
            <Route path="/3" component={article3}/>
            
        </Switch>
    </BrowserRouter>);
}

export default Routes; 