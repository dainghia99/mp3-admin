import MusicUpload from "./components/music-upload";
import MusicEdit from "./components/music-edit";
import MusicDelete from "./components/music-delete";

function App() {
    return (
        <div className="App">
            <h2>Upload Music</h2>
            <MusicUpload />

            <h2>Edit Music</h2>
            <MusicEdit />

            <h2>Delete Music</h2>
            <MusicDelete />
        </div>
    );
}

export default App;
