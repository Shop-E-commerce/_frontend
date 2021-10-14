import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./css/App.css";
import DefaultLayout from "./layout/DefaultLayout";
import { Home, Shop, Blog, About, Contact } from "./views/pages";

function App() {
  return (
    <Router>
      <DefaultLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </DefaultLayout>
    </Router>
  );
}

export default App;
