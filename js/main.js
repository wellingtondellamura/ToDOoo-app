var category = {
	"name" : "Universidade",
	"icon" : "icon1",
	"color" : "#ff0000"	
}

var myheaders = new Headers({
'Content-Type': 'application/json',
'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZjZhYTRmNWRiY2U1NjExYzIxM2VlZjI1ZDEyNmI4YTk5Y2MxMzQ3YzJlYTc1YzIzZmQwZjM5NTYxNDAwNjQ4OWFlNGYyNDE1YWVjOWU2M2UiLCJpYXQiOjE1NzQyODAyMTAsIm5iZiI6MTU3NDI4MDIxMCwiZXhwIjoxNjA1OTAyNjEwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.dzrJTFoHPYum2UVg5GGl_fDSmx_RB-0_WN14_NRO37TC66zzClAO5doaUNEuyMLoT8S3WEaxPVNWtuwxNbL5_4dPFN5S-PHCpr-8Yop8Nl4lJv6DXo1iMu5TFG5WiTq77WyfkhXZA1I3cno4ph_-m7iJg7A4xzmu5m3naPvG71VhVguzXHxoLhZZf0G9loiak-XGfTVyQG_BQYqa-LbUsVQDZ4z4oFpBqHaE4YgwNC1BaOlTmX6EdRwxuXFRN-BNYl8nRbtqBkMlIK6oz7dj3PWFwXrukfCvro15tvrIyLU15KkFZKlu4iCbxOV-xQ3uiej_9ZBZyArEPUrew8eDRd2N9pErvqXo3siTYHUea3KujGPeNYegvSa7cGqTbciFfVnQbgR_9b1hh-mjeI8lITCCXBfGodAfc1Mu9z36ubOBTIjhCckxBs4Sv72K-h70iENkfTsyeVAIed2L_ZPATmZb3Xgn4CP8Zw38IxhTe_sU4WtIH4-B4q5WnCxD7SHa_mqiSKEtPY1rfpg81on4UNo40Bjl5kBIZS5Fp0YLpycXt25GQaatxd_7NKH8pCIzLLRDB5vCgry5tBri7hSd1ro48xVp6FFSnXMgbu__Je3HaewSoHrZYZUdGg6bHxATKDJ_v2ab9vJg-kP1Vy8ogrRYpusYoeU5q2Vfy8s078Y'
})

 fetch('http://localhost:8000/api/category', {
    method: 'post',
    redirect: 'follow',
    headers: myheaders,
    body: JSON.stringify(category )
  }).then(function(response) {
    response.json().then(function(data){
    	console.log(data); 
	document.cre
    });
  }).catch(function(error) {
    console.log('error:', error);
  });