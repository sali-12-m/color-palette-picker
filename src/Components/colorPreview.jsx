function ColorPreview({ color }) {
  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: color.toLowerCase(),
          margin: "20px auto",
          border: "2px solid black",
          borderRadius: "10px",
        }}
      ></div>

      <h3>Selected Color: {color}</h3>
    </div>
  );
}

export default ColorPreview;