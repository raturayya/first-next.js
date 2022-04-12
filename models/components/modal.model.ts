export interface IModal {
  children: any;
  size?: string;
  active: boolean;
  toggler?: any;
  custom?: string;
  noPadding?: boolean;
}

export interface IModalBody {
  children: any;
  className?: string;
  id?: string;
  onScroll?: any;
}

export interface IModalHeader {
  leading?: any;
  children?: any;
  toggler?: any;
}

export interface IModalFooter {
  children: any;
}
