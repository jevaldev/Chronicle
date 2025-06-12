export const FooterSection = () => {
  return (
    <footer
      className="mt-16 w-full bg-[#364156] text-neutral-200 text-sm py-6 text-center space-y-4 absoute bottom-0 left-0 right-0 px-4"
      role="contentinfo"
    >
      <nav className="flex flex-wrap justify-center gap-4">
        <a href="/about" className="hover:underline">
          Sobre Chronicle
        </a>
        <a href="/terms" className="hover:underline">
          Términos
        </a>
        <a href="/privacy" className="hover:underline">
          Privacidad
        </a>
        <a href="/contact" className="hover:underline">
          Contacto
        </a>
      </nav>
      <p className="text-xs text-neutral-400">
        Hecho con Cariño por Jesús Alejandro Valdés Viramontes
        <a
          href="https://github.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Tu Nombre
        </a>
      </p>
      <p className="text-xs text-neutral-400">
        Chronicle es una app hecha con fines de entretenimiento. Datos y
        contenido visual pertenecen a sus respectivos dueños.
      </p>
    </footer>
  );
};
