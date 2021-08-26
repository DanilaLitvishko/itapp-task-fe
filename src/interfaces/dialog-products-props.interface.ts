import { OptionalInformation } from "./optional-information.interface";

export interface DialogProductProps {
  open: boolean;
  close: () => void;
  price: number;
}
