const Profile = ({ filters, setSelectedFilter, selectedFilter }) => {
  return (
    <li className="rounded-lg overflow-hidden bg-indigo-900 list-none md:row-span-2">
      <div className="bg-indigo-600 rounded-lg flex p-4 gap-4 items-center md:flex-col md:items-start">
        <img
          className="w-1/4 border-4 border-white rounded-full md:w-1/2"
          src={"./assets/image-jeremy.png"}
          alt=""
        />
        <div>
          <span className="text-gray-300 font-thin">Report for</span>
          <h4 className="text-white text-2xl font-thin md:text-4xl md:mb-12">
            Jeremy Robson
          </h4>
        </div>
      </div>
      <ul className="flex justify-between p-4 md:flex-col md:items-start gap-4">
        {filters.map((filterItem) => (
          <li
            onClick={() => setSelectedFilter(filterItem.toLowerCase())}
            className={`${
              filterItem === selectedFilter ? "text-white" : "text-gray-400"
            } hover:text-white transition duration-300 capitalize cursor-pointer`}
          >
            {filterItem}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Profile;
