import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const NavbarImage = dynamic(() => import('@components/core/navbar/navbar-image'));
const NavbarIcon = dynamic(() => import('@components/core/navbar/navbar-icon'));

interface ILeadingComponent {
  leading: ILeading;
}

export interface ILeading {
  title?: string;
  routeTo: string;
  icon?: string | undefined;
  imageUrl?: string;
  className?: string;
  onClick?: any;
  imageSize?: IImageSize;
  components?: any;
}

interface IImageSize {
  width: number;
  height: number;
}

const renderLeadingOnClick = (leading: ILeading) => {
  return (
    <div className="flex items-center cursor-pointer" onClick={leading.onClick}>
      {leading.title && leading.icon ? (
        <div className="flex items-center space-x-4">
          <i>{leading.icon}</i>
          <span className="font-semibold">{leading.title}</span>
        </div>
      ) : leading.title && !leading.icon ? (
        <div className="flex items-center space-x-4">
          <span className="font-semibold">{leading.title}</span>
        </div>
      ) : (
        <>
          <NavbarIcon {...leading} />
          <NavbarImage {...leading} />
        </>
      )}
    </div>
  );
};

const renderImage = (imageUrl?: string, imageSize?: IImageSize) => {
  if (imageUrl) {
    return (
      <Image
        src={imageUrl}
        width={imageSize ? imageSize.width : 60}
        height={imageSize ? imageSize.height : 60}
        objectFit="contain"
      />
    );
  }
};

const renderContent = (leading: ILeading) => {
  if (leading.icon || leading.title) {
    return (
      <div className="flex items-center space-x-4">
        {renderIcon(leading.icon)}
        {renderTitle(leading.title)}
      </div>
    );
  }
};

const renderIcon = (icon?: string) => {
  if (icon) {
    return <i>{icon}</i>;
  }
};

const renderTitle = (title?: string) => {
  if (title) {
    return <span className="font-semibold">{title}</span>;
  }
};

const NavbarLeading = ({ leading }: ILeadingComponent) => {
  if (leading) {
    if (leading.components) {
      return React.useMemo(() => leading.components, [leading.components]);
    }

    if (leading.onClick) {
      return renderLeadingOnClick(leading);
    }

    return (
      <div className="flex items-center">
        <Link href={leading.routeTo} data-unq="card-button-card">
          <a className="flex items-center cursor-pointer space-x-4">
            {renderImage(leading.imageUrl, leading.imageSize)}
            {renderContent(leading)}
          </a>
        </Link>
      </div>
    );
  }

  return null;
};

export default NavbarLeading;
