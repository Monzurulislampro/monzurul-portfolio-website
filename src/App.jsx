import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Routes/Routes'
function App() {

  return (
<div className='max-w-screen-xl mx-auto overflow-hidden'>
  <RouterProvider router={router}></RouterProvider>
</div>
  )
}

export default App
