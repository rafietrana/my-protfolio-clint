

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      title: "Blog Post Title 1",
      excerpt: "This is a short excerpt of the first blog post. It gives a brief overview of the content.",
      imageUrl: "https://www.shutterstock.com/shutterstock/photos/2323228625/display_1500/stock-photo-technology-concept-ai-artificial-intelligence-for-business-people-using-ai-smart-robot-technology-2323228625.jpg"
    },
    {
      id: 2,
      title: "Blog Post Title 2",
      excerpt: "This is a short excerpt of the second blog post. It gives a brief overview of the content.",
      imageUrl: "https://www.shutterstock.com/shutterstock/photos/2178995535/display_1500/stock-photo-african-american-coder-using-computer-at-desk-web-developer-2178995535.jpg"
    },
    {
      id: 3,
      title: "Blog Post Title 3",
      excerpt: "This is a short excerpt of the third blog post. It gives a brief overview of the content.",
      imageUrl: "https://www.shutterstock.com/image-photo/focused-skilled-afro-american-girl-260nw-1696088788.jpg"
    }
  ];

  return (
    <section className=" text-white py-10 pb-40 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map(post => (
          <div key={post.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2">
            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${post.imageUrl})` }}></div>
            <div className="p-5">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <a href="#" className="text-purple-400 font-semibold hover:underline">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
