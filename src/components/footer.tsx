import React from "react";

export default function footer() {
  return (
    <div>
      <div className="flex">
        <h1 className="text-2xl">
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
