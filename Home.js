import { useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const[blogs, setBlogs] = useState([
        { title: 'Moja nova stranica', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Zabava dobrodošlice!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
    return (  
        <div className="Home">
            <BlogList blogs={blogs} title="Svi blogovi"/>
             
        </div>
    );
}

export default Home;
