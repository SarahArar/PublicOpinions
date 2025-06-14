import React from "react";

export default function AppHeader({ title }) {
  return (
    <header className="w-full bg-white p-4 border-b shadow-sm text-right d-flex justify-content-center align-items-center">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
    </header>
  );
}

