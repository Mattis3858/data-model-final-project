export default function NavBar() {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-end">
        <button className="bg-white text-black px-4 py-2 rounded-md shadow hover:bg-gray-200">
          知識溫度計
        </button>
      </div>
    </nav>
  );
}
