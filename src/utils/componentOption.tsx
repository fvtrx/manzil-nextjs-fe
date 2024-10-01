import { Components } from "react-markdown";

export const componentsOptions: Partial<Components> | null | undefined = {
  h1: (props: { children?: React.ReactNode }) => {
    return (
      <h1 className="mt-8 mb-4 text-3xl font-bold underline">
        {props?.children}
      </h1>
    );
  },
  h2: (props: { children?: React.ReactNode }) => {
    return <h2 className="mt-8 mb-4 text-2xl">{props?.children}</h2>;
  },
  h3: (props: { children?: React.ReactNode }) => {
    return <h3 className="mt-8 mb-4 text-xl">{props?.children}</h3>;
  },
  h4: (props: { children?: React.ReactNode }) => {
    return <h4 className="mt-8 mb-4 text-lg">{props?.children}</h4>;
  },
  h5: (props: { children?: React.ReactNode }) => {
    return <h5 className="mt-8 mb-4 text-md">{props?.children}</h5>;
  },
  h6: (props: { children?: React.ReactNode }) => {
    return <h6 className="mt-8 mb-4 text-base">{props?.children}</h6>;
  },
  li: (props: { children?: React.ReactNode }) => {
    return <li className="mt-4 mb-2 text-base">{props?.children}</li>;
  },
};
