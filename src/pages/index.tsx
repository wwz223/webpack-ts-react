import { Outlet, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/Button";

export default function Home() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md mb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-4 py-4">
            <Link
              to="/"
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                isActive("/")
                  ? "bg-gray-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              首页
            </Link>
            <Link
              to="/dashboard"
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                isActive("/dashboard")
                  ? "bg-gray-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              仪表盘
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                isActive("/about")
                  ? "bg-gray-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              关于我们
            </Link>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4">
        <div className="bg-red-200 h-[100px]">123</div>
        <Button>submit</Button>
        <div className="bg-white rounded-lg p-8 shadow-md">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
