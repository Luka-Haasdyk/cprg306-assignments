export default function NewItemFunction({currentQuantity, incrementFunction, decrementFunction, handleSubmit, name, setName, category, setCategory,}) {
  let btnIncrementDisable = false;
  let btnDecrementDisable = false;

  if (currentQuantity >= 20) {
    btnIncrementDisable = true;
  }

  if (currentQuantity <= 1) {
    btnDecrementDisable = true;
  }

  let btnIncDecStyle = "bg-blue-500 rounded-lg px-3 ml-1 mb-1 mt-1 w-9 h-3hover:bg-blue-600 active:bg-yellow-500 disabled:bg-gray-400 text-white font-bold";
  let inputStyle = "w-full p-2 bg-white text-black border border-gray-600 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500";
  let selectStyle = "p-2 bg-white text-black border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-[40%]";
  let submitBtnStyle = "w-full p-2 bg-blue-500 rounded-lg hover:bg-blue-700 active:bg-blue-800 text-white font-bold";

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col bg-gray-900 p-4 text-black max-w-sm mx-auto rounded-lg shadow-md space-y-4 items-center">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Item name" required className={inputStyle}/>

        <div className="inline-flex w-full justify-between">
          <div className="inline-flex items-center bg-white text-black p-2 border border-gray-600 rounded-lg w-[40%]">
            <p className="inline-block w-14 ml-1">{currentQuantity} </p>
            <button type="button" className={btnIncDecStyle} disabled={btnDecrementDisable} onClick={decrementFunction}>
              −
            </button>
            <button type="button" className={btnIncDecStyle} disabled={btnIncrementDisable} onClick={incrementFunction}>
              +
            </button>
          </div>

          <select value={category} onChange={(e) => setCategory(e.target.value)} className={selectStyle}>
            <option value="" disabled selected>Category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button type="submit" className={submitBtnStyle}>
          +
        </button>
      </div>
    </form>
  );
}
