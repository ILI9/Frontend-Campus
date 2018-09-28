let select = document.getElementById("orderSelect");

select.addEventListener('change', function(){
    alert(document.getElementById('orderSelect').value);
    console.log(this);
});


