import { Route, Routes } from 'react-router-dom'
import BillApp from './components/BillApp'
import NewUi from './components/NewUi'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BillApp/>} />
    </Routes>
  )
}

export default App