import "./App.css";
import { Header, Footer } from "./components/index.js";
import { Outlet } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/store.js";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
}

export default App;
