import React from 'react'
import * as _ from 'lodash'

const Table = ({ tableHeaders, tableData, caption, lastButton, className }: TableProps) => {
  return (
    <table className={`table ${className}`}>
      { caption ? <caption>{caption}</caption> : null }
      <thead>
        <tr>
          <th scope="col">#</th>
          {
            _.map(tableHeaders, (header, index)  => {
              return <th key={index} scope="col">{header}</th>
            })
          }
          { lastButton ? <th scope="col" /> : null }
        </tr>
      </thead>
      <tbody>
        {
          _.map(tableData, (row, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index}</th>
                {
                  _.map(tableHeaders, (header, index) => {
                    return <td key={index}>{row[header]}</td>
                  })
                }
                {
                  lastButton ? 
                    <td><button 
                      onClick={(e) => lastButton.onClick(e, row, index)}
                      className="btn btn-primary">
                      {lastButton.text}
                    </button></td> : null
                }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export type TableProps = {
  tableHeaders: string[]
  tableData: Array<{[propName : string] : any}>,
  caption?: string,
  lastButton?: {
    onClick: (event: any, row: any, index: number) => any,
    text: string
  },
  className? : string
}

export default Table
