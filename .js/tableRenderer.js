export function renderTable(data, tableHeader, tableBody) {
  // Clear existing content
  tableHeader.innerHTML = '';
  tableBody.innerHTML = '';

  if (!data || data.length === 0) {
    return;
  }

  // Render headers
  const headers = Object.keys(data[0]);
  headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    tableHeader.appendChild(th);
  });

  // Render data rows
  data.forEach(row => {
    const tr = document.createElement('tr');
    headers.forEach(header => {
      const td = document.createElement('td');
      td.textContent = row[header] || '';
      tr.appendChild(td);
    });
    tableBody.appendChild(tr);
  });
}