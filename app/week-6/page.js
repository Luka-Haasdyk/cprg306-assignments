import ItemList from "./item-list";

export default function Page() {
    return (
        <main>
            <h1 className="text-3xl font-bold ml-5 mt-3 mb-10"> Shopping List </h1>
            <ItemList/>
        </main>
    );
};