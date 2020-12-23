Events.on(Trigger.newGame.class,e=>{
    var num1 = Mathf.round(Mathf.random() * 9).toString();
	var num2 = Mathf.round(Mathf.random() * 9).toString();
	var num3 = Mathf.round(Mathf.random() * 9).toString();
	var num4 = Mathf.round(Mathf.random() * 9).toString();
	var num5 = Mathf.round(Mathf.random() * 9).toString();
	var num6 = Mathf.round(Mathf.random() * 9).toString();
	var num7 = Mathf.round(Mathf.random() * 9).toString();
	var num8 = Mathf.round(Mathf.random() * 9).toString();
	var number = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8;
	var uuid = Packages.arc.util.serialization.Base64Coder.encodeString(number);
	Core.settings.put("uuid", uuid);
})