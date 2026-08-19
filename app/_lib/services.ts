export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
};

export const SERVICES: Service[] = [
  {
    slug: "atendimento-e-agenda",
    title: "Atendimento e Agenda",
    shortDescription:
      "WhatsApp, confirmações e agendamento automatizados, sem depender do telefone tocando o dia todo.",
  },
  {
    slug: "presenca-digital-e-marketing",
    title: "Presença Digital e Marketing",
    shortDescription:
      "Site, conteúdo e captação de clientes trabalhando juntos para atrair quem você quer atender.",
  },
  {
    slug: "financeiro-e-processos",
    title: "Financeiro e Processos",
    shortDescription:
      "Notas fiscais, cobranças e conciliação automáticas, sem planilha nem retrabalho no fim do mês.",
  },
  {
    slug: "ferramentas-sob-medida",
    title: "Ferramentas sob Medida",
    shortDescription:
      "Agentes de IA, portais e calculadoras construídos para a sua operação — nada de pacote pronto.",
  },
];
