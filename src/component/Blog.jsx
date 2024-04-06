import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch('http://localhost:4400/api/Blogs', {
      method: "Get",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => setBlogData(data))
      .catch(error => console.error('Error fetching blog data:', error));
  }, []);

  const addblog = async () => {
    const formData = {
      author:author,
      title: title,
      content: content
    };

   fetch('http://localhost:4400/api/Blog', {
      method: "Post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res=>res.json())
    .then(data=>console.log(data))
    alert("posted")

    
  };

  return (
    <>
      <Navbar />
      <section className="bg-light py-3 py-md-5 btn2">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h1>BLOG</h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-lg-center">
            <div className="col-12 col-lg-9">
              <div className="bg-white border rounded shadow-sm overflow-hidden">
                <form action="#!">
                  <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                    <div className="col-12 col-md-4">
                      <label className="form-label">Name </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                          </svg>
                        </span>
                        <input type="text" id="name" name="name" value={author} onChange={(e) => setAuthor(e.target.value)} />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <label htmlFor="title" className="form-label">Title</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                          </svg>
                        </span>
                        <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="content" className="form-label">Content <span className="text-danger">*</span></label>
                      <textarea className="form-control" id="content" name="content" rows="3" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
                    </div>

                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn btn-primary btn-lg" type="button" onClick={addblog}>Post</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
        blogData.map((item, index) => (
          <div key={index} className="post">
            <h1>{item.title}</h1>
            <h2>{item.author}</h2>
            <div>{item.content}</div>
          </div>
        ))
      }
      <Footer/>
    </>
  );
};

export default Blog;
