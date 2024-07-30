export default function Card() {
  return (
    <div className="card rounded-md bg-base-200 w-auto shadow-xl">
      <figure className="px-10 pt-10">
        <div>IMAGE</div>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions flex flex-col w-full">
          <button className="btn w-full bg-gray-500 text-white hover:text-black hover:bg-gray-400">
            Add to Cart
          </button>
          <button className="btn w-full bg-gray-500 text-white hover:text-black hover:bg-gray-400">
            Add to wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
