const Hero = () => {
  return (
    <section className="text-center py-20 bg-gradient-to-b from-purple-100 to-white">
      <h1 className="text-4xl md:text-5xl font-bold text-pink-600">
        Discover Your Family Story
      </h1>
      <p className="mt-4 text-gray-600 max-w-xl mx-auto">
        Build, explore, and share your family tree with an intuitive and beautiful experience.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <button className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition">
          Get Started
        </button>
        <button className="border border-pink-600 text-pink-600 px-6 py-2 rounded-full hover:bg-pink-50 transition">
          View Demo
        </button>
      </div>
    </section>
  );
};

export default Hero;
