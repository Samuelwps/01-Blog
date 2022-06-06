import {BrowserRouter, Switch, Route} from "react-router-dom";

import Main from  './pages/Main'

import Article from  './pages/Article'

import PostsArticles from "./componentes/PostsArticles"

const Routes = () => {
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/article" component={Article}/>
            <Route path="/1" component={PostsArticles}/>
            <Route path="/2" component={PostsArticles}/>
            <Route path="/3" component={PostsArticles}/>
            
        </Switch>
    </BrowserRouter>);
}

export default Routes; 