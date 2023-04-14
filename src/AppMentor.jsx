import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "Dell",
    title: "developer",
    mentor: {
      name: "Bob",
      title: "senior developer",
    },
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`What's your mentor's name ?`);
          setPerson((prev) => ({
            ...prev,
            mentor: { ...person.mentor, name },
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt(`What's your mentor's title ?`);
          setPerson((prev) => ({
            ...prev,
            mentor: { ...person.mentor, title },
          }));
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}
