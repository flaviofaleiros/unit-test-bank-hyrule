import React from 'react';
import './style.css';

const List = ({data}) => {

    return (
        <>
            <table className="container">
                <thead >
                <tr className="header">
                    <th className="header">Data</th>
                    <th className="header">Operação</th>
                    <th className="header">Valor</th>
                </tr>
                </thead>
                <tbody>
                { data?.map((row, index) => (
                    <tr key={index} >
                        <td className="coll">{row?.date}</td>
                        <td className="coll">{row?.transaction}</td>
                        <td className="coll">{row?.value}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};

export default List;
