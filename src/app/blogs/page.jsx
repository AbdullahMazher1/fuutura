import Blogs from "@/components/blogs/blogs";
import Contact from "@/components/blogs/Contact";
import Hero from "@/components/blogs/Hero";

const page = () => {
    return (
        <div>
            <Hero/>
            <Blogs/>
            <Contact/>
        </div>
    );
};

export default page;
