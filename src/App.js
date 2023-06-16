import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/Home.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { ReactQueryDevTools, ReactQueryDevtools } from "react-query/devtools";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import { QueryClient, QueryClientProvider } from "react-query";
import { RQSuperHeroPage } from "./components/RQSuperHero.page";
import { ParallelQueriesPage } from "./components/ParallelQueries.page";
import { DynamicParallelQueriesPage } from "./components/DynamicParallelQueries.page";
import { DependentQueriesPage } from "./components/DependentQueries.page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
              <li>
                <Link to="/rq-parallel">Parallel Queries</Link>
              </li>
              <li>
                <Link to="/rq-dynamic-parallel">Dynamic Parallel Queries</Link>
              </li>
              <li>
                <Link to="/rq-dependant-queries">Dependent Queries</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/rq-parallel"
              element={<ParallelQueriesPage />}
            ></Route>
            <Route
              path="/rq-dependant-queries"
              element={<DependentQueriesPage />}
            ></Route>

            <Route
              path="/rq-dynamic-parallel"
              element={<DynamicParallelQueriesPage heroIds={[1, 3]} />}
            ></Route>
            <Route path="/super-heroes" element={<SuperHeroesPage />}></Route>
            <Route
              path="/rq-super-heroes"
              element={<RQSuperHeroesPage />}
            ></Route>
            <Route
              path="/rq-super-heroes/:heroId"
              element={<RQSuperHeroPage />}
            ></Route>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
