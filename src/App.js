import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <a href="/">Open-source code</a> by Jasmine Oriola
        </footer>
      </div>
    </div>
  );
}
