const Banner = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
        Discover an exceptional cooking class tailored for you!
      </h1>
      <p className="text-lg md:text-xl mb-8 text-center max-w-2xl">
        Learn to cook delicious meals with professional chefs. Enhance your culinary skills and create unforgettable dining experiences for your family and friends.
      </p>
      <div className="flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
          Get Started
        </button>
        <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Banner;
