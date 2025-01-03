"use client";

import React, { useState } from "react";
import { useTable, Column } from "react-table";
import { FaPlus, FaMinus } from "react-icons/fa";

interface Data {
    [key: string]: string;
}

const EditableTable: React.FC = () => {
    const [data, setData] = useState<Data[]>([
        { col1: "", col2: "" },
        { col1: "", col2: "" },
    ]);

    const [columns, setColumns] = useState<Column<Data>[]>([
        { Header: "Column 1", accessor: "col1" },
        { Header: "Column 2", accessor: "col2" },
    ]);

    /**
     * Button to add/remove rows/columns to the table.
     */
    const resizeButton = (isRow: boolean, isAdd: boolean) => {
        let action;
        if (isRow) {
            action = isAdd ? addRow : removeRow;
        } else {
            action = isAdd ? addColumn : removeColumn;
        }
        const backgroundColor = isAdd ? "green" : "red";
        return (
            <button
                onClick={action}
                style={{
                    backgroundColor: backgroundColor,
                    borderRadius: "50%",
                    color: "white",
                    border: "none",
                    margin: "5px",
                }}
            >
                isAdd ? <FaPlus /> : <FaMinus />;
            </button>
        );
    };

    /**
     * Adds a row to the table.
     */
    const addRow = () => {
        setData([...data, { col1: "", col2: "" }]);
    };

    /**
     * Removes the bottom row from the table.
     */
    const removeRow = () => {
        setData(data.slice(0, -1));
    };

    /**
     * Add a column to the table.
     */
    const addColumn = () => {
        const newCol = `col${columns.length + 1}`;
        setColumns([
            ...columns,
            { Header: `Column ${columns.length + 1}`, accessor: newCol },
        ]);
        setData(data.map((row) => ({ ...row, [newCol]: "" })));
    };

    /**
     * Remove a column from the table
     */

    /**
     * Handle
     */

    const updateCell = (rowIndex: number, columnId: string, value: string) => {
        setData((oldData) =>
            oldData.map((row, index) => {
                if (index === rowIndex) {
                    return {
                        ...row,
                        [columnId]: value,
                    };
                }
                return row;
            })
        );
    };

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({
            columns,
            data,
        });

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <div style={{ position: "relative" }}>
                <table
                    {...getTableProps()}
                    style={{ border: "solid 1px black" }}
                >
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th
                                        {...column.getHeaderProps()}
                                        style={{ border: "solid 1px black" }}
                                    >
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <td
                                            {...cell.getCellProps()}
                                            style={{
                                                border: "solid 1px black",
                                            }}
                                        >
                                            <input
                                                value={cell.value}
                                                onChange={(e) =>
                                                    updateCell(
                                                        row.index,
                                                        cell.column.id,
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EditableTable;
