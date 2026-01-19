function ChildBox(props) {

  return (
    <div style={{ border: "2px solid blue", margin: "10px", padding: "10px" }}>
      <h3>{props.title}</h3>
      <p>{props.message}</p>
    </div>
  );
}

export default ChildBox;