import CloseButton from "@/app/source/icons/close-button";
import Shield from "../../app/source/icons/shield";

export default function TituloModal() {
  return (
    <div className="w-full flex items-center align h-[5rem] px-3">
      <Shield />
      <h1 className="font-bold">Detalhes do Certificado</h1>
      <CloseButton />
    </div>
  );
}
