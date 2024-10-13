"use client"
import featuredImg1 from "../../assets/sinp.png";
import featuredImg2 from "../../assets/sinp.png";
import featuredImg3 from "../../assets/sinp.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-12">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-purple-500">Welcome to Snapgram</h1>
          <p className="text-gray-400 mt-4">Discover amazing content, follow friends, and share moments.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-xl bg-[#1F1F22] p-6 shadow-lg hover:scale-105 transition-transform">
            <img src={featuredImg1} alt="Featured 1" className="w-full h-64 object-cover rounded-lg" />
            <h2 className="text-xl font-semibold mt-4">Explore Beautiful Destinations</h2>
            <p className="text-gray-400 mt-2">Find your next adventure with Snapgram travel posts.</p>
          </div>

          <div className="rounded-xl bg-[#1F1F22] p-6 shadow-lg hover:scale-105 transition-transform">
            <img src={featuredImg2} alt="Featured 2" className="w-full h-64 object-cover rounded-lg" />
            <h2 className="text-xl font-semibold mt-4">Follow Inspiring Creators</h2>
            <p className="text-gray-400 mt-2">Stay updated with the latest posts from your favorite influencers.</p>
          </div>

          <div className="rounded-xl bg-[#1F1F22] p-6 shadow-lg hover:scale-105 transition-transform">
            <img src={featuredImg3} alt="Featured 3" className="w-full h-64 object-cover rounded-lg" />
            <h2 className="text-xl font-semibold mt-4">Join the Snapgram Community</h2>
            <p className="text-gray-400 mt-2">Connect with like-minded people and share your experiences.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;