export default class Alert {
    constructor(alertId){
        this.alert = document.getElementById(alertId);
        //1.30  https://www.youtube.com/watch?v=CSWnqdhN5vk&t=2238s
    }

    show(message){
        this.alert.classList.remove('d-none');
        this.alert.innerHTML=message;
    }
    hide(){
        this.alert.classList.add('d-none');
    }
}