import React from 'react';

interface IBreadcrumbComponent {
  breadcrumbs: IBreadcrumb[];
}

interface IBreadcrumb {
  id: number;
  title: string;
  icon?: string;
  routeTo?: any;
}

const renderList = (breadcrumbs: IBreadcrumb[]) => {
  return (
    <ol className="inline-flex items-center space-x-1 md:space-x-3">
      {breadcrumbs.map((breadcrumb: IBreadcrumb, i: number) => (
        <React.Fragment key={i}>{renderItem(breadcrumb)}</React.Fragment>
      ))}
    </ol>
  );
};

const renderItem = (breadcrumb: IBreadcrumb) => {
  if (breadcrumb.routeTo) {
    return (
      <li className="inline-flex items-center">
        <a className="inline-flex items-center cursor-pointer" onClick={breadcrumb.routeTo}>
          {renderIcon(breadcrumb)}
          <span className="ml-3">{breadcrumb.title}</span>
        </a>
      </li>
    );
  }

  return (
    <li>
      <div className="flex items-center">
        {renderIcon(breadcrumb)}
        {renderTitle(breadcrumb)}
      </div>
    </li>
  );
};

const renderIcon = (breadcrumb: IBreadcrumb) => {
  if (breadcrumb.icon) return <i className="text-md">{breadcrumb.icon}</i>;
};

const renderTitle = (breadcrumb: IBreadcrumb) => {
  return <span className="ml-3 font-medium md:ml-3 dark:text-gray-500">{breadcrumb.title}</span>;
};

const Breadcrumb = ({ breadcrumbs }: IBreadcrumbComponent) => {
  return (
    <nav className="flex mb-[20px]" aria-label="Breadcrumb">
      {renderList(breadcrumbs)}
    </nav>
  );
};

export default Breadcrumb;
