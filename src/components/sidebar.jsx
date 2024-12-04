import React from "react";

const menus = [
  {
    title: "Dashboard",
  },
  {
    title: "Products",
  },

  {
    title: "Orders",
  },

  {
    title: "Customers",
  },

  {
    title: "Reports",
  },
];

export default function Sidebar() {
  return (
    <div
      // className="sidebar"
      className="w-64 bg-slate-100 h-screen"
    >
      <ul>
        {menus.map((menu) => {
          return <li key={menu.title}>{menu.title}</li>;
        })}
      </ul>
    </div>
  );
}
