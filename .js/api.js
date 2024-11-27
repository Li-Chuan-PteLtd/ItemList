const API_URL = 'https://googlesheetapi-2.onrender.com/sheet-data';

export async function fetchSheetData() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  } catch (error) {
    throw new Error('Error fetching data: ' + error.message);
  }
}