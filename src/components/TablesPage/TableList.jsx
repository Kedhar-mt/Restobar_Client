import React from "react";
import TableItem from "./TableItem";

const TableList = ({ tables, deleteTable }) => {
  return (
    <div className="tables-list">
      <h2>Tables</h2>
      {tables.length === 0 ? (
        <p>No tables available. Create one!</p>
      ) : (
        <ul>
          {tables.map((table) => (
            <TableItem key={table._id} table={table} deleteTable={deleteTable} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TableList;
