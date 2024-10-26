import { useState } from "react";

const User = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="user-card">
            <h1>Count(functional): {count}</h1>
            <button onClick={() => {
                setCount(count + 1);
            }}>Increment</button>
            <h2>Name: Abhinav Rai</h2>
            <h3>Location: Varanasi</h3>
            <h2>Contact: @abhiRai24</h2>
        </div>
    );
}

export default User;