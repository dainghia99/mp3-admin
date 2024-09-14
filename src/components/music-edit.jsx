import { useState } from "react";
import axios from "axios";

function MusicEdit() {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [album, setAlbum] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const editData = { title, author, album, year, genre };

        try {
            const response = await axios.put(
                `http://localhost:3000/api/music/${id}`,
                editData
            );
            console.log("Edit successful:", response.data);
            // Reset form after successful edit
            setId("");
            setTitle("");
            setAuthor("");
            setAlbum("");
            setYear("");
            setGenre("");
            // Optionally reload the page or update the music list
            // window.location.reload();
        } catch (error) {
            console.error("Edit failed:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Music ID"
                required
            />
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="New Title"
                required
            />
            <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="New Author"
                required
            />
            <input
                type="text"
                value={album}
                onChange={(e) => setAlbum(e.target.value)}
                placeholder="New Album"
                required
            />
            <input
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="New Year"
                required
            />
            <input
                type="text"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                placeholder="New Genre"
                required
            />
            <button type="submit">Edit Music</button>
        </form>
    );
}

export default MusicEdit;
