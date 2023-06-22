import { formateDate } from '../../utils/formate-date';
import { Container } from './styled';

export type DateProps = {
  date: string;
};

export const Date = ({ date }: DateProps) => {
  return <Container>{formateDate(date)}</Container>;
};
