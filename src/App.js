import React  from "react";
import { Provider } from "react-redux";
import DashBoard from './DashBoard';
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <DashBoard />
    </div>
    </Provider>
  );
}

export default App;
