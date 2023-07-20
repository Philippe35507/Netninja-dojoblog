import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <h1>The Dojo Blog</h1>
          <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/create">New blog</NavLink>
          </div>
        </nav>
      </header>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
