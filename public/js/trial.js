window.onload = function () {
	

	function ParseURLParameter(Parameter)
	{

		var FULLURL = window.location.search.substring(1);
		var ParametersArray = FULLURL.split('&');
		for(var i=0;i< ParametersArray.length;i++){
			 var CurrentParameter =ParametersArray[i].split('=');
				 if(CurrentParameter[0] == Parameter){
				 return CurrentParameter[1];
				 }
		}
	}


	var PageName = ParseURLParameter('domain');
   // var queid=ParseURLParameter('que_id');

	/*if(typeof PageName !== 'undefined'){
		if(PageName == 'mongod'){
			alert(PageName);
		}
	}
	else{
		alert("no page found");
	}
*/

	document.myform.btn.value=PageName;
   // document.myform1.ans.value=queid;
   // alert(document.myform.check.value);
   //alert(document.myform.btn.value);
}