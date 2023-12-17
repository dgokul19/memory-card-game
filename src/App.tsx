import React, { Fragment } from "react";
import { Provider } from "react-redux";

// Components
import Dashboard from "./components/Dashboard";

// Redux Store
import { store } from "./store/store";

const App = () => {
    return (
        <Fragment>
            <Provider store={store}>
                <Dashboard />
            </Provider>
        </Fragment>
    );
};

export default App;