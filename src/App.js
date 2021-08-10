import "./styles/app.css";

import NavigationBar from "./common/NavigationBar";
import HomePage from "./views/HomePage";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HomePage />
    </div>
  );
}

export default App;
