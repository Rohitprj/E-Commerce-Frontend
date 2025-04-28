import Sidebar from "@/components/dashboardComp/Sidebar";
import React from "react";

export default function settings() {
  return (
    <div>
      <Sidebar />
      <main className="ml-64 p-10 w-full">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="mt-4 text-gray-600">This is the main content area.</p>
      </main>
    </div>
  );
}
