import Link from "next/link";
import Image from "next/image";
import window from "@/public/window.svg"; // Adjust the path as necessary

export const Navbaar = () => {
  return (
    <nav className="w-full p-4 bg-white text-black shadow-md z-10">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <Image src={window} alt="Chronicle Logo" width={40} height={40} />
          <span className="ml-2 text-xl font-bold">Chronicle</span>
        </div>
        <ul className="flex gap-4">
          <li>
            <Link
              href="/"
              className="text-gray-700 font-bold text-xl hover:[color:#0099FF]"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-gray-700 font-bold text-xl hover:[color:#0099FF]"
            >
              Explorar
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-700 font-bold text-xl hover:[color:#0099FF]"
            >
              Iniciar Sesión
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
