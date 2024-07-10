interface DadosProps {
    Id: string
    Value: string
}

export default function DadosModal(props: DadosProps) {
  return (
    <div className="flex flex-col h-12">
        <h1 className="font-bold text-sm">{props.Id}</h1>
        <p className="text-base">{props.Value}</p>
    </div>
  )
}
