import "./css/App.css";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./views/pages/Home";

function App() {
  return (
    <DefaultLayout>
      <Home />
    </DefaultLayout>
  );
}

export default App;
