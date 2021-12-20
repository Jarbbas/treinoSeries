function convertTime(value) {
  const sec = parseInt(value, 10); // convert value to number if it's string
  let hours = Math.floor(sec / 3600); // get hours
  let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
  let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
  let ms = sec - seconds * 1000; //  get milliseconds

  // add 0 if value < 10; Example: 2 => 02
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  //  if (ms < 10) {
  //    ms = "0" + ms;
  //   }
  let milliseconds = Math.ceil(((Math.abs(ms))) /1000);
  
  return minutes + ":" + seconds + "." + milliseconds;  // Return is HH : MM : SS
}

$(document).ready(function () {
  let calculos = false;

  $("#calcular").click(function () {
    calculos = true;
    $("html, body").animate(
      { scrollTop: $("#sectionThree").offset().top },
      1500
    );

    var minutos_actividade = $("#minutos_actividade").val();
    var segundos_actividade = $("#segundos_actividade").val();
    var minutos_descanso = $("#minutos_descanso").val();
    var segundos_descanso = $("#segundos_descanso").val();
    var distancia = $("#distancia").val();
    var numero_series = $("#numero_series").val();

    if (minutos_actividade === "" || minutos_actividade.length === 0) {
      if (segundos_actividade == 0 || segundos_actividade === "") {
        seconds_activity = parseInt(0) * 60;
      } else {
        seconds_activity = parseInt(0) * 60 + parseInt(segundos_actividade);
      }
    } else {
      if (segundos_actividade == 0 || segundos_actividade === "") {
        seconds_activity = parseInt(minutos_actividade) * 60;
      } else {
        seconds_activity =
          parseInt(minutos_actividade) * 60 + parseInt(segundos_actividade);
      }
    }

    if (minutos_descanso === "" || minutos_descanso.length === 0) {
      if (segundos_descanso == 0 || segundos_descanso === "") {
        seconds_rest = parseInt(0) * 60;
      } else {
        seconds_rest = parseInt(0) * 60 + parseInt(segundos_descanso);
      }
    } else {
      if (segundos_descanso == 0 || segundos_descanso === "") {
        seconds_rest = parseInt(minutos_descanso) * 60;
      } else {
        seconds_rest =
          parseInt(minutos_descanso) * 60 + parseInt(segundos_descanso);
      }
    }

    if (distancia.length == 2) {
      let char = distancia.charAt(0);
      distance = char;
    } else if (distancia.length == 3) {
      distance = distancia.slice(0, 1);
    } else if (distancia.length == 4) {
      distance = distancia.slice(0, 2);
    }

    for (let index = 1; index <= distance; index++) {
      var result = (seconds_activity / distance) * index;

      var volta = (seconds_activity / distance) * 1;
      volta = Math.round(volta * 100) / 100;

      if (distancia.length > 2) {
        var metros = "00m";
      } else {
        var metros = "0m";
      }

      $("#tabelaVoltas").append(
        "<tr><td>" +
          volta +
          "s</td><td>" +
          index +
          metros +
          "</td><td>" +
          convertTime(result) +
          "</td></tr>"
      );
    }

    var tempo_total_atividade = numero_series * seconds_activity;
    var tempo_total_descanso = numero_series * seconds_rest;
    var tempo_total = tempo_total_atividade + tempo_total_descanso;
    var distancia_total = numero_series * distancia;
    
   
    $("#tempo_total_atividade").after(
      "<td>" + convertTime(tempo_total_atividade) + "</td>"
    );
    $("#tempo_total_descanso").after(
      "<td>" + convertTime(tempo_total_descanso) + "</td>"
    );
    $("#tempo_total").after("<td>" + convertTime(tempo_total) + "</td>");
    $("#distancia_total").after("<td>" + distancia_total + "m</td>");

    $("#track1").mouseover(function () {
      console.log(parseInt(distance));
      var lane = (seconds_activity / parseInt(distance)) * 1;
      lane = Math.round(lane * 100) / 100;
      var lane100m = lane;
      var lane200m = lane * 2;
      var lane300m = lane * 3;
      var lane400m = lane * 4;
      document.getElementById("lane100m").innerHTML = convertTime(lane100m);
      document.getElementById("lane200m").innerHTML = convertTime(lane200m);
      document.getElementById("lane300m").innerHTML = convertTime(lane300m);
      document.getElementById("lane400m").innerHTML = convertTime(lane400m);
    });
    $("#track2").mouseover(function () {
      console.log(parseInt(distance) + 0.07);
      var lane = (seconds_activity / (parseInt(distance) + 0.07)) * 1;
      var lane100m = lane;
      var lane200m = lane * 2;
      var lane300m = lane * 3;
      var lane400m = lane * 4;
      document.getElementById("lane100m").innerHTML = convertTime(lane100m);
      document.getElementById("lane200m").innerHTML = convertTime(lane200m);
      document.getElementById("lane300m").innerHTML = convertTime(lane300m);
      document.getElementById("lane400m").innerHTML = convertTime(lane400m);
    });
    $("#track3").mouseover(function () {
      console.log(parseInt(distance) + 0.14);
      var lane = (seconds_activity / (parseInt(distance) + 0.14)) * 1;
      var lane100m = lane;
      var lane200m = lane * 2;
      var lane300m = lane * 3;
      var lane400m = lane * 4;
      document.getElementById("lane100m").innerHTML = convertTime(lane100m);
      document.getElementById("lane200m").innerHTML = convertTime(lane200m);
      document.getElementById("lane300m").innerHTML = convertTime(lane300m);
      document.getElementById("lane400m").innerHTML = convertTime(lane400m);
    });
    $("#track4").mouseover(function () {
      console.log(parseInt(distance) + 0.22);
      var lane = (seconds_activity / (parseInt(distance) + 0.22)) * 1;
      var lane100m = lane;
      var lane200m = lane * 2;
      var lane300m = lane * 3;
      var lane400m = lane * 4;
      document.getElementById("lane100m").innerHTML = convertTime(lane100m);
      document.getElementById("lane200m").innerHTML = convertTime(lane200m);
      document.getElementById("lane300m").innerHTML = convertTime(lane300m);
      document.getElementById("lane400m").innerHTML = convertTime(lane400m);
    });
    $("#track5").mouseover(function () {
      console.log(parseInt(distance) + 0.3);
      var lane = (seconds_activity / (parseInt(distance) + 3)) * 1;
      var lane100m = lane;
      var lane200m = lane * 2;
      var lane300m = lane * 3;
      var lane400m = lane * 4;
      document.getElementById("lane100m").innerHTML = convertTime(lane100m);
      document.getElementById("lane200m").innerHTML = convertTime(lane200m);
      document.getElementById("lane300m").innerHTML = convertTime(lane300m);
      document.getElementById("lane400m").innerHTML = convertTime(lane400m);
    });


  });

  $("#limpar").click(function () {
    location.reload();
  });

  $("input").click(function () {
    $(".resumo").css("opacity", "1");
    $(".trackContainer").css("opacity", "1");
    if (calculos == true) {
      location.reload();
    }
  });
  
});
