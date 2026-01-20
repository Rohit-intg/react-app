function ChildBox(props) {
  console.log(props)
  return (
    <div style={{ border: "2px solid blue", margin: "10px", padding: "10px" }}>
      <h3>{props.title}</h3>
      <p>{props.message}</p>

      {/* children will render HERE */}
      <div>{props.children}</div>
    </div>
  );
}

export default ChildBox;
