import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div className="App">
      <Header />
      {notes.map((noteContent) => {
        return (
          <Note
            key={noteContent.key}
            title={noteContent.title}
            content={noteContent.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
