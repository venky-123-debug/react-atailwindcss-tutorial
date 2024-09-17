import "../index.css"

const Navbar = () => {
  return (
    <nav className="h-20 flex select-none items-center justify-between px-20 bg-blue-500 text-white">
      <p>React Tutorials</p>
      <div className="flex gap-3">
        <a className="links" href="/">Home</a>
        <a className="links" href="/create">New Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
