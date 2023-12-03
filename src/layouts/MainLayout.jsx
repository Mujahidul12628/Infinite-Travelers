import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-zinc-800 min-h-screen mx-auto px-2 text-zinc-50">
      <Outlet />
    </div>
  );
};

export default MainLayout;
