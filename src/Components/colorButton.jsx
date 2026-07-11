

function ColorButton({ color, onClick, isSelected }){
    return(
        <button onClick={onClick}
        style={{
            backgroundColor: color.toLowerCase(),
            color: "white", padding: "10px 20px", margin: "5px",
            border: isSelected ? "3px solid black" : "none",
            borderRadius:"5px", cursor: "pointer",
        }}>{color}</button>
    );
}

export default ColorButton