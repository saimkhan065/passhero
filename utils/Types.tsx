import { ReactNode } from "react";

export type RecordType = {
  username: string;
  url: string;
  password: string;
};

export type TableProps = {
  columns: string[];
  data: Array<Record<string, any>>;
};

export type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: true | false;
  onClick?: () => void;
};

export type ModalAddFormProps = {
  isOpen: boolean;
  onClose: () => void;
  onAddRecord: (data: RecordType) => void;
};

export type ChildrenProps = {
  children: ReactNode;
};
