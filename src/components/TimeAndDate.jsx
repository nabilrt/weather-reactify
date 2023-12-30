const TimeAndDate = ({ locationData }) => {
  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);

    const formattedDate = {
      weekday: date.toLocaleString("en-US", { weekday: "long" }),
      dayMonth: `${date.getDate()} ${date.toLocaleString("en-US", {
        month: "short",
      })}`,
      time: date.toLocaleTimeString("en-US", {
        hour12: true,
        hour: "numeric",
        minute: "numeric",
      }),
    };

    return formattedDate;
  }

  return (
    <div className="w-1/3 bg-[#444444] rounded-xl text-white shadow-sm shadow-[#00d8ff]  flex justify-center items-center border-1 border-gray-800">
      <div className="flex flex-col  items-center  space-y-3">
        <div
          className={`font-bold ${
            locationData.name && locationData.name.length > 25 ? "text-xl" : "text-3xl"
          } mb-4`}
        >
          {locationData.name}
        </div>
        <div className="flex flex-col space-y-1 text-center mt-7">
          <div className="font-semibold text-6xl">
            {formatTimestamp(locationData.localtime).time}
          </div>
          <div className="font-semibold text-lg">
            {formatTimestamp(locationData.localtime).weekday},{" "}
            {formatTimestamp(locationData.localtime).dayMonth}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeAndDate;
