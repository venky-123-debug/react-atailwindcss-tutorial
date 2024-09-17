const Home = () => {

  const handleClick = () => {
    console.log("hello");
    
  }
  return (
    <div className="flex flex-col gap-12 items-center justify-center">
      <h1 className="text-white text-lg text-center">Home page</h1>
      <button type="button" className="rounded-md bg-blue-500 text-base text-white hover:bg-blue-600 active:bg-blue-500 min-w-[36px] px-2 py-1.5" onClick={handleClick}>Click</button>
    </div>
  );
};

export default Home;
