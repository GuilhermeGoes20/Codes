import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { HedaerButtons } from "./HeaderButtons";
import { HeaderSearch } from "./HeaderSearch";
import { HeaderButtonAccount } from "./HeaderButtonAccount";

export function Header() {
  return (
    <header className="w-full h-20 bg-primary-orange flex items-center justify-between pl-20">
      {/* Esquerdo */}
      <div className="flex items-center justify-center gap-10">
        {/* Logo */}
        <Image src={Logo} alt="logo" />
        {/* Menus */}
        <ul className="flex flex-row gap-12">
          <li>
            <HedaerButtons title="Para você" />
          </li>
          <li>
            <HedaerButtons title="Para empresas" />
          </li>
          <li>
            <HedaerButtons title="Serviços" />
          </li>
          <li>
            <HedaerButtons title="Ajuda" />
          </li>
        </ul>
      </div>
      {/* Direito */}
      <div className="flex items-center justify-start gap-2">
        <HeaderSearch />
        <HeaderButtonAccount />
      </div>
    </header>
  );
}
