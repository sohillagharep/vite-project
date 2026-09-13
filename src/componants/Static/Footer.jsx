import React from "react";
export default function Footer() {
  return (
    <footer className="fixed-bottom d-flex align-items-center justify-content-center">
      <p>
        The End Of Our Page
        <span> CopyRight @{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
}