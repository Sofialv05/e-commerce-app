export default function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 h-4/5 gap-5">
      <div className="w-full lg:col-span-2 h-full">
        <img
          className="w-full h-full object-cover "
          src="https://images.unsplash.com/photo-1491926626787-62db157af940?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="main-banner"
        />
      </div>
      <div className="flex flex-row gap-5 w-full  lg:flex-col">
        <div className="w-full ">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=2516&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="sub-banner"
          />
        </div>
        <div className="w-full ">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2516&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="sub-banner"
          />
        </div>
      </div>
    </div>
  );
}
