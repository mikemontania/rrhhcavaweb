export interface MenuItem {
    icon: string;
  name: string;
  route: string;
  subItems?: MenuItem[];
  showSubMenu?: boolean; // Propiedad para controlar la visualización del submenú
  highlighted?: boolean; // Nueva propiedad para el estado de resaltado
  subItemsHighlighted?: boolean; // Nueva propiedad para el estado de resaltado de los subelementos

}