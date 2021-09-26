/**
 * Crear una página web que muestre al usuario y vaya actualizando la información de:
 * 
 * - El estado de la batería (si está cargando, su porcentaje y el tiempo estimado de carga)
 * - Si el usuario está offline u online
 * - Geolocalización (Latitud y longitud) que se vaya actualizando
 * - La página deberá enviar una notificación al usuario cuando esté offline y cuando vuelva online
 **/

/** --------- BATTERY ----------- */

// navigator.getBattery() -> Promesa

function formatDischargingTime(time){
    // Formatea el tiempo dado en segundos y lo devuelve en un string h,m,s
    const hours = Math.trunc(time/3600); // Parte entera de las horas
    const minutos = Math.trunc(time%3600/60); // la parte entera de los minutos
    const segundos = (time%3600)%60; // segundos restantes
    return `${hours}h ${minutos}m ${segundos}s`;

}

function updateBatteryStatus(batteryStatus){
    // Actualiza en la vista el estado de la bateria
    // recuperar el DOM
    const statusDOM = document.getElementById('BATT_PERCENT');
    const chargingDOM = document.getElementById('BATT_CHARGING');
    const timeDOM = document.getElementById('BATT_TIME');
    // actualizar su infoemacion
    statusDOM.textContent = batteryStatus.level*100; // nivel de batería
    chargingDOM.textContent = batteryStatus.charging;
    timeDOM.textContent = batteryStatus.dischargingTime !== Infinity ? formatDischargingTime(batteryStatus.dischargingTime): 'Nunca';

}

function onUpdateBatteryEvent(batteryEvent){
    updateBatteryStatus(batteryEvent.currentTarget);
}

function initializeBatteryStatus() {
    navigator.getBattery().then(function(batteryStatus){
        // Actualizar mi DOM (vista)
        updateBatteryStatus(batteryStatus);
        batteryStatus.onchargingchange = onUpdateBatteryEvent;
        batteryStatus.ondischargingtimechange = onUpdateBatteryEvent;
        batteryStatus.onlevelchange = onUpdateBatteryEvent;
    })
}

initializeBatteryStatus();

/** --------- FIN BATTERY ----------- */

/** --------- OFFLINE/ONLINE ----------- */

// navigator.onLine => true/false

function showNetworkStatus(){
    // Me muestra en el HTML si tengo conexion a internet o no 
    const statusDOM = document.getElementById('NET_STATUS');
    statusDOM.textContent = navigator.onLine ? 'SI' : 'NO';
}
window.addEventListener('offline', showNetworkStatus);
window.addEventListener('online', showNetworkStatus);

showNetworkStatus();

/** --------- FIN OFFLINE/ONLINE ----------- */

/** ---------- NOTIFICACIONES ------------ */

function showOfflineNotification(){
    // Mostrar una notificacion cuando me vaya a offline
    new Notification('Te has quedado sin conexión, por favor intente recuperarla');
}

function showOnlineNotification(){
    // Mostrar una notificacion cuando me vuelva a online
    new Notification('La conexión ha sido reestablecida');
}

Notification.requestPermission().then(function(result){
    // SOLICITAMOS LOS PERMISOS AL USUARIO
    // 'granted' es que nos ha proporcionado permisos
    if(result==='granted'){
        // PERMISO CONCECIDO, podemos hacer cosas con notificaciones
        window.addEventListener('offline', showOfflineNotification);
        window.addEventListener('online', showOnlineNotification);
    }
})