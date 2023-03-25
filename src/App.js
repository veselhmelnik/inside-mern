import { AppRoutes } from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
import "./components/components.css";
const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
