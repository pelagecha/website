"use client";

import { NextPage } from "next";
import { FaHammer } from "react-icons/fa";

const SplashWindow: NextPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-800 bg-dark:bg-gray-900 text-white text-dark:text-gray-300">
            <div className="text-center">
                <FaHammer className="mx-auto text-6xl mb-4" />
                <h1 className="text-4xl font-bold">Under Construction</h1>
                <p className="mt-2 text-lg">
                    I'm working hard to bring you a great experience. Stay
                    tuned!
                </p>
            </div>
        </div>
    );
};

export default SplashWindow;

// "use client";

// import React, { useState } from "react";
// import { useTable, Column } from "react-table";
// import { FaPlus, FaMinus } from "react-icons/fa";

// interface Data {
//     [key: string]: string;
// }

// const EditableTable: React.FC = () => {
//     const [data, setData] = useState<Data[]>([
//         { col1: "", col2: "" },
//         { col1: "", col2: "" },
//     ]);

//     const [columns, setColumns] = useState<Column<Data>[]>([
//         { Header: "Column 1", accessor: "col1" },
//         { Header: "Column 2", accessor: "col2" },
//     ]);

//     /**
//      * Button to add/remove rows/columns to the table.
//      */
//     const resizeButton = (isRow: boolean, isAdd: boolean) => {
//         let action;
//         if (isRow) {
//             action = isAdd ? addRow : removeRow;
//         } else {
//             action = isAdd ? addColumn : removeColumn;
//         }
//         const backgroundColor = isAdd ? "green" : "red";
//         return (
//             <button
//                 onClick={action}
//                 style={{
//                     backgroundColor: backgroundColor,
//                     borderRadius: "50%",
//                     color: "white",
//                     border: "none",
//                     margin: "5px",
//                 }}
//             >
//                 isAdd ? <FaPlus /> : <FaMinus />;
//             </button>
//         );
//     };

//     /**
//      * Adds a row to the table.
//      */
//     const addRow = () => {
//         setData([...data, { col1: "", col2: "" }]);
//     };

//     /**
//      * Removes the bottom row from the table.
//      */
//     const removeRow = () => {
//         setData(data.slice(0, -1));
//     };

//     /**
//      * Add a column to the table.
//      */
//     const addColumn = () => {
//         const newCol = `col${columns.length + 1}`;
//         setColumns([
//             ...columns,
//             { Header: `Column ${columns.length + 1}`, accessor: newCol },
//         ]);
//         setData(data.map((row) => ({ ...row, [newCol]: "" })));
//     };

//     /**
//      * Remove a column from the table.
//      */
//     const removeColumn = () => {
//         if (columns.length > 1) {
//             const newColumns = columns.slice(0, -1);
//             setColumns(newColumns);
//             setData(
//                 data.map((row) => {
//                     const newRow = { ...row };
//                     delete newRow[`col${columns.length}`];
//                     return newRow;
//                 })
//             );
//         }
//     };

//     /**
//      * Rename a column header.
//      */
//     const renameColumn = (index: number, newName: string) => {
//         setColumns(
//             columns.map((col, i) =>
//                 i === index ? { ...col, Header: newName } : col
//             )
//         );
//     };

//     /**
//      * Swap two columns.
//      */
//     const swapColumns = (index1: number, index2: number) => {
//         const newColumns = [...columns];
//         [newColumns[index1], newColumns[index2]] = [
//             newColumns[index2],
//             newColumns[index1],
//         ];
//         setColumns(newColumns);
//         setData(
//             data.map((row) => {
//                 const newRow = { ...row };
//                 [newRow[`col${index1 + 1}`], newRow[`col${index2 + 1}`]] = [
//                     newRow[`col${index2 + 1}`],
//                     newRow[`col${index1 + 1}`],
//                 ];
//                 return newRow;
//             })
//         );
//     };

//     /**
//      * Render LaTeX formula for the table.
//      */
//     const renderLatex = () => {
//         const headers = columns.map((col) => col.Header).join(" & ");
//         const rowsData = data
//             .map((row) => columns.map((col) => row[col.accessor]).join(" & "))
//             .join(" \\\\ ");
//         return `\\begin{tabular}{${"c".repeat(
//             columns.length
//         )}}\n${headers} \\\\\n\\hline\n${rowsData}\n\\end{tabular}`;
//     };

//     const updateCell = (rowIndex: number, columnId: string, value: string) => {
//         setData((oldData) =>
//             oldData.map((row, index) => {
//                 if (index === rowIndex) {
//                     return {
//                         ...row,
//                         [columnId]: value,
//                     };
//                 }
//                 return row;
//             })
//         );
//     };

//     const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//         useTable({
//             columns,
//             data,
//         });

//     return (
//         <div
//             style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 height: "100vh",
//                 flexDirection: "column",
//             }}
//         >
//             <div style={{ position: "relative" }}>
//                 <table
//                     {...getTableProps()}
//                     style={{ border: "solid 1px black" }}
//                 >
//                     <thead>
//                         {headerGroups.map((headerGroup) => (
//                             <tr {...headerGroup.getHeaderGroupProps()}>
//                                 {headerGroup.headers.map((column, index) => (
//                                     <th
//                                         {...column.getHeaderProps()}
//                                         style={{ border: "solid 1px black" }}
//                                     >
//                                         <input
//                                             value={column.Header}
//                                             onChange={(e) =>
//                                                 renameColumn(
//                                                     index,
//                                                     e.target.value
//                                                 )
//                                             }
//                                         />
//                                     </th>
//                                 ))}
//                             </tr>
//                         ))}
//                     </thead>
//                     <tbody {...getTableBodyProps()}>
//                         {rows.map((row) => {
//                             prepareRow(row);
//                             return (
//                                 <tr {...row.getRowProps()}>
//                                     {row.cells.map((cell) => (
//                                         <td
//                                             {...cell.getCellProps()}
//                                             style={{
//                                                 border: "solid 1px black",
//                                             }}
//                                         >
//                                             <input
//                                                 value={cell.value}
//                                                 onChange={(e) =>
//                                                     updateCell(
//                                                         row.index,
//                                                         cell.column.id,
//                                                         e.target.value
//                                                     )
//                                                 }
//                                             />
//                                         </td>
//                                     ))}
//                                 </tr>
//                             );
//                         })}
//                     </tbody>
//                 </table>
//                 <div style={{ display: "flex", justifyContent: "flex-end" }}>
//                     {resizeButton(true, true)}
//                     {resizeButton(true, false)}
//                 </div>
//                 <div
//                     style={{
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "flex-end",
//                     }}
//                 >
//                     {resizeButton(false, true)}
//                     {resizeButton(false, false)}
//                 </div>
//             </div>
//             <textarea
//                 readOnly
//                 value={renderLatex()}
//                 style={{ marginTop: "20px", width: "80%", height: "100px" }}
//             />
//         </div>
//     );
// };

// export default EditableTable;
