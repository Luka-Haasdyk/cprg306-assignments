export default function NewItemFunction ({currentQuantity, incrementFunction, decrementFunction}) {

    let btnIncrementDisable = false;
    let btnDecrementDisable = false;

    if (currentQuantity >= 20) {
        btnIncrementDisable = true;
    }

    if (currentQuantity <= 1) {
        btnDecrementDisable = true;
    }

    let btnStyle = "bg-blue-500 rounded-lg px-3 ml-1 mb-1 mt-1 w-9 h-3hover:bg-blue-600 active:bg-yellow-500 disabled:bg-gray-400 text-white font-bold";

    return (
        <div className="flex justify-center items-center bg-slate-100 p-1 text-black max-w-fit mx-auto">
            <p className="inline-block w-14 ml-1">{currentQuantity}</p>
            <button className={btnStyle} disabled={btnDecrementDisable} onClick={decrementFunction} > - </button>
            <button className={btnStyle} disabled={btnIncrementDisable} onClick={incrementFunction}> + </button>     
        </div>
    );
};