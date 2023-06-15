import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./components/home.page";
import { SuperheroesPage } from "./components/superheroes.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/super-heroes">
            <SuperheroesPage />
          </Route>
          <Route path="/rq-super-heroes">
            <RQSuperHeroesPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
