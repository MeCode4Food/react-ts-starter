import React from 'react'
import classNames from 'classnames'

const Row = (props: RowProps) => {
  const {
    noGutters,
    form,
    className,
    ...attrs
  } = props

  const classes = classNames(
    className,
    noGutters ? 'no-gutters' : null,
    form ? 'form-row' : 'row'
  )

  return (<div {...attrs} className={classes} />)
}

type RowProps = {
  /**
   * The class name.
   */
  className?: string
  /**
   * Whether it has gutters, or not.
   */
  noGutters?: boolean
  /**
   * Whether it is located inside a form, or not.
   */
  form?: boolean
  /**
   * The component's children type.
   */
  children: any[] | any
}

export default Row
