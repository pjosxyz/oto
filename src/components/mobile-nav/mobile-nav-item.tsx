import React, {
  ForwardRefExoticComponent,
  ReactElement,
  ReactNode,
  RefAttributes,
} from "react";
import { Button } from "../ui/button";
import { HomeIcon, LucideProps } from "lucide-react";

type MobileNavItemProps = {
  icon: ReactElement<LucideProps>;
  label: string;
  className?: string;
};

export default function MobileNavItem({
  icon,
  label,
  className = "",
}: MobileNavItemProps) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <Button size={"sm"} variant={"primary"} className={className}>
        {icon}
      </Button>
      <p className="pointer-events-none text-neutral-400 text-xs">{label}</p>
    </div>
  );
}
