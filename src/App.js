import * as React from "react";
import Review from "./Components/Review";
import { NotificationContainer } from "react-notifications";

function App() {
  return (
    <div className="App">
      <Review />
      <NotificationContainer />
    </div>
  );
}

export default App;
