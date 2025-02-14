import AllPublisher from "@/components/home/AllPublisher";
import TrendingNews from "@/components/home/TrendingNews";

export default function Home() {
  return (
    <div className="min-h-screen w-11/12 md:w-10/12 mx-auto max-w-screen-2xl">
      <div className="mt-6 mb-12"><TrendingNews /></div>
      <div className="mt-6 mb-12"><AllPublisher /></div>
    </div>
  );
}
