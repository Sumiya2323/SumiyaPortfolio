import { Code, Layers, DraftingCompass } from "lucide-react";
const Footer = () => {
  return (
    <div className="w-full px-10 py-2">
      <div className="md:flex-row md:justify-around flex flex-col gap-2 md:gap-4">
        <div className="footer-border">
          <div className="flex gap-2">
            <Code size={32} className="text-fuchsia-500" />
            <h1 className="font-bold md:text-2xl text-xl">What I can do</h1>
          </div>
          <p className="text-gray-400">
            I can help develop solutions that will help you grow your business.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>UI/UX Design</li>
            <li>Fullstack Web Development</li>
            <li>Mobile App Development</li>
            <li>Database Design</li>
            <li>API Integration</li>
          </ul>
        </div>
        <div className="footer-border">
          <div className="flex gap-2">
            <Layers size={32} className="text-fuchsia-500" />
            <h2 className="font-bold md:text-2xl text-xl">Tools I Use</h2>
          </div>
          <p className="text-gray-400">
            I use latest tools and technologies to build functional and scalable
            products.
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-200">
            <li>
              <span className="font-bold">Frontend:</span>
              <ul className="list-none space-y-1 pl-5">
                <li> React, Next.js, TypeScript, Tailwind CSS</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Backend:</span>
              <ul className="list-none space-y-1 pl-5">
                <li>Node.js, MongoDB, PostgreSQL</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Design:</span>
              <ul className="list-none space-y-1 pl-5">
                <li>Figma, Framer</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="footer-border">
          <div className="flex gap-2">
            <DraftingCompass size={32} className="text-fuchsia-500" />
            <h3 className="font-bold md:text-2xl text-xl">UI/UX Design</h3>
          </div>
          <p className="text-gray-400">
            I am a designer first, developer second. I design clean and modern
            interfaces.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>User-Centered Design</li>
            <li>Modern and Clean UI</li>
            <li>Responsive Layouts</li>
            <li>Database Design</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
