import React from 'react';

const TableComponent = ({columns, data}) => {
    return (
        <div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        {columns &&
                            columns.map((item) => (
                                <th>{item.title}</th>
                            ))}
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map((row) => (
                            <tr>
                                {columns.map((col) => (
                                    <td>{row[col.dataKey]}</td>
                                ))}
                            </tr>
                        ))}
                </tbody>
            </table>
            {data ? null : <p>No Data Found</p>}
        </div>
    )
}



export default TableComponent