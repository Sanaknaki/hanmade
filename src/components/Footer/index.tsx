const Footer = () => {
  return (
    <nav className="p-4 static bottom-0 w-full">
      <div className="w-full mx-auto flex justify-end items-center space-x-6">
        <ul className="flex items-center space-x-6">
          <li className="flex flex-row gap-1 text-xs">
            <p className="text-gray-400">IG/</p>
            <a
              href="https://www.instagram.com/hanmade.kr"
              target="_blank"
              className="text-black hover:text-gray-600 flex items-center gap-2"
              rel="noreferrer"
            >
              hanmade.kr
            </a>
          </li>

          <li className="flex flex-row gap-1 text-xs">
            <p className="text-gray-400">TT/</p>
            <a
              href="https://www.tiktok.com/@hanmade.kr"
              target="_blank"
              className="text-black hover:text-gray-600 flex items-center gap-2"
              rel="noreferrer"
            >
              @hanmade.kr
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Footer;
