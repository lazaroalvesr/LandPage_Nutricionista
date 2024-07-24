import { Contato } from "./_components/Contato";
import { Depoimentos } from "./_components/Depoimentos";
import { Main } from "./_components/Main";
import { Servicos } from "./_components/Servicos";
import { SobreMim } from "./_components/SobreMim";

export default function Home() {
  return (
    <div>
      <Main />
      <SobreMim />
      <Servicos />
      <Depoimentos />
      <Contato />
    </div>
  );
}
