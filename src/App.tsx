import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const pageRoutes = useRoutes(routes);

  return <Provider store={store}>{pageRoutes}</Provider>;
}

export default App;
