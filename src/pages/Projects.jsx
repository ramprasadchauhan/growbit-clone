const Projects = () => {
  return (
    <div>
      <div className="min-h-screen text-white flex flex-col justify-center items-center bg-blue-950">
        <p className="text-6xl font-semibold">Projects</p>
        <p className="text-xl mt-4">
          We are a digital and branding company that believes in
        </p>
        <p className="text-xl"> the power of creative strategy.</p>
      </div>
      <div className="flex flex-col gap-y-10">
        <div>
          <div className="flex justify-center items-center my-4">
            <div>
              <img
                src="https://www.growbit.in/assets/img/photos/pd7.png"
                alt="img"
                className="h-[80vh] rounded-lg"
              />
            </div>
            <div className="max-w-96 p-4 flex flex-col justify-center items-center bg-slate-50 rounded-lg relative right-8 gap-8">
              <p className="text-blue-400 font-semibold text-2xl">Branding</p>
              <p className="text-4xl font-bold">Amazon Pay</p>
              <p>
                we have done 13 Lakhs+ shops branded & Onboarded for amazon just
                in 8 months.
              </p>
              <a className="text-blue-400 font-semibold text-2xl" href="#">
                See Projects &rarr;
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center my-4">
            <div className="max-w-96 p-4 flex flex-col justify-center items-center bg-slate-50 rounded-lg relative left-8 gap-8">
              <p className="text-green-400 font-semibold text-2xl">Branding</p>
              <p className="text-4xl font-bold">WhatsApp</p>
              <p>
                we have done 1 Lakhs+ shops branded & Onboarded for amazon just
                in 3 months.
              </p>
              <a className="text-green-400 font-semibold text-2xl" href="#">
                See Projects &rarr;
              </a>
            </div>
            <div>
              <img
                src="https://www.growbit.in/assets/img/photos/pd8.png"
                alt="img"
                className="h-[80vh] rounded-lg"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center my-4">
            <div>
              <img
                src="https://www.growbit.in/assets/img/photos/pd9.png"
                alt="img"
                className="h-[80vh] rounded-lg"
              />
            </div>
            <div className="max-w-96 p-4 flex flex-col justify-center items-center bg-slate-50 rounded-lg relative right-8 gap-8">
              <p className="text-blue-400 font-semibold text-2xl">
                CUSTOMER ACQUISITION
              </p>
              <p className="text-4xl font-bold">Niyo Global</p>
              <p>
                niyo is a cost-effective, loaded with benefits and absolutely
                free international debit card thats accepted anywhere in the
                world. With zero markup fees.
              </p>
              <a className="text-blue-400 font-semibold text-2xl" href="#">
                See Projects &rarr;
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center my-4">
            <div className="max-w-96 p-4 flex flex-col justify-center items-center bg-slate-50 rounded-lg relative left-8 gap-8">
              <p className="text-orange-400 font-semibold text-2xl">
                MERCHANT ACQUISITION
              </p>
              <p className="text-4xl font-bold">Airtel Payments Bank</p>
              <p>
                Airtel Payments Bank, one of the trusted payment banks in India,
                provides best offers on recharge, utility payments.
              </p>
              <a className="text-orange-400 font-semibold text-2xl" href="#">
                See Projects &rarr;
              </a>
            </div>
            <div>
              <img
                src="	https://www.growbit.in/assets/img/photos/pd10.png"
                alt="img"
                className="h-[80vh] rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-4">
        <table className="shadow-md">
          <tr className="border rounded-lg border-gray-100 flex gap-x-4">
            <td className="border-r border-gray-100 cursor-pointer p-4 ">
              &larr;
            </td>
            <td className="border-r border-gray-100 p-4">
              <a href="#">1</a>
            </td>
            <td className="border-r border-gray-100 p-4">
              <a href="#">2</a>
            </td>
            <td className="border-r border-gray-100 p-4">
              <a href="#">3</a>
            </td>
            <td className="cursor-pointer p-4">
              &rarr;<a href="#"></a>
            </td>
          </tr>
        </table>
      </div>
      <div className=" min-h-[80vh] w-4/5 mx-auto mb-4 rounded-lg flex flex-col items-center text-white bg-gradient-to-r from-pink-500 to-indigo-500">
        <div className="max-w-screen-sm text-center flex leading-5 pt-24 flex-col gap-4 items-center justify-around mt-10">
          <p className="uppercase text-slate-100 ">Join Our Team</p>
          <h3 className="text-5xl text-center">
            We are trusted by over 5000+ clients. Join them now and grow your
            business.
          </h3>
          <button
            className="bg-gray-100 mt-6 py-4 px-6 uppercase hover:shadow-lg hover:-translate-y-1 transition duration-200  rounded-full text-black font-semibold"
            to="/career"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
