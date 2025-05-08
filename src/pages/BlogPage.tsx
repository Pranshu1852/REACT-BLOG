import { useOutletContext, useParams } from "react-router-dom";

function BlogPage() {
    const {id}=useParams();
    const {val}:{val: number}=useOutletContext();

    return (
        <div className="flex flex-col items-center justify-center text-3xl">
            <h1>Blog Page {id}</h1>
            <p>{val}</p>
        </div>
    );
}

export default BlogPage;