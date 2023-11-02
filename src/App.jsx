import "./App.css";
import play from "./assets/play.webp";
import apple from "./assets/apple.png";

function App() {
  return (
    <div className="main">
      <div className="buttons">
        <button
          className="play"
          onClick={() =>
            (window.location.href =
              "https://play.google.com/store/apps/details?id=com.uss.eksoar&launch=true")
          }
        >
          <img src={play} />
          <p>
            Prova dal tuo <p className="device">Android</p>
          </p>
        </button>
        <button
          className="play"
          onClick={() =>
            (window.location.href =
              "https://apps.apple.com/pk/app/ekso/id6470757516")
          }
        >
          <img src={apple} />
          <p>
            Prova dal tuo <p className="device">Apple</p>
          </p>
        </button>
      </div>
    </div>
  );
}

export default App;
