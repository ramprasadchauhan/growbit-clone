const AboutUs = () => {
  return (
    <div>
      <div className="min-h-screen text-white flex flex-col justify-center items-center bg-gradient-to-r from-pink-500 to-indigo-500">
        <p className="text-6xl font-semibold">About Us</p>
        <p className="text-xl mt-4">
          We are a digital and branding company that believes in
        </p>
        <p className="text-xl"> the power of creative strategy.</p>
      </div>
      <div className="flex mt-16 mb-10 mx-10 px-16 pt-20">
        <div className=" flex flex-col gap-4">
          <h1 className="text-3xl">Who Are You?</h1>
          <p className="text-xl max-w-[510px]">
            GrowBit Founded in 2019 by a team of experts with seasoned industry
            experience, GrowBit is pioneered in offering various Gig Marketplace
            services that satiate every business need.
          </p>
          <p className="mb-6 max-w-[510px]">
            Our lucid, fool-proof and comprehensive processes, which aligns with
            our clients’ requirements for delivering the projects, makes us
            stand apart and on par from our competitors.
          </p>
          <p className="mb-6 max-w-[510px]">
            GrowBit strives to enhance the business performance of their clients
            in minimum turnaround time. We cater to each and every need of our
            client’s business with competent and cost-effective services.
          </p>
          <p className="mb-6 max-w-[510px]">
            Working efficiently and meticulously to deliver at the dynamic pace
            of business gives us an edge over our competitors
          </p>
        </div>
        <div className="ml-8">
          <img
            src="https://www.growbit.in/assets/img/photos/about7.jpg"
            alt="img"
            className="rounded-xl hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
