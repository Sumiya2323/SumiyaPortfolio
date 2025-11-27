import { Mail } from "lucide-react";

const Contact = () => {
  const resumePath = "/Resume.pdf";
  const emailAddress = "sumiyagombo840@gmail.com";

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col gap-6 md:bg-gray-800 w-[600px] py-12 px-10 rounded-2xl shadow-2xl ">
        <h1 className="md:text-4xl text-2xl font-bold text-fuchsia-500 text-center">
          Let's Build Something Great
        </h1>

        <p className="md:text-lg text-gray-300 text-center max-w-lg mx-auto mb-4">
          I'm currently seeking new opportunities and challenges. Send me a
          message, and I'll get back to you within 24 hours.
        </p>

        <a
          href={`mailto:${emailAddress}`}
          className="flex items-center p-4 bg-gray-800 rounded-lg transition-colors duration-200 hover:bg-gray-700 cursor-pointer"
        >
          <Mail size={32} strokeWidth={2} className="text-fuchsia-500 mr-4 " />
          <div className="text-left">
            <p className="text-sm text-gray-400">Email</p>
            <p className="text-lg text-white">{emailAddress}</p>
          </div>
        </a>

        <a
          href={resumePath}
          download
          className="mt-6 py-3 px-6 text-center font-semibold text-white rounded-lg w-[300px] self-center 
                     bg-indigo-600 transition-colors duration-200 
                     hover:bg-indigo-800 focus:outline-none"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Contact;
