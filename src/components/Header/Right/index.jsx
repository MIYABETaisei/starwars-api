import HeaderSearch from "src/components/Header/Search";
import LogButton from "src/components/Header/LogButton";

function HeaderRight() {
  return (
    <div className="h-full pt-[30px]">
      <HeaderSearch />
      <div className="w-full mt-[10px] text-headerAction-color flex items-center justify-end">
        <LogButton>LOG IN</LogButton>
        <span className="text-[#343434] text-base font-medium tracking-[2px]">
          /
        </span>
        <LogButton>LOG OUT</LogButton>
      </div>
    </div>
  );
}

export default HeaderRight;
