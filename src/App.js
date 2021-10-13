import { useState } from "react";
import Data from "./data.json";
import Profile from "./components/profile";
import Card from "./components/card";

const CardColors = [
  { title: "Work", color: "hsl(15, 100%, 70%)" },
  { title: "Play", color: "hsl(195, 74%, 62%)" },
  { title: "Study", color: "hsl(348, 100%, 68%)" },
  { title: "Exercise", color: "hsl(145, 58%, 55%)" },
  { title: "Social", color: "hsl(264, 64%, 52%)" },
  { title: "Self Care", color: "hsl(43, 84%, 65%)" },
];

const App = () => {
  const [data] = useState(
    Data.map((item) => {
      return {
        ...item,
        img: item.title.split(" ").join("-").toLocaleLowerCase(),
      };
    })
  );

  const [filters] = useState(["daily", "weekly", "monthly"]);

  const [selectedFilter, setSelectedFilter] = useState("daily");

  return (
    <ul className="w-11/12 grid gap-4 md:grid-cols-4 md:grid-rows-2 max-w-4xl">
      <Profile
        filters={filters}
        setSelectedFilter={setSelectedFilter}
        selectedFilter={selectedFilter}
      ></Profile>

      {data.map((cardData) => (
        <Card
          key={cardData.title}
          cardData={cardData}
          selectedFilter={selectedFilter}
          bgColor={
            CardColors.find((item) => item.title === cardData.title).color
          }
        ></Card>
      ))}
    </ul>
  );
};

export default App;
