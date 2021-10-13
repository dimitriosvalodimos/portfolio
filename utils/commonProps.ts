import { ReactNode } from "react";

type LayoutProps = {
  currentPage: string;
  children: ReactNode | ReactNode[];
};

type ProjectCardProps = {
  cardNumber: number;
  name: string;
  description: string;
  category: string;
  linkTo: string;
  stack: string | string[];
};

export type { LayoutProps, ProjectCardProps };
