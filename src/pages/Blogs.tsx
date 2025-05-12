import { Link } from 'react-router-dom';


function Blogs() {

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
