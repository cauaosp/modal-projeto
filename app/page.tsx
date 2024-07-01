import TituloModal from "@/components/titulo-modal/titulo-modal";
import DadosModal from "@/components/dados-modal/dados-modal";

export default function Modal() {
  return (
    <div className="w-full h-dvh flex bg-red-400">
      <div className="flex flex-col w-[60rem] h-[36rem] bg-white m-auto text-stone-500 border-2 rounded-xl">
        <header>
          <TituloModal />
        </header>
        <main className="px-4">
          <section className="grid grid-rows-4 grid-cols-2 grid-flow-col gap-1 mb-1">
            <DadosModal
              Id="Tipo do Certificado"
              Value="Certificados QrCode - Jws (Payload)"
            />
            <DadosModal Id="Origem" Value="PSP" />
            <DadosModal
              Id="Fingerprint"
              Value="47BE6EB3A6AE45E45912FD3A8C9EAB23E3646132"
            />
            <DadosModal
              Id="CN"
              Value="CN=E-SAFER DOMAIN SSL CA [Run by the Issuer], O=E"
            />
            <DadosModal Id="Situação" Value="ATIVO" />
            <DadosModal
              Id="Nome do Arquivo"
              Value="qrcode-h.fitbank.com.br.pfx"
            />
          </section>
          <hr />
          <section className="grid grid-rows-4 grid-cols-2 grid-flow-col gap-1">
            <DadosModal
              Id="ID do Certificado"
              Value="e5ee78dd-65fc-45cf-b0de-4b7f7a5632a2"
            />
            <DadosModal
              Id="Alteração"
              Value="13/06/2024 - 18:03:56"
            />
            <DadosModal
              Id="Alteração por"
              Value="920b5feb-28ef-4b77-8efd-957fe65b9d48"
            />
            <DadosModal
              Id="Ativação"
              Value="13/06/2024 - 18:04:09"
            />
            <DadosModal
              Id="ISPB"
              Value="13203354"
            />
            <DadosModal
              Id="Registro"
              Value="13/06/2024 - 18:03:56"
            />
            <DadosModal
              Id="Criado por"
              Value="920b5feb-28ef-4b77-8efd-957fe65b9d48"
            />
            <DadosModal
              Id="Vencimento"
              Value="13/06/2024 - 18:04:09"
            />
          </section>
        </main>
      </div>
    </div>
  );
}
