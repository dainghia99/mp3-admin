import { useState } from "react";
import axios from "axios";

function MusicUpload() {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [album, setAlbum] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("author", author);
        formData.append("album", album);
        formData.append("year", year);
        formData.append("genre", genre);

        try {
            const response = await axios.post(
                "http://localhost:3000/api/music",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log("Upload successful:", response.data);
            // Reset form after successful upload
            setFile(null);
            setTitle("");
            setAuthor("");
            setAlbum("");
            setYear("");
            setGenre("");
            window.location.reload();
        } catch (error) {
            console.error("Upload failed:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="file"
                onChange={handleFileChange}
                accept=".mp3"
                required
            />
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
            />
            <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author"
                required
            />
            <input
                type="text"
                value={album}
                onChange={(e) => setAlbum(e.target.value)}
                placeholder="Album"
                required
            />
            <input
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="Year"
                required
            />
            <input
                type="text"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                placeholder="Genre"
                required
            />
            <button type="submit">Upload</button>
        </form>
    );
}

export default MusicUpload;
