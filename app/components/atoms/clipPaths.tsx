export function ClipPathDesktop() {
  return (
    <div
      className="absolute inset-0 -z-0 bg-[#F9FAFC] lg:block hidden"
      style={{
        clipPath: "polygon(0 0, 80% 0, 40% 100%, 0% 100%)",
      }}
    ></div>
  );
}

export function ClipPathMobile() {
  return (
    <div
      className="h-screen absolute inset-0 -z-0 bg-[#F9FAFC] lg:hidden"
      style={{
        clipPath: "polygon(100% 0, 0 0, 0 100%, 50% 100%)",
      }}
    ></div>
  );
}
