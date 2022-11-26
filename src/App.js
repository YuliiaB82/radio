import "./App.css";
import { CardHolder } from "./components/cards-holder";

const moodList = [
  { emotion: "Energy", color: "#F5B971" },
  { emotion: "Peace & Calm", color: "#AAC4FF" },
  { emotion: "Happiness & Optimism", color: "#FFF89A" },
  { emotion: "Passion & Excitement", color: "#FF8080" },
  { emotion: "Nature & Simplicity", color: "#796465" },
  { emotion: "Nature & Life", color: "#CBE2B0" },
  { emotion: "Intrigue & Spirituality", color: "#CAABD8" },
  { emotion: "Love & Compassion", color: "#F5B0CB" },
];

function App() {
  return (
    <div className="App">
      <CardHolder
        cards={moodList.map((item) => {
          return {
            title: item.emotion,
            color: item.color,
          };
        })}
      />
    </div>
  );
}

export default App;
