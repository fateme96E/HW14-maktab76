const API_URL = 'https://62c4af5dabea8c085a7af610.mockapi.io/HW14/workers';
const loading = $(".loading");
$(document).ready(function () {
    $("thead tr").hide();
    loading.show();
})
$("button").click(function(){
    $.ajax({
        url: API_URL,
        success: function(data){
            loading.hide();
            $("thead tr").show();
            data.forEach(function(worker){
                const rowData = "<tr><td>" + worker.firstName + worker.lastName + "</td><td>" + worker.age + "</td><td>" +worker.phone+ "</td><td>" + worker.address + "</td><td>" +worker.job+ "</td></tr>";
                $("table tbody").append(rowData);
                console.log(worker);
            });
        }
    });
})