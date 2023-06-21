export const formateDate = (date: string): string => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
  });
};
