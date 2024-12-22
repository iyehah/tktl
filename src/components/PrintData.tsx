import React from "react";

interface PrintDataProps {
  tableId: string;
}

const PrintData: React.FC<PrintDataProps> = ({ tableId }) => {
  const handlePrint = () => {
    const table = document.getElementById(tableId) as HTMLTableElement;
    if (!table) return;

    // نسخ الجدول مع إخفاء عمود "الإجراءات"
    const clonedTable = table.cloneNode(true) as HTMLTableElement;
    Array.from(clonedTable.querySelectorAll("th, td")).forEach((cell) => {
      if (cell.textContent?.includes("الإجراءات")) {
        cell.remove();
        }
      if (cell.querySelector("button")) {
        cell.remove();
            
        }
    });

    // طباعة الجدول
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    printWindow.document.write(`
      <html dir="rtl">
        <head>
          <title>طباعة البيانات</title>
          <style>
            table {
              width: 100%;
              border-collapse: collapse;
              text-align: center;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 8px;
            }
              .no-print{
              display: none;
              }
          </style>
        </head>
        <body>
          ${clonedTable.outerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      طباعة
    </button>
  );
};

export default PrintData;
