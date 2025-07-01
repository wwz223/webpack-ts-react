import React from "react";
import { createBrowserRouter, Link } from "react-router-dom";
import Home from "@/pages/index";
import Dashboard from "@/pages/dashboard/index";
import About from "@/pages/about";

const routers = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        path: "dashboard",
        Component: Dashboard,
      },
      {
        path: "about",
        Component: About,
      },
    ],
  },
  {
    path: "*", // 捕获所有未匹配的路由
    element: (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>404 - 页面未找到</h1>
        <Link to="/">返回首页</Link>
      </div>
    ),
  },
]);

export default routers;
