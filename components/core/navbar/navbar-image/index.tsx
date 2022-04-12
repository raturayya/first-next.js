import { IAction } from '@components/core/navbar/navbar-action';
import { ILeading } from '@components/core/navbar/navbar-leading';

const NavbarImage = (action: ILeading | IAction) => {
  if (action.imageUrl) {
    return (
      <div className="w-[24px] h-[24px]">
        <img src={action.imageUrl} className="w-full h-full object-contain object-center" />
      </div>
    );
  }

  return null;
};

export default NavbarImage;
