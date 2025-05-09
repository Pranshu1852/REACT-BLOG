import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function Blogs() {
  const { data, loading, error } = useFetch('http://localhost:1337/api/blogs');

  if(loading){
    return <h2>Loading...</h2>
  }

  if(error){
    return <h2>Something went wrong...</h2>
  }

  console.log(data);
  

  return (
    <div className="flex flex-col gap-10 p-10">
      Blogs
      <Link to="/blog/1">Blog 1</Link>
      <Link to="/blog/2">Blog 2</Link>
      <Link to="/blog/3">Blog 3</Link>
    </div>
  );
}

export default Blogs;
