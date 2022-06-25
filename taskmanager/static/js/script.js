document.addEventListener('DOMContentLoaded', function() {
    // side nav initialized
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // datepicker initialization
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker,{
        format: "dd mmmm yyyy"
        i18n: {done: "select"}
    });
  });