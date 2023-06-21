import * as styled from './styled';

export type MainContainerProps = {
    children: React.ReactNode;
}

export const MainContainer = ({ children }: MainContainerProps) => {
  return (
  <styled.Container>
    {children}
  </styled.Container>;
  );
};
