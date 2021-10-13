const Card = ({ bgColor, cardData, selectedFilter }) => {
  return (
    <li
      style={{
        backgroundColor: bgColor,
        backgroundImage: `url("./assets/icon-${cardData.img}.svg")`,
      }}
      className="list-none pt-8  rounded-lg overflow-hidden bg-no-repeat bg-right-top"
    >
      <div className="rounded-lg bg-indigo-900 p-6 h-full hover:bg-indigo-400 cursor-pointer transition duration-300">
        <div className="flex justify-between items-center">
          <h5 className="text-white">{cardData.title}</h5>
          <img src="./assets/icon-ellipsis.svg" alt="" />
        </div>
        <div className="flex justify-between items-center md:flex-col md:items-start gap-4 mt-4">
          <h3 className="text-4xl text-white font-thin md:text-5xl">
            {cardData.timeframes[selectedFilter].current}hrs
          </h3>
          <span className="text-gray-300">
            Last Week-{cardData.timeframes[selectedFilter].previous}hrs
          </span>
        </div>
      </div>
    </li>
  );
};

export default Card;
