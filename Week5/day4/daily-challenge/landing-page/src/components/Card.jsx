const Card = (props) => {
  return (
    <div className="flex flex-col gap-5 items-center rounded-lg shadow-2xl px-10 py-7 max-w-xs bg-white max-md:max-w-lg">
      {props.icon}
      <h2 className="text-center text-2xl font-semibold">Fast Performance</h2>
      <p>
        Our landing page loads quickly and runs smoothly accress all devices.
      </p>
    </div>
  );
};

export default Card;
