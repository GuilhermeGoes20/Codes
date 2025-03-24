import Image from "next/image";
import IconSearch from "@/assets/icon-search.svg";

export function HeaderSearch() {
  return (
    <div className="flex items-center gap-4 w-[40%] mr-4">
      <Image src={IconSearch} alt="icon-search" />
      <input
        type="text"
        placeholder="Buscar"
        className="bg-transparent outline-none text-white placeholder:text-white w-full"
      />
    </div>
  );
}
