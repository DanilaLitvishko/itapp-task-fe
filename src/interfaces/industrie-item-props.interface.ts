import { OptionalInformation } from "./optional-information.interface";

export interface ListItemProps {
  item: OptionalInformation;
  onDelete: (item: OptionalInformation) => void;
}
