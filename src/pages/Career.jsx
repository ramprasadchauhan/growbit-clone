import { Link } from "react-router-dom";

const Career = () => {
  return (
    <div>
      <div className="bg-slate-50 min-h-screen flex flex-col items-center">
        <div className="max-w-screen-md flex pt-24 flex-col gap-4 items-center justify-around mt-10">
          <p className="uppercase text-slate-500 ">Join Our Team</p>
          <h3 className="text-5xl text-center">
            Join our team to help shape the future of development.
          </h3>
          <Link
            className="bg-blue-700 mt-6 py-4 px-6 hover:shadow-lg hover:-translate-y-1 transition duration-200  rounded-full text-white font-semibold"
            to="/career"
          >
            Explore Position
          </Link>
        </div>
      </div>
      <hr />
      <div className="bg-slate-50 min-h-screen flex flex-col items-center">
        <div className="max-w-screen-md flex pt-24 flex-col gap-4 items-center justify-around mt-10">
          <p className="uppercase text-slate-500 ">JOB POSITIONS</p>
          <h3 className="text-4xl text-center">
            We’re always searching for amazing people to join our team. Take a
            look at our current openings.
          </h3>
          <div className="w-[75vw] flex gap-4 mt-8">
            <select
              className="bg-slate-50 shadow-lg w-[25vw] border border-gray-200 p-4 rounded-lg"
              aria-label=""
            >
              <option selected="">Position</option>
              <option value="position1">Business Managers</option>
              <option value="position2">Vendors</option>
              <option value="position3">Team Leaders</option>
              <option value="position4">Field Sales Executives</option>
              <option value="position5">Gig Freelancers</option>
              <option value="position6">Tele-callers</option>
            </select>
            <select
              className="bg-slate-50 shadow-lg w-[25vw] border border-gray-200 p-4 rounded-lg"
              aria-label=""
            >
              <option selected="">Type</option>
              <option value="type1">Full-time</option>
              <option value="type3">Part-time</option>
              <option value="type4">Remote</option>
            </select>
            <select
              className="bg-slate-50 shadow-lg w-[25vw] border border-gray-200 p-4 rounded-lg"
              aria-label=""
            >
              <option selected="">Location</option>
              <option value="location1">India</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-slate-50 min-h-screen flex flex-col items-center">
          <div className="max-w-screen-md flex pt-24 flex-col gap-4 items-center justify-around mt-10">
            <p className="uppercase text-slate-500 ">
              CAN&apos;T FIND THE RIGHT POSITION?
            </p>
            <h3 className="text-4xl text-center">
              We are a community with 5000+ team members. Join and build the
              future with us.
            </h3>
            <Link
              className="bg-blue-700 mt-6 py-4 px-6 hover:shadow-lg hover:-translate-y-1 transition duration-200  rounded-full text-white font-semibold"
              to="/contect"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
