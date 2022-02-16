({
	handleClick : function(component, event, helper) {
		var total = component.get("v.totalAmount");
        var tip = component.get("v.tip");
        var person = component.get("v.people");
        var tips = ((total*tip)/100);
        var totalWithTip = parseFloat(total)+parseFloat(tips);
        var amountPerPerson = parseFloat(totalWithTip)/parseFloat(person);
        var split = 'Tip : '+tips + ' $ -- Split Amount : '+ amountPerPerson+' $ ';
        component.set("v.split",split);
    }
})
