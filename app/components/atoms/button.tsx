type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
};

export function Button({ text, onClick, type }: ButtonProps) {
  return (
    <button
      type={type || "submit"}
      onClick={onClick}
      className="bg-[#011638] border-2 border-[#011638] text-white px-4 py-2 rounded cursor-pointer hover:bg-[#364156] transition-colors ease-in"
    >
      {text}
    </button>
  );
}
