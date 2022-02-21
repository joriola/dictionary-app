import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary App</header>

        <main>
          <Dictionary defaultKeyword="wanderlust" />
        </main>
        <footer className="text-center App-footer">
          <a href="/">Open-source code</a> by Jasmine Oriola
        </footer>
      </div>
    </div>
  );
}
