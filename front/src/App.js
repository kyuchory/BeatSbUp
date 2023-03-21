import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Main from './routes/Main.js'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router >
  );
}

export default App;