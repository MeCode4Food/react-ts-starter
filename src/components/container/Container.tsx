import React from "react";
import classNames from "classnames";

const Container = (props: ContainerProps) => {
  const { className, fluid, ...attrs } = props;
  const classes = classNames(
    className,
    fluid ? "container-fluid" : "container"
  );

  return <div {...attrs} className={classes} />;
};

type ContainerProps = {
  /**
   * The class name.
   */
  className?: string
  /**
   * Whether it is fluid, or not.
   */
  fluid?: boolean
  /**
   * The component's children type.
   */
  children: any
};

export default Container;
