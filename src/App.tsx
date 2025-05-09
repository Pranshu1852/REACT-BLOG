import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Blogs from './pages/Blogs';
import BlogPage from './pages/BlogPage';
import NotFound from './pages/NotFound';
import SignUp from './pages/Signup';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { type StateType } from './store/store';

function App() {
  const { i18n } = useTranslation();
  const { language } = useSelector((state: StateType) => {
    return {
      language: state.general.language,
    };
  });

  useEffect(() => {
    i18n.changeLanguage(language);
  }, []);

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  // let element=useRoutes([
  //   {
  //     path: '/',
  //     // element: <Home />,
  //     // errorElement=<NotFound/>,
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
    <div className="font-[Montserrat]">
      <Navbar />
      {/* {element} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blog">
          <Route index element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
