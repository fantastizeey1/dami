import React from "react";

const BlogRightSidebar = () => {
  return (
    <div className="bg-gray-100">
      <section className="shop_banner new_home_style relative">
        <div className="header_overlay absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 text-white">
              <h2 className="text-4xl font-bold mb-4">Blog Right Sidebar</h2>
              <p className="text-lg">
                Phasellus varius eros elementum ipsum semper, id condimentum
                massa cursus. Integer egestas felis sit amet neque hendrerit,
                eget gravida nulla lacinia.
              </p>
            </div>
            <div className="w-full md:w-1/2 text-center">
              <img
                src="assets/image/2019/02/contact-bread.png"
                alt="Header Image"
                className="w-full h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="blog_area container mx-auto px-4 py-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/3">
            {[1, 2, 3].map((_, index) => (
              <article key={index} className="mb-8 bg-white p-6 shadow rounded">
                <a href="blog-single.html" className="block mb-4">
                  <img
                    src={`assets/image/2018/02/blog-${index + 1}.png`}
                    alt="Blog"
                    className="w-full h-auto rounded"
                  />
                </a>
                <div className="blog-content">
                  <ul className="flex text-sm text-gray-500 space-x-4 mb-4">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true"></i>
                      <span className="ml-1">February 20, 2018</span>
                    </li>
                    <li>
                      <i className="fa fa-user" aria-hidden="true"></i>
                      <span className="ml-1">Droit Themes</span>
                    </li>
                  </ul>
                  <a
                    href="blog-single.html"
                    className="text-2xl font-bold text-gray-800"
                  >
                    Blog Title {index + 1}
                  </a>
                  <p className="mt-4 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec vestibulum aliquam scelerisque. Morbi vitae nisl
                    laoreet, tempor metus ut, convallis erat.
                  </p>
                </div>
              </article>
            ))}
            <div className="pagination flex justify-center mt-8">
              <ul className="flex space-x-2">
                <li>
                  <button className="px-3 py-1 border border-gray-300 rounded bg-gray-200">
                    1
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 border border-gray-300 rounded">
                    2
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 border border-gray-300 rounded">
                    &hellip;
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 border border-gray-300 rounded">
                    5
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 border border-gray-300 rounded">
                    &raquo;
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-4">
            <div className="bg-white p-6 shadow rounded mb-8">
              <h2 className="text-xl font-bold mb-4">Search</h2>
              <form action="#" className="flex">
                <input
                  type="search"
                  name="s"
                  className="w-full p-2 border border-gray-300 rounded-l"
                  placeholder="Search"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded-r"
                >
                  <i className="ti-search"></i>
                </button>
              </form>
            </div>
            <div className="bg-white p-6 shadow rounded mb-8">
              <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-500">
                    Assign Task
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-500">
                    Product Explanation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-500">
                    SEO Complete Analytics
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogRightSidebar;
