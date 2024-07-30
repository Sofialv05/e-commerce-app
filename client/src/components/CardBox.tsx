export default function CardBox() {
  return (
    <div className="box rounded-xl border border-gray-300 bg-white p-6 w-full md:max-w-sm">
      {/*  */}
      <div className="relative w-full max-w-sm">
        <svg
          className="absolute top-1/2 -translate-y-1/2 left-4 z-50"
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5555 3.33203H3.44463C2.46273 3.33203 1.66675 4.12802 1.66675 5.10991C1.66675 5.56785 1.84345 6.00813 2.16004 6.33901L6.83697 11.2271C6.97021 11.3664 7.03684 11.436 7.0974 11.5068C7.57207 12.062 7.85127 12.7576 7.89207 13.4869C7.89728 13.5799 7.89728 13.6763 7.89728 13.869V16.251C7.89728 17.6854 9.30176 18.6988 10.663 18.2466C11.5227 17.961 12.1029 17.157 12.1029 16.251V14.2772C12.1029 13.6825 12.1029 13.3852 12.1523 13.1015C12.2323 12.6415 12.4081 12.2035 12.6683 11.8158C12.8287 11.5767 13.0342 11.3619 13.4454 10.9322L17.8401 6.33901C18.1567 6.00813 18.3334 5.56785 18.3334 5.10991C18.3334 4.12802 17.5374 3.33203 16.5555 3.33203Z"
            stroke="black"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
        <select
          id="Offer"
          className="h-12 border border-gray-300 text-gray-900 pl-11 text-base font-normal leading-7 rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 focus-within:bg-gray-50"
        >
          <option selected>Sort by time(high to low)</option>
          <option value="option 1">option 1</option>
          <option value="option 2">option 2</option>
          <option value="option 3">option 3</option>
          <option value="option 4">option 4</option>
        </select>
        <svg
          className="absolute top-1/2 -translate-y-1/2 right-4 z-50"
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
            stroke="#111827"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {/*  */}
      <h6 className="font-medium text-base leading-7 text-black mb-5">
        Your Workspace
      </h6>
      <div className="flex items-center mb-5 gap-1">
        <div className="relative w-full">
          <select
            id="FROM"
            className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
          >
            <option selected>Min</option>
            <option value="option 1">option 1</option>
            <option value="option 2">option 2</option>
            <option value="option 3">option 3</option>
            <option value="option 4">option 4</option>
          </select>
          <svg
            className="absolute top-1/2 -translate-y-1/2 right-4 z-50"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
              stroke="#111827"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="px-1 font-normal text-sm leading-6 text-gray-600">to</p>
        <div className="relative w-full">
          <select
            id="FROM"
            className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
          >
            <option selected>Max</option>
            <option value="option 1">option 1</option>
            <option value="option 2">option 2</option>
            <option value="option 3">option 3</option>
            <option value="option 4">option 4</option>
          </select>
          <svg
            className="absolute top-1/2 -translate-y-1/2 right-4 z-50"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
              stroke="#111827"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-600 w-full"
      >
        Zip Code
      </label>
      <div className="relative w-full mb-8">
        <select
          id="FROM"
          className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
        >
          <option selected>Write code</option>
          <option value="option 1">option 1</option>
          <option value="option 2">option 2</option>
          <option value="option 3">option 3</option>
          <option value="option 4">option 4</option>
        </select>
        <svg
          className="absolute top-1/2 -translate-y-1/2 right-4 z-50"
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
            stroke="#111827"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <button className="w-full py-2.5 flex items-center justify-center gap-2 rounded-full bg-indigo-600 text-white font-semibold text-xs shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-200  ">
        <svg
          width={17}
          height={16}
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.4987 13.9997L13.1654 12.6663M13.832 7.33301C13.832 10.6467 11.1457 13.333 7.83203 13.333C4.51832 13.333 1.83203 10.6467 1.83203 7.33301C1.83203 4.0193 4.51832 1.33301 7.83203 1.33301C11.1457 1.33301 13.832 4.0193 13.832 7.33301Z"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Search
      </button>
    </div>
  );
}
