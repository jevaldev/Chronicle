import Link from "next/link";
import Image from "next/image";
import window from "@/public/window.svg"; // Adjust the path as necessary

export const Navbaar = () => {
  return (
    <nav className="w-full py-6 bg-white text-black shadow-md z-10">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <Image src={window} alt="Chronicle Logo" width={40} height={40} />
          <h1 className="ml-2 text-2xl font-bold">Chronicle</h1>
        </div>
        <ul className="flex gap-4">
          <li>
            <Link
              href="/"
              className="text-gray-700 font-bold hover:[color:#0099FF]"
            >
              INICIO
            </Link>
          </li>
          <li>
            <Link
              href="/films"
              className="text-gray-700 font-bold hover:[color:#0099FF]"
            >
              EXPLORAR
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-700 font-bold hover:[color:#0099FF]"
            >
              INICIAR SESIÓN
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
