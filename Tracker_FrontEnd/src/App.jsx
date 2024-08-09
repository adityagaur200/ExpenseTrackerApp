import Homepage from "./components/HomePage/HomePage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./components/Layout";
import TransactionPage from "./components/TransactionPage/TransactionPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Transaction" element={<TransactionPage/>}/>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
