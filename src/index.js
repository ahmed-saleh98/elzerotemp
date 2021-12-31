import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import { Spinner } from "react-bootstrap";

import "./index.css";

const App = lazy(() => import("./App.js"));

const Loader = () => (
  <div className="loader">
    <Spinner style={{ width: 100, height: 100 }} animation="border" />
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={Loader()}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
