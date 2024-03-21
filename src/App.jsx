import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Routes/Routes'
function App() {

  return (
<div className='max-w-screen-xl mx-auto font-madi overflow-hidden overflow-clip'>
  <RouterProvider router={router}></RouterProvider>
</div>
  )
}

export default App
