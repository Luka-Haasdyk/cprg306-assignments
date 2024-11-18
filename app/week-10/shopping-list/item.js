export default function Item({
  name,
  quantity,
  category,
  onSelect,
  onDelete,
  id,
}) {
  return (
    <li
      className="flex justify-between items-center list-none m-4 bg-slate-900 rounded p-2 w-1/2 cursor-pointer hover:bg-slate-600"
      onClick={onSelect}
    >
      <div className="flex flex-col">
        <div className="text-xl font-bold">
          <h2> {name} </h2>
        </div>
        <div>
          <p className="text-sm">
            Buy {quantity} in {category}
          </p>
        </div>
      </div>
      <button
        type="button"
        className="bg-red-500 hover:bg-red-700 text-white font-semibold rounded pl-10 pr-10 pt-1 pb-1 mr-4"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
