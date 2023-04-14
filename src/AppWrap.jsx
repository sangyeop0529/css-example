import React from "react";

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image="https://images.unsplash.com/photo-1680262719164-b1210bb8aad7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          name="jelly"
          size={200}
        />
        <p>안녕하세요!</p>
      </Navbar>

      <Navbar>
        <Avatar
          image="https://images.unsplash.com/photo-1680262719164-b1210bb8aad7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          name="jelly"
          size={100}
        />
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return <header style={{ backgroundColor: "yellow" }}>{children}</header>;
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={`${name}`}
        width={size}
        height={size}
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
}
