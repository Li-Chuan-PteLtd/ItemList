import { fetchSheetData } from './api.js';
import { renderTable } from './tableRenderer.js';

document.addEventListener('DOMContentLoaded', () => {
  const fetchButton = document.getElementById('fetchData');
  const loadingElement = document.getElementById('loading');
  const errorElement = document.getElementById('error');
  const tableHeader = document.getElementById('tableHeader');
  const tableBody = document.getElementById('tableBody');

  async function handleFetchData() {
    loadingElement.classList.remove('hidden');
    errorElement.classList.add('hidden');
    
    try {
      const data = await fetchSheetData();
      renderTable(data, tableHeader, tableBody);
    } catch (error) {
      errorElement.textContent = error.message;
      errorElement.classList.remove('hidden');
    } finally {
      loadingElement.classList.add('hidden');
    }
  }

  fetchButton.addEventListener('click', handleFetchData);
  
  // Load data on initial page load
  handleFetchData();
});