export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="list-none m-4 bg-slate-900 p-2 w-1/2 cursor-pointer hover:bg-orange-700"
      onClick={onSelect}
    >
      <div className="text-xl font-bold">
        <h2> {name} </h2>
      </div>
      <div>
        <p className="text-sm">
          Buy {quantity} in {category}
        </p>
      </div>
    </li>
  );
}
