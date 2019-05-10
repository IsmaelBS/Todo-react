import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./config/reactotronConfig";
import Routes from "./routes";

console.tron.log("testando");
function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
