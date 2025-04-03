import React from "react";

export default function footer() {
  return (
    <div className="py-20 px-12">
      <div className="flex">
        <h1 className="text-5xl w-[550px]">
          Subscribe to get tips and tactics to grow the way you want.
        </h1>
        <li className="list-none font-bold">
          <ul>Taxes</ul>
          <ul>Terms of services</ul>
          <ul>Privacy policy</ul>
        </li>
        <li className="list-none font-bold">
          <ul>Features</ul>
          <ul>Pricing</ul>
          <ul>About</ul>
        </li>
      </div>
    </div>
  );
}
