import {
  HomeIcon,
  LibraryIcon,
  PlayCircleIcon,
  SearchIcon,
} from "lucide-react";
import MobileNavItem from "./mobile-nav-item";

export default function MobileNav() {
  return (
    <div className="py-4 px-24 bg-neutral-900 border-t border-neutral-700 flex justify-between items-center">
      <MobileNavItem icon={<HomeIcon />} label="Home" className="flex-1" />
      <MobileNavItem icon={<PlayCircleIcon />} label="Podcasts" />
      <MobileNavItem icon={<SearchIcon />} label="Search" />
      <MobileNavItem icon={<LibraryIcon />} label="Library" />
    </div>
  );
}
