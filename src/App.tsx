import { Route, Routes, useRoutes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Blogs from './pages/Blogs'
import BlogPage from './pages/BlogPage'
import BlogLayout from './pages/BlogLayout'
import NotFound from './pages/NotFound'
import SignUp from './pages/Signup'

function App() {
  // let element=useRoutes([
  //   {
  //     path: '/',
  //     // element: <Home />,
  //     children: [
  //       {
  //         index: true,
  //         element: <Home />,
  //       },
  //       {
  //         path: 'blog',
  //         element: <BlogLayout/>,
  //         children: [
  //           {
  //             index: true,
  //             element: <Blogs />,
  //           },
  //           {
  //             path: ':id',
  //             element: <BlogPage />
  //           }
  //         ]
  //       }
  //     ],
  //   },
  //   {
  //     path: '*',
  //     element: <NotFound/>
  //   }
  // ])

  return (
    <div className='font-[Montserrat]'>
      <Navbar/>
      {/* {element} */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/blog' element={<BlogLayout/>}>
          <Route index element={<Blogs />}/>
          <Route path='/blog/:id' element={<BlogPage />}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
