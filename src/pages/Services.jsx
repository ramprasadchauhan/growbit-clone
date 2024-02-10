const Services = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(https://www.shutterstock.com/image-photo/businessman-using-laptop-computer-office-260nw-2161819863.jpg)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <div className="min-h-screen text-white text-center left-2/4 flex flex-col content-center justify-center items-center">
          <p className="text-6xl font-semibold">Our Services</p>
          <p className="text-xl mt-4">
            We are a creative company that focuses on establishing
          </p>
          <p className="text-xl">long-term relationships with customers.</p>
        </div>
      </div>
      <div className="bg-gray-200 py-8 min-h-screen flex flex-col items-center">
        <div className="max-w-screen-md flex pt-24 flex-col gap-4 items-center justify-around mt-10">
          <p className="uppercase text-slate-500 font-bold ">OUR PROCESS</p>
          <h3 className="text-5xl text-center">
            Find out everything you need to know about creating a marketing
            process model
          </h3>
          <div className="flex gap-x-8 mt-8 pt-8 pb-12">
            <div className="flex flex-col gap-1 px-4 max-w-64 text-center leading-6">
              <p className="text-2xl">1.Concept</p>
              <p className=" text-gray-600">
                Develop a sound strategy and create a compelling proposal.
              </p>
            </div>
            <div className="flex flex-col gap-1 px-4 max-w-64 text-center leading-6">
              <p className="text-2xl">2. implementation</p>
              <p className=" text-gray-600">
                Implementation tailored to your needs.
              </p>
            </div>
            <div className="flex flex-col gap-1 px-4 max-w-64 text-center leading-6">
              <p className="text-2xl">3. Results</p>
              <p className=" text-gray-600">
                Results that speak for themselves
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 min-h-screen flex flex-col items-center">
        <div className="max-w-screen-md flex pt-24 flex-col gap-4 items-center justify-around mt-10">
          <p className="uppercase text-slate-500 font-bold ">
            JOIN OUR COMMUNITY
          </p>
          <h3 className="text-5xl text-center">
            We are trusted by over 5000+ clients. Join them now and grow your
            business.
          </h3>
          <div className="flex gap-x-8 mt-8 pt-8">
            <div className="flex flex-col gap-1 px-4">
              <p className="text-violet-500 text-5xl font-bold">4000+</p>
              <p>Cities we Covered</p>
            </div>
            <div className="flex flex-col gap-1 px-4">
              <p className="text-violet-500 text-5xl font-bold">700k</p>
              <p>Satisfied Customers</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-violet-500 text-5xl font-bold">300k</p>
              <p>Expert Employees</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
