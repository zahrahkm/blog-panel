import toastr from 'toastr'
import 'toastr/build/toastr.min.css'


toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-top-left",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "2000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}


class notification{
    static success(msg){
        return toastr.success(msg)
    }
    static error(msg){
        return toastr.error(msg)
    }
}

export default notification;