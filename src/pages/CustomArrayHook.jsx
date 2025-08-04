import useArray from "../components/useArray";

export default function CustomArrayHook() {
  const defaultValue = ['apple', 'banana'];
  const { array, push, update, remove, filter, set, clear } = useArray(defaultValue);

  return (
    <div className="flex flex-col items-start gap-4 p-6 max-w-md mx-auto bg-white shadow-md rounded-xl border">
      <h2 className="text-xl font-semibold text-gray-800">Fruit List</h2>
      
      <p className="text-gray-700">
        <span className="font-medium">Fruits:</span> {array.join(', ')}
      </p>
      
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => push('orange')}
          className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition"
        >
          Add orange
        </button>
        
        <button
          onClick={() => update(1, 'grape')}
          className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition"
        >
          Change second item to grape
        </button>
        
        <button
          onClick={() => remove(0)}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
        >
          Remove first
        </button>
        
        <button
          onClick={() => filter((fruit) => fruit.includes('a'))}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
        >
          Keep fruits containing 'a'
        </button>
        
        <button
          onClick={() => set(defaultValue)}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
        >
          Reset
        </button>
        
        <button
          onClick={clear}
          className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition"
        >
          Clear list
        </button>
      </div>
    </div>
  );
}
