import IconUser from "@/assets/icon-user.svg";
import Image from "next/image";

export function HeaderButtonAccount() {
  return (
    <button className="flex items-center justify-start gap-2 bg-primary-blue h-20 w-[60%] pl-4">
      <Image src={IconUser} alt="icon-user" />
      <span className="text-white font-bold">Acessar conta</span>
    </button>
  );
}
