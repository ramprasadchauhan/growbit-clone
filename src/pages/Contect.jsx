import { Link } from "react-router-dom";

const Contect = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen bg-slate-200 gap-4">
        <p className="text-6xl">Get in Touch</p>
        <div className="flex gap-2">
          <Link to="/">Home</Link>
          <span className="border border-r border-slate-300"></span>
          <span>Contact</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <p className="text-4xl mt-10 mb-5">Drop Us a Line</p>
        <p className="text-xl mb-10">
          Reach out to us from our contact form and we will get back to you
          shortly.
        </p>
        <form className="flex flex-col gap-4 w-[50vw]">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First name*"
              id="name"
              className="p-3 bg-slate-50 shadow-md border border-none outline-none rounded-lg w-[25vw]"
            />
            <input
              type="text"
              placeholder="First name*"
              id="name"
              className="p-3 bg-slate-50 w-[25vw] shadow-md border border-none outline-none rounded-lg"
            />
          </div>
          <div className="flex gap-4 w-[50vw]">
            <input
              type="text"
              placeholder="First name*"
              id="name"
              className="p-3 bg-slate-50 w-[25vw] shadow-md border border-none outline-none rounded-lg"
            />
            <select
              className="bg-slate-50 w-[25vw]"
              id="form-select"
              name="department"
              required=""
            >
              <option selected="" disabled="" value="">
                Select a department
              </option>
              <option value="Sales">Sales</option>
              <option value="Marketing">Marketing</option>
              <option value="Customer Support">Customer Support</option>
            </select>
          </div>
          <textarea
            id="form_message"
            name="message"
            className="w-full border border-slate-100"
            placeholder="Your message"
            style={{ height: "150px" }}
            required
          />

          <div className="col-12 text-center">
            <input
              type="submit"
              className="bg-violet-500 px-4 py-2 rounded-3xl font-semibold hover:shadow-lg ring-offset-slate-400 text-white hover:-translate-y-1 transition duration-200"
              value="Send message"
            />
            <p className="text-gray-600 mb-8 mt-4">
              <strong>*</strong> These fields are required.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contect;
