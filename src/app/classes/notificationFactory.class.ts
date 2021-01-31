import Swal from 'sweetalert2';
export class NotificationFactory {
    TYPE_ERROR = 'error';
    TYPE_SUCCESS = 'success';
    TYPE_INFO = 'info';

    getNotification(message: string, type: string){
        switch(type){
            case this.TYPE_ERROR: {
                Swal.fire('¡Error!', message, 'error');
                break;
            };
            case this.TYPE_SUCCESS: {
                Swal.fire('¡Felicidades!', message, 'success');
                break;
            };
            case this.TYPE_INFO: {
                Swal.fire('Informacion', message, 'info');
                break;
            }
            default: {
                Swal.fire('¿Que sucede?', message, 'question');
            }
        }
    }
}