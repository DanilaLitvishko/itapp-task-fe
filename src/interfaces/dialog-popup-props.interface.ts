import { OptionalInformation } from "./optional-information.interface";

export interface DialogPopupProps {
  open: boolean;
  specialities: OptionalInformation[] | null;
  onClose: (value: OptionalInformation | null) => void;
  selectedValue: null | OptionalInformation;
  title: string;
}
