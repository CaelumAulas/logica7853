var tempoSemFormatar;
function formataRelogio(){
    var tempoEmHorasFloat = tempoSemFormatar/60;
    var horas = parseInt(tempoEmHorasFloat);
    var minutos = parseInt((tempoEmHorasFloat - horas) * 60);
    return horas.toString().padStart(2,0) + "h" + minutos.toString().padStart(2,0) + "min";
}