$(document).ready(function () {

  // InitTable();
  GetData();
});


function InitTable() {
  var table = $('#data-table-example table').DataTable({
    lengthChange: false,
    buttons: ['copy', 'print', 'pdf'],
    "language": {
      "paginate": {
        "previous": "<i class='mdi mdi-chevron-left'>",
        "next": "<i class='mdi mdi-chevron-right'>"
      }
    },
    "drawCallback": function () {
      $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
    }
  });
}

function CreateDataTable(data) {
  let tbl = `<table id="datatable-buttons" class="table table-striped custom-table " class="row flex-nowrap overflow-auto">
  <thead>
  <tr>
    <th scope="col">Order No</th>
    <th scope="col">Created By</th>

    <th scope="col">Customer Name</th>
    <th scope="col">Contact No</th>
    <th scope="col">No of Device</th>


    <th scope="col">Batch No</th>
    <th scope="col">Paper Id</th>
    <th scope="col">Courier</th>
    <th scope="col">Replacement</th>
    <th scope="col">Device Type</th>
    <th scope="col">Repair</th>
    <th scope="col">Ecg Count</th>
    <th scope="col">Shipment Date</th>

  </tr>
</thead>
    <tbody id="table-body">`;


  data.forEach((item, index) => {
  
    var count=0;
    console.log(count);

    tbl += `<tr>
          <td class="col-4">${item.orderno}</td>
          <td class="col-4">${item.name}</td>
          <td>${item.customername}</td>
          <td>${item.contactno}</td>
          <td>${item.noofdevice}</td>
          <td>${item.batchno}</td>
          <td>${item.paperid || "-"}</td>
          <td>${item.courier}</td>
          <td>${item.replacement}</td>
          <td>${item.devicetype}</td>
          <td>${item.repair}</td>
          <td>${item.ecgcount}</td>
          <td>${item.shipmentdate}</td>

        </tr>`;
    count++

  })

  // $(document).ready(function () {
  //   $('#dt-example').on('click', '.status-button', function () {
  //     var url = $(this).data('url');
  //     window.open(url, '_blank');
  //   });
  // });



  tbl += `</tbody>
  </table>`;

  $("#dt-example").html(tbl);

  // var table = $('#dt-example table').DataTable({
  //   lengthChange: false,
  //   buttons: ['copy', 'print', 'pdf'],
  //   "language": {
  //     "paginate": {
  //       "previous": "<i class='mdi mdi-chevron-left'>",
  //       "next": "<i class='mdi mdi-chevron-right'>"
  //     }
  //   },
  //   "drawCallback": function () {
  //     $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
  //   }
  // });



}

function GetData() {
  // Show the loader
  $(".loader").show();

  const requestOptions = {
    method: 'GET',
    //   headers: headers,
  };

  fetch('http://35.231.83.234:3040/getProduct', requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      $(".loader").hide();

      // data = data.data.slice(1,10)
      data = data.data
      console.log("data", data);

      CreateDataTable(data);

    })
    .catch((error) => {
      console.log("Error:".error?.message);
    });
}