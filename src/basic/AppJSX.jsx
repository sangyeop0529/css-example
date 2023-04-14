import "./App.css";

function AppJSX() {
  const name = "Dell";
  const list = ["바닐라", "딸기", "바나나", "청포도"];
  return (
    <>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <h2>Hello</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        style={{ width: "200px", height: "200px" }}
        src="https://images.unsplash.com/photo-1681101378971-5f5dc4e5000e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1057&q=80"
        alt="sample"
      />
    </>
  );
}

export default AppJSX;
