export interface HeaderProps {
  className?: string;
}

export interface MobileHeaderProps {
  onMenuToggle: () => void;
}

export interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface SidebarProps {
  className?: string;
}
