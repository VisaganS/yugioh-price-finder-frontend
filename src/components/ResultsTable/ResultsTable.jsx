import React from 'react';
import './ResultsTable.scss';

export default function ResultsTable({ data }) {
  if (!data.length) return null;

  return (
    <div className="results-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Store</th>
            <th>Condition</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.name}</td>
              <td>{row.store}</td>
              <td>{row.condition || 'N/A'}</td>
              <td>{row.stock}</td>
              <td>{row.price}</td>
              <td>
                <a href={row.url} target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
