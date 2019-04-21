import React from "react";
import classNames from "classnames";

import { CustomPropTypes } from "./utils";

const makeColumnClass = (isXs: boolean, breakpoint: string, colSize: string | number | boolean) => {
  if (colSize === true || colSize === "") {
    return isXs ? "col" : `col-${breakpoint}`;
  } else if (colSize === "auto") {
    return isXs ? "col-auto" : `col-${breakpoint}-auto`;
  }

  return isXs ? `col-${colSize}` : `col-${breakpoint}-${colSize}`;
};

const Col = (props: ColProps)  => {
  const { className, breakpoints, ...attrs } = props;

  const columnClasses = [];

  breakpoints.forEach((breakpoint: string, idx: number) => {
    const columnProp = props[breakpoint];

    delete attrs[breakpoint];

    if (!columnProp && columnProp !== "") {
      return;
    }

    const isXs = idx === 0;

    if (typeof columnProp !== "object") {
      const custColClass = makeColumnClass(isXs, breakpoint, columnProp);
      columnClasses.push(custColClass);
      return;
    }

    const colSizeInterfix = isXs ? "-" : `-${breakpoint}-`;
    const colClass = makeColumnClass(isXs, breakpoint, columnProp.size);

    columnClasses.push(
      classNames({
        [colClass]: columnProp.size || columnProp.size === "",
        [`order${colSizeInterfix}${columnProp.order}`]:
          columnProp.order || columnProp.order === 0,
        [`offset${colSizeInterfix}${columnProp.offset}`]:
          columnProp.offset || columnProp.offset === 0
      })
    );
  });

  if (!columnClasses.length) {
    columnClasses.push("col");
  }

  const classes = classNames(className, columnClasses);

  return <div {...attrs} className={classes} />;
};


type ColProps = {
  /**
   * Col number or config object for xs viewports.
   */
  xs?: CustomPropTypes["column"]
  /**
   * Col number or config object for sm viewports.
   */
  sm?: CustomPropTypes["column"]
  /**
   * Col number or config object for md viewports.
   */
  md?: CustomPropTypes["column"]
  /**
   * Col number or config object for lg viewports.
   */
  lg?: CustomPropTypes["column"]
  /**
   * Col number or config object for xl viewports.
   */
  xl?: CustomPropTypes["column"]
  /**
   * The class name.
   */
  className: string
  /**
   * The available breakpoints.
   */
  breakpoints: string[]
  /**
   * The component tag type.
   */
  // tag: string
  /**
   * children props
   */
  children: any[]
};

Col.defaultProps = {
  breakpoints: ["xs", "sm", "md", "lg", "xl"]
};

export default Col;
