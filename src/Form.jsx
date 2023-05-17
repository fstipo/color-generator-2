import { useState } from "react"

const Form = ({ addColor }) => {
    const [color, setColor] = useState("#f15025");
    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(color);
    };

    return (
        <section className="container">
            <h4>Color Generator</h4>
            <form className="color-form" onSubmit={handleSubmit}>
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                <input type="text" value={color} placeholder="#f15025" onChange={(e) => setColor(e.target.value)} />
                <button type="submit" className="btn" style={{ backgroundColor: color }}>select</button>
            </form>
        </section>
    )
}
export default Form
