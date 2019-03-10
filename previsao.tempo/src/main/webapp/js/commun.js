$("#openModal").click(function(){ $("#cityModal").fadeIn(); });
$("#cityModal, .close").click(function(){ $("#cityModal").hide(); });
$("#my_modal").click(function(e){ e.stopPropagation(); });

function getValorUrl(url, campo) {
    var urlFormat = url.replace(/\?|\&/g, "\r\n").trim();
    var listaValUrl = urlFormat.split("\n");
  
    for (var i = 0; i < listaValUrl.length; i++) {
      var valor = listaValUrl[i].split("=");
  
      if (valor[0].trim() == campo.trim()) {
        return valor[1];
      }
    }
  
    return "";
}

function getCodeUrl() {
    return getValorUrl(location.search, "code");
}

function formatDataTimeToDate(dateTime) {
    date = dateTime.split(/\s+/g).shift().split("-");
    var year = date[0];
    var month = date[1];
    var day = date[2];

    return day + "-" + month + "-" + year;
}

function formatDataTimeToTime(dateTime) {  
    tempo = dateTime.split(/\s+/g).pop().split(":");
    var hour = tempo[0];
    var minute = tempo[1];
    var second = tempo[2];
  
    return hour + ":" + minute + ":" + second;
}

function convertKelvinToCelsius(value) {
    return Math.ceil(value - 273.15);
}

// Converte m/s para k/h
function convertMsToKmh(value) {
    return Math.ceil(value * 3.6);
}

function getDayWeek(dateValue) {
    var week = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    var arr = dateValue.split("-").reverse();
    var date = new Date(arr[0], arr[1] - 1, arr[2]);
    var day = date.getDay();
    
    return week[day];
}

function getDateExtenso(dateValue) {
      
    var arr = dateValue.split("-").reverse();
    var date = new Date(arr[0], arr[1] - 1, arr[2]);
    var day = date.getDate();
    var month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][date.getMonth()];
    
    return day + ' de ' + month;
  }