import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Daily from "./routes/Daily";
import Home from "./routes/Home";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/daily">
                    <Daily />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
