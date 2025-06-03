const Footer = () => {
  return (
    <nav className="p-4 static bottom-0 w-full">
      <div className="w-full mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <div className="text-xs text-black">Toying with...</div>
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
          <li className="flex flex-row gap-1 text-xs">
            <p className="text-gray-400">Mail/</p>
            <a
              href="mailto:hanmade.kr@gmail.com"
              target="_blank"
              className="text-black hover:text-gray-600 flex items-center gap-2"
              rel="noreferrer"
            >
              hanmade.kr@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Footer;
