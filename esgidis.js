////////////////////////////////////
var ATA = {};
////////////////////////////////////


ATA["EsGidis"] = {};
ATA["EsGidis"]["Dizin"] = [];
ATA["EsGidis"]["Oluştur"] = function() {
 var eg = {};
 eg.kmlk = ATA["EsGidis"]["Dizin"].length;
 eg.Tamam = false;
 eg.F = [];
 eg.FEkle = function(ofonk) {
  this.F.push(function(){ofonk()});
 };
 ATA["EsGidis"]["Dizin"].push(eg);
 return eg;
};
ATA["EsGidis"]["Çalıştır"] = function() {
 var fs = 0;
 for (var j=0;j<fs;j++) {
  for (var i=0;i<ATA["EsGidis"]["Dizin"].length;i++) {
   if (ATA["EsGidis"]["Dizin"][i].kmlk != i) continue;
   if (ATA["EsGidis"]["Dizin"][i].F.length > fs) fs = ATA["EsGidis"]["Dizin"][i].F.length;
   if (ATA["EsGidis"]["Dizin"][i].F[j]) ATA["EsGidis"]["Dizin"][i].F[j]();
  }
 }
};