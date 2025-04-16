import React from "react";

const VideoSection = () => {
  const videos = [
    {
      url: "http://dev.smartceo.co.in/Video1.mp4",
      title: "Business Growth Strategies",
      description: "Learn actionable strategies to scale your business and overcome common challenges."
    },
    {
      url: "http://dev.smartceo.co.in/Video2.mp4", // Assuming the second video follows similar naming
      title: "Leadership Insights",
      description: "Discover key leadership principles that drive successful organizations."
    }
  ];

  return (
    <section className="py-16 px-6 lg:px-24 relative overflow-hidden">
      {/* Section heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
          Featured Insights
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-black/60 dark:text-white/60">
          Watch our experts share valuable insights and strategies to help elevate your business
        </p>
      </div>

      {/* Video container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {videos.map((video, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-xl bg-gradient-to-b from-black/5 to-white dark:from-white/5 dark:to-black">
            <div className="aspect-[15/16] relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
              <p className="text-black/60 dark:text-white/60">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;