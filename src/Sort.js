// import React from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
// import { defaultTableRowRenderer, Table } from "react-virtualized";

// function rowRenderer(props) {
//   return <SortableTableRowRenderer {...props} />;
// }

// export default function CustomizedTable(props) {
//   return <SortableTable rowRenderer={rowRenderer} {...props} />;
// }
import React from "react";
import { Column, Table, defaultTableRowRenderer } from "react-virtualized";
import "react-virtualized/styles.css"; // only needs to be imported once

// Table data as an array of objects
const list = [
  { name: "Brian Vaughn0", description: "Software engineer" },
  { name: "Brian Vaughn1", description: "Software engineer" },
  { name: "Brian Vaughn2", description: "Software engineer" },
  { name: "Brian Vaughn3", description: "Software engineer" }
  // And so on...
];

const SortableTable = SortableContainer(Table);

// <Column width={200} label="Description" dataKey="description" />

const SortableTableRowRenderer = SortableElement(defaultTableRowRenderer);
// <Column label="Name" dataKey="name" width={100} />
function rowRenderer(props) {
  return <SortableTableRowRenderer {...props} />;
}
// Render your table
export default class Sort extends React.Component {
  render() {
    const props = {
      width: 300,
      height: 300,
      headerHeight: 20,
      rowHeight: 30,
      rowCount: list.length,
      rowGetter: ({ index }) => list[index]
    };
    const b = {
      width: 200,
      dataKey: "name",
      label: "Name"
    };
    return (
      <SortableTable lockAxis="y" rowRenderer={rowRenderer} {...props}>
        <Column label="Name" dataKey="name" width={100} />
        <Column width={200} label="Description" dataKey="description" />
      </SortableTable>
    );
  }
}
