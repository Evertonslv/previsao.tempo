var listCity = [];

$(document).ready(function() {

	$(".inputFind").keyup(function() {
    filterCity();
  });

	if(location.href.indexOf("previsao") == -1) {
		getCity();
	} else {
		getCityByCode(getCodeUrl());
	}
});

function insertCity() {

	var nameCity = $('#nameCity').val();
	var infoCity = getCityByName(nameCity);

	if(typeof infoCity !== "undefined") {

		$.ajax({
			url: "city",
			type: "POST",
			data: {"namecity": infoCity.name, "codecity": infoCity.id},
			dataType: "json",
			success: function(jsonCity){
				var newRow = $("<tr>");
				newRow.append(getContentTableCity(jsonCity));
				$("#tableCity").append(newRow);
			}, 
			error: function (jqXHR, textStatus, errorThrown) {
				alert(jqXHR.responseJSON.message);
			}
		});
	}

	$('#nameCity').val("");

}

function getCity() {

	$.ajax({
		url: "city",
		type: "GET",
		dataType: "json",
		success: function(jsonCity){
			listCity = jsonCity;
			filterCity()
		}, 
		error: function (jqXHR, textStatus, errorThrown) {
			alert(jqXHR.responseJSON.message);
		}
	});

}

function getCityByCode(id) {
	
	if(id > 0) {
		var info;

		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/forecast?id=" + id + "&units=metric&appid=eb8b1a9405e659b2ffc78f0a520b1a46",
			type: "GET",
			dataType: "json",
			async: false,
			success: function(jsonCity){

				var info = [];
				var index = 0;
				var dateControl;
				var hourControl = formatDataTimeToTime(jsonCity.list[0].dt_txt)

				if(jsonCity != null) {
					for (i in jsonCity.list) {
						if(dateControl !== formatDataTimeToDate(jsonCity.list[i].dt_txt) && 
							hourControl == formatDataTimeToTime(jsonCity.list[i].dt_txt)) {
							
							info[index++] = jsonCity.list[i];
							dateControl = formatDataTimeToDate(jsonCity.list[i].dt_txt);
						}
					}

					mountForecast(info, jsonCity.city.name);
				}
			}, 
			error: function (jqXHR, textStatus, errorThrown) {
				alert(jqXHR.responseJSON.message);
			}
		});

		return info;
	}
}

function getCityByName(name){
	        
	if (name != ''){
		var info;

		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/weather?q=" + name + "&units=metric&appid=eb8b1a9405e659b2ffc78f0a520b1a46",
			type: "GET",
			dataType: "json",
			async: false,
			success: function(data){
				info = data;
			}, 
			error: function (jqXHR, textStatus, errorThrown) {
				alert("Cidade inválida!");
			}
		});

		return info;
	}else{
	  alert('Cidade não preenchida!');
	}
	
}

function getContentTableCity(jsonCity) {

	var contentHtml = "";

	if(jsonCity != null) {
		for (i in jsonCity) {
			contentHtml += "<tr onclick=\"location.href = 'pages/previsao.html?code="+ jsonCity[i].code + "'\" style=\"cursor: pointer;\">";
			contentHtml += "  <td>" + jsonCity[i].code + "</td>";
			contentHtml += "  <td>" + jsonCity[i].name + "</td>";
			contentHtml += "</tr>";
		}
	}

	return contentHtml;	
}

function mountForecast(forecast, nameCity) {
	
	if(forecast != null) {

		var contentHtml = "";

		for (i in forecast) {

			if(i == 0){
				contentHtml += '<div class="today forecast">';
				contentHtml += '        <div class="forecast-header">';
				contentHtml += '            <div class="day">'+getDayWeek(formatDataTimeToDate(forecast[i].dt_txt))+'</div>';
				contentHtml += '            <div class="date">'+getDateExtenso(formatDataTimeToDate(forecast[i].dt_txt))+'</div>';
				contentHtml += '        </div>';
				contentHtml += '        <div class="forecast-content">';
				contentHtml += '            <div class="location">'+nameCity+'</div>';
				contentHtml += '            <div class="degree">';
				contentHtml += '                <div class="num">'+Math.ceil(forecast[i].main.temp)+'<sup>o</sup>C</div>';
				contentHtml += '                <div class="forecast-icon">';
				contentHtml += '                    <img src="../images/icons/'+forecast[i].weather[0].icon+'.png" alt="" width=90>';
				contentHtml += '                </div>';
				contentHtml += '            </div>';
				contentHtml += '            <span><img src="../images/icon-umberella.png" alt="">'+forecast[i].main.humidity+'%</span>';
				contentHtml += '            <span><img src="../images/icon-wind.png" alt="">'+convertMsToKmh(forecast[i].wind.speed)+'km/h</span>';
				contentHtml += '        </div>';
				contentHtml += '    </div>';
			} else {		
				contentHtml += '<div class="forecast">';
				contentHtml += '	<div class="forecast-header">';
				contentHtml += '		<div class="day">'+getDayWeek(formatDataTimeToDate(forecast[i].dt_txt))+'</div>';
				contentHtml += '	</div>';
				contentHtml += '	<div class="forecast-content">';
				contentHtml += '		<div class="forecast-icon">';
				contentHtml += '			<img src="../images/icons/'+forecast[i].weather[0].icon+'.png" alt="" width=48>';
				contentHtml += '		</div>';
				contentHtml += '		<div class="degree">'+Math.ceil(forecast[i].main.temp_max)+'<sup>o</sup>C</div>';
				contentHtml += '		<small>'+Math.ceil(forecast[i].main.temp_min)+'<sup>o</sup></small><br>';
				contentHtml += '    <span><img src="../images/icon-umberella.png" alt="" width=15> '+forecast[i].main.humidity+'%</span>';
				contentHtml += '    <span><img src="../images/icon-wind.png" alt="" width=15> '+convertMsToKmh(forecast[i].wind.speed)+'km/h</span>';
				contentHtml += '	</div>';
				contentHtml += '</div>';
			}
		}

		$(".forecast-container").html(contentHtml);
	}

}

function filterCity() {
  var novaLista = [];
  var indexControle = 0;
	var valor = $(".inputFind").val().toUpperCase();
	var t = listCity[0].code.toString();
	var c = listCity[0].code.toString().indexOf(valor);

  if (valor !== "") {
    for (i in listCity) {
      if (listCity[i].name.toUpperCase().indexOf(valor) >= 0 || listCity[i].code.toString().indexOf(valor) >= 0) {
        novaLista[indexControle++] = listCity[i];
      }
    }
  } else {
    novaLista = listCity;
  }

  $("#tableCity").html(getContentTableCity(novaLista));
}