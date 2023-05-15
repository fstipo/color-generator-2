import { useState } from "react"

const Form = () => {
    const [color, setColor] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form is submitted");
        console.log(color);
    };

    return (
        <section className="container">
            <h4>Color Generator</h4>
            <form className="color-form" onSubmit={handleSubmit}>
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                <input type="text" value={color} placeholder="#f15025" onChange={() => console.log("Hello Bety")} />
                <button type="submit" className="btn" style={{ backgroundColor: color }}>select</button>
            </form>
        </section>
    )
}
export default Form
