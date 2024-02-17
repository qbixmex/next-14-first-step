import { FC, ReactNode } from 'react';

type Props = { children: ReactNode };

const GeneralLayout: FC<Props> = ({ children }) => {
  return (
    <main className="grid place-content-center h-[calc(100vh-72px)]">
      {children}
    </main>
  );
};

export default GeneralLayout;
