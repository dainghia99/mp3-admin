import { useState } from "react";
import axios from "axios";

function MusicDelete() {
    const [id, setId] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.delete(`http://localhost:3000/api/music/${id}`);
            console.log("Delete successful");
            // Reset form after successful delete
            setId("");
            // Optionally reload the page or update the music list
            // window.location.reload();
        } catch (error) {
            console.error("Delete failed:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Music ID to delete"
                required
            />
            <button type="submit">Delete Music</button>
        </form>
    );
}

export default MusicDelete;
