// const itemsPerPage = 10; // Number of items per page
// let currentPage = 1;
// let data = []; // To store API data

// // Function to make an API request and fetch data
// async function fetchData() {
  
//   const apiUrl = 'http://35.231.83.234:3040/getProduct';
//   try {
//     const response = await fetch(apiUrl);
//     const result = await response.json();
//     data = result.data.slice(1, 30);
//     console.log("data",data);
//     displayItems();
//     createPaginationButtons();
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }

// // Function to display items for the current page
// function displayItems() {
//   const content = document.getElementById('content');
//   content.innerHTML = '';

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   const table = document.createElement('table');
//   table.className = 'table table-striped custom-table';
//   const thead = document.createElement('thead');
//   const tbody = document.createElement('tbody');

//   const headerRow = document.createElement('tr');
//   headerRow.innerHTML = `
//                 <th>Order No</th>
//                 <th>Created By</th>
//                 <th>Customer Name</th>
//                 <th>Contact No</th>
//                 <th>No of Device</th>
//                 <th>Batch No</th>
//                 <th>Paper Id</th>
//                 <th>Courier</th>
//                 <th>Replacement</th>
//                 <th>Device Type</th>
//                 <th>Repair</th>
//                 <th>Ecg Count</th>
//                 <th>Shipment Date</th>
//             `;

//   thead.appendChild(headerRow);
//   table.appendChild(thead);
//   table.appendChild(tbody);

//   for (let i = startIndex; i < endIndex && i < data.length; i++) {
//     const item = data[i];
//     const row = document.createElement('tr');
//     row.innerHTML = `
//                     <td>${item.orderno || "-"}</td>
//                     <td>${item.name || "-"}</td>
//                     <td>${item.customername || "-"}</td>
//                     <td>${item.contactno || "-"}</td>
//                     <td>${item.noofdevice || "-"}</td>
//                     <td>${item.batchno || "-"}</td>
//                     <td>${item.paperid || "-"}</td>
//                     <td>${item.courier || "-"}</td>
//                     <td>${item.replacement || "-"}</td>
//                     <td>${item.devicetype || "-"}</td>
//                     <td>${item.repair || "-"}</td>
//                     <td>${item.ecgcount || "-"}</td>
//                     <td>${item.shipmentdate || "-"}</td>
//                 `;
//     tbody.appendChild(row);
//   }

//   content.appendChild(table);

//   $('#datatable-buttons').DataTable();
// }

// // Function to create pagination buttons
// function createPaginationButtons() {
//   const pagination = document.querySelector('.pagination');
//   pagination.innerHTML = '';

//   const totalPages = Math.ceil(data.length / itemsPerPage);
//   const maxPagesToShow = 5; // Number of pages to show at a time
//   const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);

//   let startPage = currentPage - halfMaxPagesToShow;
//   startPage = Math.max(1, startPage);
//   const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

//   const prevButton = document.createElement('li');
//   prevButton.textContent = 'Previous';
//   prevButton.addEventListener('click', () => {
//     if (currentPage > 1) {
//       currentPage--;
//       displayItems();
//       createPaginationButtons();
//     }
//   });
//   pagination.appendChild(prevButton);

//   for (let page = startPage; page <= endPage; page++) {
//     const li = document.createElement('li');
//     li.textContent = page;
//     li.addEventListener('click', () => {
//       currentPage = page;
//       displayItems();
//       createPaginationButtons();
//     });

//     if (page === currentPage) {
//       li.classList.add('active');
//     }

//     pagination.appendChild(li);
//   }

//   const nextButton = document.createElement('li');
//   nextButton.textContent = 'Next';
//   nextButton.addEventListener('click', () => {
//     if (currentPage < totalPages) {
//       currentPage++;
//       displayItems();
//       createPaginationButtons();
//     }
//   });
//   pagination.appendChild(nextButton);
// }

// fetchData();
