const Home = () => {
  return (
    <div>
      <div className=" min-h-screen flex flex-col items-center text-white bg-gradient-to-r from-pink-500 to-indigo-500">
        <div className="max-w-screen-sm text-center flex leading-5 pt-24 flex-col gap-4 items-center justify-around mt-10">
          <h3 className="text-5xl text-center">
            India&apos;s largest network For Field Task&apos;s
          </h3>
          <p className="text-3xl">
            The service we offer is specifically designed to meet your needs.
          </p>
          <button
            className="bg-gray-100 mt-6 py-4 px-6 uppercase hover:shadow-lg hover:-translate-y-1 transition duration-200  rounded-full text-black font-semibold"
            to="/career"
          >
            What We Do?
          </button>
        </div>
      </div>
      <div className="flex gap-8 justify-center">
        <div className="max-w-64 pt-20 pb-8 px-4 my-8 flex flex-col justify-center items-center border shadow-lg rounded-lg relative right-8 gap-8">
          <p className="text-2xl">Offilne Marketing</p>
          <p>
            It&apos;s time for you to start building a solid relationship &
            trust with your customers, we&apos;ll make it happen.
          </p>
          <a
            className="text-pink-400 hover:underline transition duration-200 text-xl"
            href="#"
          >
            Learn More &rarr;
          </a>
        </div>
        <div className="max-w-64 pt-20 pb-8 px-4 my-8 flex flex-col justify-center items-center border shadow-lg rounded-lg relative right-8 gap-8">
          <p className="text-2xl">Field Task&apos;s</p>
          <p>
            Field tasks are an excellent starting point for any business, and
            our field team is there to help.
          </p>
          <a
            className="text-blue-400 hover:underline transition duration-200 text-xl"
            href="#"
          >
            Learn More &rarr;
          </a>
        </div>
        <div className="max-w-64 pt-20 pb-8 px-4 my-8 flex flex-col justify-center items-center border shadow-lg rounded-lg relative right-8 gap-8">
          <p className="text-2xl">Identity & Branding</p>
          <p>
            We offer identity and branding services to help businesses build
            their unique identity and message.
          </p>
          <a
            className="text-orange-400 hover:underline transition duration-200 text-xl"
            href="#"
          >
            Learn More &rarr;
          </a>
        </div>
        <div className="max-w-64 pt-20 pb-8 px-4 my-8 flex flex-col justify-center items-center border shadow-lg rounded-lg relative right-8 gap-8">
          <p className="text-2xl">Product Design</p>
          <p>
            Stay Ahead in the Marketing Game! Our team comes up with
            personalized strategies for each client.
          </p>
          <a
            className="text-green-400 hover:underline transition duration-200 text-xl"
            href="#"
          >
            Learn More &rarr;
          </a>
        </div>
      </div>
      <div>
        <div className=" min-h-[60vh] flex flex-col items-center">
          <div className="max-w-screen-md flex pt-24 flex-col gap-4 items-center justify-around mt-10">
            <p className="uppercase text-slate-500 ">WHY CHOOSE GROWBIT?</p>
            <h3 className="text-5xl text-center">
              Here are a few reasons why most companies choose GrowBit.
            </h3>
          </div>
        </div>
      </div>
      <div className="flex gap-8 justify-center">
        <div className="max-w-64 pt-20 pb-8 px-4 my-8 flex flex-col justify-center items-center border shadow-lg rounded-lg relative right-8 gap-8">
          <p className="text-2xl">Collect Ideas</p>
          <p>We collect your requirements and set up the business plan</p>
        </div>
        <div className="max-w-64 pt-20 pb-8 px-4 my-8 flex flex-col justify-center items-center hover:shadow-lg rounded-lg relative right-8 gap-8">
          <p className="text-2xl">Team Set-Up</p>
          <p>We have a team of 30,000+ and counting</p>
        </div>
        <div className="max-w-64 pt-20 pb-8 px-4 my-8 flex flex-col justify-center items-center hover:shadow-lg rounded-lg relative right-8 gap-8">
          <p className="text-2xl">Quality Measure</p>
          <p>
            we take care of quality analyzing reports and spam, fraud detection
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col justify-center items-center">
            <p className="text-gray-500 mt-8 font-semibold">LATEST PROJECTS</p>
            <p className="text-4xl my-4 py-4 font-semibold">
              Check out some of our awesome projects.
            </p>
          </div>
          <div className="flex justify-around">
            <img
              src="https://www.growbit.in/assets/img/photos/pd8.png"
              alt="img"
              className="rounded-lg"
            />
          </div>
          <div>
            <a
              className="text-3xl font-bold hover:text-violet-400 transition duration-200"
              href="#"
            >
              WhatsApp Pay
            </a>
            <p className="text-gray-700 uppercase mt-2">Branding</p>
          </div>
        </div>
      </div>
      <div className="flex justify-around pt-6 pl-6">
        <div>
          <div>
            <img
              src="https://www.growbit.in/assets/img/photos/g8.jpg"
              alt="image"
              className="rounded-lg hover:scale-105"
            />
          </div>
          <div className="flex gap-4">
            <div className="p-6 ">
              <img
                src="https://www.growbit.in/assets/img/photos/g9.jpg"
                alt="image"
                className="rounded-lg hover:scale-105"
              />
            </div>
            <div className="p-6">
              <img
                src="https://www.growbit.in/assets/img/photos/g10.jpg"
                alt="image"
                className="rounded-lg hover:scale-105"
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className=" min-h-[80vh] flex flex-col items-center">
              <div className="max-w-screen-md flex pt-24 flex-col gap-4 items-center justify-around mt-10">
                <p className="uppercase text-slate-500 ">Join Our Team</p>
                <h3 className="text-5xl text-center">
                  Join our team to help shape the future of development.
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-around mb-10">
              <div className="flex gap-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    data-inject-url="https://www.growbit.in/assets/img/icons/solid/lamp.svg"
                    className="w-8 h-8"
                    fill="fuchsia"
                  >
                    <path d="M128 36.86a8 8 0 01-8-8V8a8 8 0 0116 0v20.86a8 8 0 01-8 8zm70.1 29.04a8 8 0 01-5.67-13.64l14.77-14.77a8 8 0 1111.31 11.31l-14.77 14.77a8 8 0 01-5.64 2.33zM248 136h-20.86a8 8 0 010-16H248a8 8 0 010 16zm-35.15 84.85a8.06 8.06 0 01-5.67-2.34l-14.76-14.77a8 8 0 0111.31-11.31l14.77 14.77a8 8 0 010 11.31 7.92 7.92 0 01-5.65 2.34zm-169.7 0a8 8 0 01-5.66-13.65l14.77-14.77a8 8 0 0111.31 11.31L48.8 218.51a7.93 7.93 0 01-5.65 2.34zM28.86 136H8a8 8 0 010-16h20.86a8 8 0 110 16zM57.9 65.9a8 8 0 01-5.66-2.33L37.47 48.8a8 8 0 1111.31-11.31l14.77 14.77A8 8 0 0157.9 65.9z"></path>
                    <path d="M160 224v13.33A18.76 18.76 0 01141.33 256h-26.67c-9 0-18.66-6.83-18.66-21.76V224zm15-154a74.93 74.93 0 00-63-15c-28.27 5.91-51.2 29-57.07 57.21a74.74 74.74 0 0028.16 75.41A32.19 32.19 0 0195.25 208v.12A2 2 0 0196 208h64a.93.93 0 01.53.11V208c1.49-8.11 6.29-15.57 13.65-21.33A74.72 74.72 0 00175 70zm-7 63.36a8.06 8.06 0 01-8-8A29.32 29.32 0 00130.67 96a8 8 0 110-16A45.43 45.43 0 01176 125.33a8.06 8.06 0 01-8 8z"></path>
                    <path
                      className="fill-secondary"
                      d="M95.25 208H96a1.8 1.8 0 00-.75.11z"
                    ></path>
                    <path
                      className="fill-primary"
                      d="M160.53 208v.11a.93.93 0 00-.53-.11z"
                    ></path>
                  </svg>
                </div>
                <div className="mr-4">Createvity</div>
              </div>
              <div className="flex gap-x-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 255.98"
                    data-inject-url="https://www.growbit.in/assets/img/icons/solid/bulb.svg"
                    className="w-8 h-8"
                    fill="#5D8AA8"
                  >
                    <circle
                      className="fill-primary"
                      cx="58.67"
                      cy="149.31"
                      r="32"
                    ></circle>
                    <path
                      className="fill-primary"
                      d="M88 202.65H29.33A29.36 29.36 0 000 232v16a8 8 0 008 8h101.33a8 8 0 008-8v-16A29.36 29.36 0 0088 202.65z"
                    ></path>
                    <circle
                      className="fill-primary"
                      cx="197.33"
                      cy="149.31"
                      r="32"
                    ></circle>
                    <path
                      className="fill-primary"
                      d="M226.67 202.65H168A29.36 29.36 0 00138.67 232v16a8 8 0 008 8H248a8 8 0 008-8v-16a29.36 29.36 0 00-29.33-29.35z"
                    ></path>
                    <path
                      className="fill-secondary"
                      d="M149.76 108.48v7.68A11.9 11.9 0 01137.81 128h-19.63c-5.76 0-12-4.27-12-13.76v-5.76zM176 47.68a47.26 47.26 0 01-17.6 36.91 22.89 22.89 0 00-8.32 13.23H106a20 20 0 00-7.79-12.69A47.13 47.13 0 0180 46.73C80.53 21.34 101.76.33 127.25 0a47.34 47.34 0 0134.56 13.88A46.82 46.82 0 01176 47.68z"
                    ></path>
                  </svg>
                </div>
                <div>Innovative Thinking</div>
              </div>
            </div>
            <div className="flex justify-around">
              <div className="flex gap-x-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 255.97 256"
                    data-inject-url="https://www.growbit.in/assets/img/icons/solid/puzzle.svg"
                    className="w-8 h-8"
                    fill="#FF033E"
                  >
                    <path d="M221.86 91a33.65 33.65 0 01-22.72-8.75v40.21h-27.2a43.26 43.26 0 003.73-17.71 44.8 44.8 0 10-86 17.71H56.85v-111A11.42 11.42 0 0168.26 0h119.47a11.42 11.42 0 0111.41 11.41v20.05A34.1 34.1 0 11221.86 91z"></path>
                    <path d="M142.79 181.25a34.13 34.13 0 0033.55 40.62 33.66 33.66 0 0022.75-8.77v31.52A11.41 11.41 0 01187.72 256H68.28a11.41 11.41 0 01-11.38-11.38V213.1a34.12 34.12 0 11-22.75-59.5 33.71 33.71 0 0122.75 8.77v-29.2H112a34.12 34.12 0 1137.76 0h49.37v29.2a34.09 34.09 0 00-56.3 18.88z"></path>
                  </svg>
                </div>
                <div className="mr-4">Rapid Solutions</div>
              </div>
              <div className="flex gap-x-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 244.09"
                    data-inject-url="https://www.growbit.in/assets/img/icons/solid/headphone.svg"
                    className="w-8 h-8"
                    fill="#81D8D0"
                  >
                    <path
                      className="fill-secondary"
                      d="M35.72 92.28a92.28 92.28 0 01184.56 0v47.63a8.93 8.93 0 01-17.86 0V92.28a74.42 74.42 0 10-148.84 0v47.63a8.93 8.93 0 11-17.86 0zm175.63 62.51a8.93 8.93 0 018.93 8.93v35.72a32.75 32.75 0 01-32.75 32.75h-35.72a8.94 8.94 0 010-17.87h35.72a14.88 14.88 0 0014.89-14.88v-35.72a8.93 8.93 0 018.93-8.93z"
                    ></path>
                    <path
                      className="fill-secondary"
                      d="M107.16 223.26A20.84 20.84 0 01128 202.42h11.91a20.84 20.84 0 010 41.67H128a20.84 20.84 0 01-20.84-20.83zm20.84-3a3 3 0 100 5.95h11.91a3 3 0 000-5.95z"
                    ></path>
                    <path
                      className="fill-primary"
                      d="M32.74 107.16A32.74 32.74 0 000 139.91v23.81a32.75 32.75 0 0032.74 32.75h11.91a8.93 8.93 0 008.93-8.94v-71.44a8.93 8.93 0 00-8.93-8.93zm190.52 0A32.74 32.74 0 01256 139.91v23.81a32.75 32.75 0 01-32.74 32.75h-11.91a8.93 8.93 0 01-8.93-8.94v-71.44a8.93 8.93 0 018.93-8.93z"
                    ></path>
                  </svg>
                </div>
                <div>Top-Notch Support</div>
              </div>
            </div>
          </div>
        </div>
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

export default Home;
