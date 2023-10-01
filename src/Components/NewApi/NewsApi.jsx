import { useEffect, useState } from "react";
import axios from "axios";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { Link } from "react-router-dom";

function NewsApi() {
  const [news, setNews] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const GETNEWSAPI =
    "https://newsapi.org/v2/everything?q=tesla&from=2023-09-01&sortBy=publishedAt&apiKey=b6cd6cb6df3d430eb7ce51dc729bacb3";

  async function getNews() {
    const response = await axios.get(GETNEWSAPI);
    setNews(response.data.articles);
  }

  useEffect(() => {
    getNews();
  }, []);

  // Pagination controls
  const totalPages = Math.ceil(news.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = news.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="h-screen">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {currentNews.map((newsArticle) => (
                <div className="p-4 md:w-1/3" key={newsArticle.id}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <Link to={newsArticle.url}>
                      <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={newsArticle.urlToImage}
                        alt="blog"
                      />
                    </Link>
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {newsArticle.author}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {newsArticle.title}
                      </h1>
                      <p className="leading-relaxed mb-3">
                        {newsArticle.description}
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <Link
                          to={newsArticle.url}
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-5 text-lg">
              <div className="flex items-center justify-center gap-10">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`flex items-center justify-between p-1 bg-blue-500 text-white px-4 py-2 rounded-md mr-2 ${
                    currentPage === 1
                      ? "bg-gray-300 text-gray-400 cursor-not-allowed"
                      : ""
                  }`}
                >
                  Previous
                </button>
                <FaLessThan />
                <span>{currentPage}</span> <FaGreaterThan />
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`bg-blue-500 text-white px-4 py-2 rounded-md ml-2 ${
                    currentPage === totalPages
                      ? "bg-gray-300 text-gray-400 cursor-not-allowed"
                      : ""
                  }`}
                >
                  Next
                </button>
              </div>
              <div className="flex text-xl border-1 border-slate-600">
                Page {currentPage} of {totalPages}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default NewsApi;
