import AllPublisher from "@/components/home/AllPublisher.jsx";
import Banner from "@/components/home/Banner.jsx";
import TrendingNews from "@/components/home/TrendingNews.jsx";

export default function Home() {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto max-w-screen-2xl">
      <div className="mt-6 mb-12">
        <Banner />
      </div>
      <div className="mt-6 mb-12">
        <TrendingNews />
      </div>
      <div className="mt-6 mb-12">
        <AllPublisher />
      </div>
    </div>
  );
}
