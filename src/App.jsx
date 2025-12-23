import { Route, Routes } from 'react-router-dom'
import BillApp from './components/BillApp'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BillApp/>} />
    </Routes>
  )
}

export default App