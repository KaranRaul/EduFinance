import React, { useEffect, useState } from 'react'
import { usePapaParse } from 'react-papaparse';
import * as XLSX from 'xlsx';
import FormComponent from '../components/FormComponent';
const Scholarship = () => {
    const { readString } = usePapaParse();
    const [data, setData] = useState([]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const binaryStr = e.target.result;
                const workbook = XLSX.read(binaryStr, { type: 'binary' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const csv = XLSX.utils.sheet_to_csv(worksheet);

                readString(csv, {
                    header: true,
                    complete: (results) => {
                        setData(results.data);
                    },
                });
            };
            reader.readAsBinaryString(file);
        }
    };
    // handleFileChange();

    console.log(data);

    return (
        <div>
            {/* <div>
                <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
                <table>
                    <thead>
                        <tr>
                            {data.length > 0 &&
                                Object.keys(data[0]).map((header, index) => (
                                    <th key={index}>{header}</th>
                                ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {Object.values(row).map((value, colIndex) => (
                                    <td key={colIndex}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> */}
            <FormComponent />
        </div>
    );
};


export default Scholarship;