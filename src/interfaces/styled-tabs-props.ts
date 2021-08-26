export interface StyledTabsProps {
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
  orientation: "horizontal" | "vertical" | undefined;
}
