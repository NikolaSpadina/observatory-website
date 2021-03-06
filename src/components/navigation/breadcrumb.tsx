import React from "react";
import AUbreadcrumbs from "../../auds/react/breadcrumbs";
import { CapitiliseAndRemoveDash } from "../helpers/helper";

interface Crumb {
  length: number;
  forEach: any;
  crumbLabel: string;
  pathname: string;
}

interface Props {
  crumbs: Crumb;
}

interface CrumbItems {
  text: string;
  link?: string;
}

const AuBreadcrumbs: any = AUbreadcrumbs;

const Breadcrumbs: React.FC<Props> = ({ crumbs }) => {
  const breadcrumbItems: Array<CrumbItems> = [];

  crumbs.forEach((crumb: Crumb, i: number) => {
    const { pathname, crumbLabel } = crumb;
    if (i < crumbs.length - 1) {
      breadcrumbItems.push({
        link: pathname,
        text: CapitiliseAndRemoveDash(crumbLabel),
      });
    } else {
      breadcrumbItems.push({
        text: CapitiliseAndRemoveDash(crumbLabel),
      });
    }
  });

  return (
    <>
      <AuBreadcrumbs
        items={breadcrumbItems}
        label="Breadcrumbs"
        className="au-body"
      />
    </>
  );
};

export default Breadcrumbs;
