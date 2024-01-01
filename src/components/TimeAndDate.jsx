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
    <div className="border-1 flex w-1/3 items-center justify-center rounded-xl  border-gray-800 bg-[#444444] text-white shadow-sm shadow-[#00d8ff]">
      <div className="flex flex-col  items-center  space-y-3">
        <div
          className={`font-bold ${
            locationData.name && locationData.name.length > 25
              ? "text-xl"
              : "text-3xl"
          } mb-4`}
        >
          {locationData.name}
        </div>
        <div className="mt-7 flex flex-col space-y-1 text-center">
          <div className="text-6xl font-semibold">
            {formatTimestamp(locationData.localtime).time}
          </div>
          <div className="text-lg font-semibold">
            {formatTimestamp(locationData.localtime).weekday},{" "}
            {formatTimestamp(locationData.localtime).dayMonth}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeAndDate;
