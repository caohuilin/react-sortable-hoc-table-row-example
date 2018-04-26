import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { defaultTableRowRenderer } from "react-virtualized";

const Column = Table.column;
const SortableTable = SortableContainer(Table);
const SortableTableRowRenderer = SortableElement(defaultTableRowRenderer);
function rowRenderer(props) {
  return <SortableTableRowRenderer {...props} />;
}
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park"
  }
];

export default class Hello extends React.Component {
  render() {
    return (
      <SortableTable
        lockAxis="y"
        rowRenderer={rowRenderer}
        dataSource={data}
        rowKey="name"
      >
        <Column key={"name"} dataIndex="name" title="名称" />
      </SortableTable>
    );
  }
}
