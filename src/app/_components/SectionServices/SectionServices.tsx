import Image from "next/image";
import { Container } from "../Container";
import { ListItem } from "./ListItem";

import IconPhone from "@/assets/icon-phone.svg";
import IconSolutions from "@/assets/icon-solutions.svg";
import IconOption from "@/assets/icon-options.svg";
import IconCard from "@/assets/icon-card.svg";
import Phone from "@/assets/phone.png";
import { ArticleText } from "./ArticleText";

export function SectionServices() {
  return (
    <div className="w-full h-[965px]">
      <Container>
        <div className="flex-1 max-w-[594px] pt-32">
          <ArticleText />
          <ul>
            <ListItem
              image={IconPhone}
              text="Acompanhar sua conta, fazer pagamentos e transferências de onde estiver"
            />
            <ListItem
              image={IconSolutions}
              text="Soluções de empréstimos e renegociação para organizar suas finanças"
            />
            <ListItem
              image={IconOption}
              text=" Diversas opções de investimentos, de acordo com o seu perfil de investidor"
            />
            <ListItem
              image={IconCard}
              text="Acompanhe a fatura do seu cartão de crédito e faça compras online com seu
                cartão virtual"
            />
          </ul>
        </div>
        <Image src={Phone} alt="phone" />
      </Container>
    </div>
  );
}
