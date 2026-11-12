const Card = (params) => {
  return (
    <div className="max-w-md bg-white shadow rounded p-4">
      <img
        src={params.imageUrl}
        alt={params.buttonLabel}
        className="rounded mb-3"
      />
      <h2 className="text-xl font-bold mb-2">{params.title}</h2>
      <p className="text-gray-600 mb-3">{params.description}</p>
      <a
        className="bg-blue-500 text-white px-4 py-2 rounded"
        href={params.buttonUrl}
      >
        Go somewhere
      </a>
    </div>
  );
};

export default Card;
