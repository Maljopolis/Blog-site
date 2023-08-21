import { useState } from "react";


const Home = () => {
    const[blogs, setBlogs] = useState([
        { title: 'Moja nova stranica', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Zabava dobrodošlice!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
    return (  
        <div className="Home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Napisao {blog.author}</p>
                </div>
            ))}
             
        </div>
    );
}

export default Home;