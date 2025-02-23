import AllPublisher from "./../components/home/AllPublisher.jsx";
import Banner from "./../components/home/Banner.jsx";
import Features from "./../components/home/Features";
import PowerRankings from "./../components/home/PowerRankings";
import TransferNews from "./../components/home/TransferNews";
import TrendingNews from './../components/home/TrendingNews';


export default function Home() {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto max-w-screen-2xl">
      <div className="mt-6 mb-12">
        <Banner />
      </div>
      <div className="mt-6 mb-12">
        <TrendingNews />
      </div>
      <div className="mt-6 mb-12 flex flex-col justify-between md:flex-row gap-6">
        <div className="w-full md:w-7/12 lg:w-9/12">
          <TransferNews />
        </div>
        <div className="w-full md:w-5/12 lg:w-3/12">
          <PowerRankings />
        </div>
      </div>
      <div className="mt-6 mb-12">
        <Features />
      </div>
      <div className="mt-6 mb-12">
        <AllPublisher />
      </div>
    </div>
  );
}
