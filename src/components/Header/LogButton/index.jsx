function LogButton({ children }) {
  return (
    <button className="bg-transparent font-bold border-none text-lg cursor-pointer ease-linear duration-200 tracking-[2px] hover:text-[#ccc]">
      {children}
    </button>
  );
}
export default LogButton;
