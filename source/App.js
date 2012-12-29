enyo.kind({
	name: "App",
	components: [
		{name: "appMenu", kind: "onyx.appMenu", components: [
			{content: "About", ontap:"about"},
			{classes: "onyx-menu-divider"},
			{content: "License", ontap:"license"}
		]},
		{name: "AboutPop", kind: "About"},
		{name: "LicensePop", kind: "License"},
		{kind: "Panels",
		classes: "app enyo-fit onyx enyo-unselectable",
		arrangerKind:"CollapsingArranger",
		realtimeFit: true,
		handlers: {onSelect: "itemSelected"},
		fit: true,
		components: [
			{kind: "FittableRows",  classes: "leftpane", components: [
				{kind: "onyx.Toolbar", classes:"headers", components: [
					{content: "Chinese Birth Calendar"}
				]},
				{kind: "enyo.Scroller", strategyKind: "TouchScrollStrategy", thumb:true, fit:true, components:[
					{kind: "FittableRows",  classes: "motherpane", 
								components: [
						{content: "Mother", classes: "divider"},
						{classes: "onyx-toolbar-inline", components: [
							{kind: "onyx.PickerDecorator", onChange:"updateContent", components: [
								{name: "MD", style: "min-width: 60px;"},
								{name: "MotherDay", kind: "onyx.Picker"}
							]},
							{kind: "onyx.PickerDecorator", onChange:"updateContent", components: [
								{name: "MM", style: "min-width: 60px;"},
								{name: "MotherMonth", kind: "onyx.Picker"}
							]},
							{kind: "onyx.PickerDecorator", onChange:"updateContent", components: [
								{name: "MY", style: "min-width: 80px;"},
								{name: "MotherYear", kind: "onyx.Picker"}
							]}
						]},
						{classes: "onyx-toolbar-inline regel", components: [
							{kind: "enyo.Image", src:"assets/Dragon.png", name:"MotherIconChin"},{content: "Chines animal", name:"MotherLabelChin"}
						]},
						{classes: "onyx-toolbar-inline regel", components: [
							{kind: "enyo.Image", src:"assets/Yin.png", name:"MotherIconYY"},{content: "Yin Yang", name:"MotherLabelYY"}
						]},
						{classes: "onyx-toolbar-inline regel", components: [
							{kind: "enyo.Image", src:"assets/Metal.png", name:"MotherIconElem"},{content: "Element", name:"MotherLabelElem"}
						]},
						{classes: "onyx-toolbar-inline regel", components: [
							{kind: "enyo.Image", src:"assets/Aries.png", name:"MotherIconWest"},{content: "Western animal", name:"MotherLabelWest"}
						]}
								
					]},
					{kind: "FittableRows",  classes: "childpane",  
							components: [
								{content: "Child", classes: "divider"},
								{classes: "onyx-toolbar-inline", components: [
									{kind: "onyx.PickerDecorator", onChange:"updateContent", components: [
										{name: "CD", style: "min-width: 60px;"},
										{name: "ChildDay", kind: "onyx.Picker"}
									]},
									{kind: "onyx.PickerDecorator", onChange:"updateContent", components: [
										{name: "CM", style: "min-width: 60px;"},
										{name: "ChildMonth", kind: "onyx.Picker"}
									]},
									{kind: "onyx.PickerDecorator", onChange:"updateContent", components: [
										{name: "CY", style: "min-width: 80px;"},
										{name: "ChildYear", kind: "onyx.Picker"}
									]}
								]},
								{classes: "onyx-toolbar-inline", components: [
								{kind: "onyx.RadioGroup", name:"ChildType", components: [
									{content: "Last Period", name:"ChildTypePeriod", onActivate:"updateContent"},
									{content: "Conception", name:"ChildTypeConception", onActivate:"updateContent"},
									{content: "Birth", name:"ChildTypeBirth", onActivate:"updateContent", active: true}
								 ]}
								]},
								{ classes: "label", content: "Born on time", name: "EarlyLateLabel", style:"max-width:280px"},
								{kind: "onyx.Slider", style:"max-width:260px", value: 72, name: "EarlyLateSlider", onChange:"setEarlyLate", onChanging:"setEarlyLate"},
								
								{tag: "br"},
								{classes: "onyx-toolbar-inline regel", components: [
									{kind: "enyo.Image", src:"assets/Boy.png", name:"ChildIconBG"},{content: "Boy or girl", name:"ChildLabelBG"}
								]},
								{classes: "onyx-toolbar-inline regel", components: [
									{kind: "enyo.Image", src:"assets/Goat.png", name:"ChildIconChin"},{content: "Chines animal", name:"ChildLabelChin"}
								]},
								{classes: "onyx-toolbar-inline regel", components: [
									{kind: "enyo.Image", src:"assets/Yang.png", name:"ChildIconYY"},{content: "Yin Yang", name:"ChildLabelYY"}
								]},
								{classes: "onyx-toolbar-inline regel", components: [
									{kind: "enyo.Image", src:"assets/Fire.png", name:"ChildIconElem"},{content: "Element", name:"ChildLabelElem"}
								]},
								{classes: "onyx-toolbar-inline regel", components: [
									{kind: "enyo.Image", src:"assets/Libra.png", name:"ChildIconWest"},{content: "Western animal", name:"ChildLabelWest"}
								]},
					]}
				]}
			]},
			{kind: "FittableRows",  classes: "infopane",
					components: [
						{classes:"panelshadow"},
						{kind: "onyx.Toolbar", classes:"headers",  components: [
							{content: "Information"}
						]},
						{components:[
							{kind: "enyo.Image", src: "assets/eqlogowhite.png"},
							{name:"btnLic", kind:"onyx.Button", content:"License", ontap:"license"},
							{name:"btnAbo", kind:"onyx.Button", content:"About", ontap:"about"},
							{content: "More information will come here.<br>But this may take sometime.", name:"info", allowHtml:true}
						], fit:true},
						{kind: "onyx.Toolbar", classes:"headers",  components: [
							{kind: "onyx.Grabber"}
						]}
			
			]}
	]}],
	about: function(inSender, inEvent) {
		this.$.appMenu.hide();
		this.$.AboutPop.show();
	},
	license: function(inSender, inEvent) {
		this.$.appMenu.requestAppMenuHide();
		this.$.LicensePop.show();
	},    
	avoidFitChanged: function() {
		this.addRemoveClass("app-panels", this.narrowFit);
    },
    statics: {
        isScreenNarrow: function() {
            return enyo.dom.getWindowWidth() <= 500;
        }
    },
	create: function() {
		this.inherited(arguments);
		// month
		this.months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
		var d = new Date();
		for (var i=0,m; m=this.months[i]; i++) {
			this.$.MotherMonth.createComponent({content: m, active: i==d.getMonth()});
			this.$.ChildMonth.createComponent({content: m, active: i==d.getMonth()});
		}
		// day
		for (var i=0; i<31; i++) {
			this.$.MotherDay.createComponent({content: i+1, active: i==d.getDate()-1});
			this.$.ChildDay.createComponent({content: i+1, active: i==d.getDate()-1});
		}
		// year
		var y = d.getFullYear();

		for (var i=1900; i<y+5; i++) {
			this.$.MotherYear.createComponent({content: i+1, active: i==y-25});
			this.$.ChildYear.createComponent({content: i+1, active: i==y});
		};

		this.MBD= new Date();
		this.CBD= new Date();
		this.CCD= new Date();

		this.setupChinYears();
		this.setupBoyGirl();
	},
	itemSelected: function(inSender, inEvent) {
		updateContent();
	},
	setEarlyLate: function() {
		this.inherited(arguments);
		v = Math.floor(((this.$.EarlyLateSlider.getValue())-72)/2);
		if (v==0){	
			this.$.EarlyLateLabel.setContent("Born on time");
		} else if (v==-1)	{	
			this.$.EarlyLateLabel.setContent("Born "+(-1*v)+" day early");
		} else if (v==1)	{	
			this.$.EarlyLateLabel.setContent("Born "+v+" day late");
		} else if (v<0)	{	
			this.$.EarlyLateLabel.setContent("Born "+(-1*v)+" days early");
		} else if (v>0)	{	
			this.$.EarlyLateLabel.setContent("Born "+v+" days late");
		};
		this.updateContent();
	},
	setupChinYears: function(){
		this.inherited(arguments);
		this.ChinYears = { 
		 1900: 131 ,	 1912: 218 ,	 1924: 205 ,	 1936: 124 ,	 1948: 210 ,	 1960: 128 ,	 1972: 215 ,	 1984: 202 ,	 1996: 219 ,	 2008: 207 ,
		 1901: 219 ,	 1913: 206 ,	 1925: 125 ,	 1937: 211 ,	 1949: 129 ,	 1961: 215 ,	 1973: 202 ,	 1985: 220 ,	 1997: 207 ,	 2009: 126 ,
		 1902: 208 ,	 1914: 126 ,	 1926: 213 ,	 1938: 131 ,	 1950: 217 ,	 1962: 205 ,	 1974: 123 ,	 1986: 209 ,	 1998: 128 ,	 2010: 214 ,
		 1903: 129 ,	 1915: 214 ,	 1927: 202 ,	 1939: 219 ,	 1951: 206 ,	 1963: 125 ,	 1975: 211 ,	 1987: 129 ,	 1999: 216 ,	 2011: 203 ,
		 1904: 216 ,	 1916: 203 ,	 1928: 123 ,	 1940: 208 ,	 1952: 127 ,	 1964: 213 ,	 1976: 131 ,	 1988: 217 ,	 2000: 205 ,	 2012: 123 ,
		 1905: 204 ,	 1917: 123 ,	 1929: 210 ,	 1941: 127 ,	 1953: 214 ,	 1965: 202 ,	 1977: 218 ,	 1989: 206 ,	 2001: 124 ,	 2013: 210 ,
		 1906: 125 ,	 1918: 211 ,	 1930: 130 ,	 1942: 215 ,	 1954: 203 ,	 1966: 121 ,	 1978: 207 ,	 1990: 215 ,	 2002: 212 ,	 2014: 131 ,
		 1907: 213 ,	 1919: 201 ,	 1931: 217 ,	 1943: 205 ,	 1955: 124 ,	 1967: 209 ,	 1979: 128 ,	 1991: 215 ,	 2003: 201 ,	 2015: 219 ,
		 1908: 202 ,	 1920: 220 ,	 1932: 206 ,	 1944: 125 ,	 1956: 212 ,	 1968: 130 ,	 1980: 216 ,	 1992: 204 ,	 2004: 122 ,	 2016: 208 ,
		 1909: 122 ,	 1921: 208 ,	 1933: 126 ,	 1945: 213 ,	 1957: 131 ,	 1969: 217 ,	 1981: 205 ,	 1993: 123 ,	 2005: 209 ,	 2017: 128 ,
		 1910: 210 ,	 1922: 128 ,	 1934: 214 ,	 1946: 202 ,	 1958: 218 ,	 1970: 206 ,	 1982: 125 ,	 1994: 210 ,	 2006: 129 ,	 2018: 216 ,
		 1911: 130 ,	 1923: 216 ,	 1935: 204 ,	 1947: 122 ,	 1959: 209 ,	 1971: 127 ,	 1983: 213 ,	 1995: 131 ,	 2007: 218 ,	 2019: 205  }
	},
	setupBoyGirl: function(){
		//the boy girl table. AGE-MONTH: G=girl B=Boy
		this.inherited(arguments);
		this.BoyGirlList = { 
		1801: 'G',	1802: 'B',	1803: 'G',	1804: 'B',	1805: 'B',	1806: 'B',	1807: 'B',	1808: 'B',	1809: 'B',	1810: 'B',	1811: 'B',	1812: 'B',
		1901: 'B',	1902: 'G',	1903: 'B',	1904: 'G',	1905: 'G',	1906: 'B',	1907: 'B',	1908: 'B',	1909: 'B',	1910: 'B',	1911: 'G',	1912: 'G',
		2001: 'G',	2002: 'B',	2003: 'G',	2004: 'B',	2005: 'B',	2006: 'B',	2007: 'B',	2008: 'B',	2009: 'B',	2010: 'G',	2011: 'B',	2012: 'B',
		2101: 'B',	2102: 'G',	2103: 'G',	2104: 'G',	2105: 'G',	2106: 'G',	2107: 'G',	2108: 'G',	2109: 'G',	2110: 'G',	2111: 'G',	2112: 'G',
		2201: 'G',	2202: 'B',	2203: 'B',	2204: 'G',	2205: 'B',	2206: 'G',	2207: 'G',	2208: 'B',	2209: 'G',	2210: 'G',	2211: 'G',	2212: 'G',
		2301: 'B',	2302: 'B',	2303: 'G',	2304: 'B',	2305: 'B',	2306: 'G',	2307: 'B',	2308: 'G',	2309: 'B',	2310: 'B',	2311: 'B',	2312: 'G',
		2401: 'G',	2402: 'G',	2403: 'B',	2404: 'B',	2405: 'G',	2406: 'B',	2407: 'B',	2408: 'G',	2409: 'G',	2410: 'G',	2411: 'G',	2412: 'G',
		2501: 'G',	2502: 'B',	2503: 'B',	2504: 'G',	2505: 'G',	2506: 'B',	2507: 'G',	2508: 'B',	2509: 'B',	2510: 'B',	2511: 'B',	2512: 'B',
		2601: 'B',	2602: 'G',	2603: 'B',	2604: 'G',	2605: 'G',	2606: 'B',	2607: 'G',	2608: 'B',	2609: 'G',	2610: 'G',	2611: 'G',	2612: 'G',
		2701: 'G',	2702: 'B',	2703: 'G',	2704: 'B',	2705: 'G',	2706: 'G',	2707: 'B',	2708: 'B',	2709: 'B',	2710: 'B',	2711: 'G',	2712: 'B',
		2801: 'B',	2802: 'G',	2803: 'B',	2804: 'G',	2805: 'G',	2806: 'G',	2807: 'B',	2808: 'B',	2809: 'B',	2810: 'B',	2811: 'G',	2812: 'G',
		2901: 'G',	2902: 'B',	2903: 'G',	2904: 'G',	2905: 'B',	2906: 'B',	2907: 'B',	2908: 'B',	2909: 'B',	2910: 'G',	2911: 'G',	2912: 'G',
		3001: 'B',	3002: 'G',	3003: 'G',	3004: 'G',	3005: 'G',	3006: 'G',	3007: 'G',	3008: 'G',	3009: 'G',	3010: 'G',	3011: 'B',	3012: 'B',
		3101: 'B',	3102: 'G',	3103: 'B',	3104: 'G',	3105: 'G',	3106: 'G',	3107: 'G',	3108: 'G',	3109: 'G',	3110: 'G',	3111: 'G',	3112: 'B',
		3201: 'B',	3202: 'G',	3203: 'B',	3204: 'G',	3205: 'G',	3206: 'G',	3207: 'G',	3208: 'G',	3209: 'G',	3210: 'G',	3211: 'G',	3212: 'B',
		3301: 'G',	3302: 'B',	3303: 'B',	3304: 'B',	3305: 'G',	3306: 'G',	3307: 'G',	3308: 'B',	3309: 'G',	3310: 'G',	3311: 'G',	3312: 'B',
		3401: 'B',	3402: 'G',	3403: 'B',	3404: 'G',	3405: 'G',	3406: 'G',	3407: 'G',	3408: 'G',	3409: 'G',	3410: 'G',	3411: 'B',	3412: 'B',
		3501: 'B',	3502: 'B',	3503: 'G',	3504: 'B',	3505: 'G',	3506: 'G',	3507: 'G',	3508: 'B',	3509: 'G',	3510: 'G',	3511: 'B',	3512: 'B',
		3601: 'G',	3602: 'B',	3603: 'B',	3604: 'G',	3605: 'B',	3606: 'G',	3607: 'G',	3608: 'G',	3609: 'B',	3610: 'B',	3611: 'B',	3612: 'B',
		3701: 'B',	3702: 'G',	3703: 'B',	3704: 'B',	3705: 'G',	3706: 'B',	3707: 'G',	3708: 'B',	3709: 'G',	3710: 'B',	3711: 'G',	3712: 'B',
		3801: 'G',	3802: 'B',	3803: 'G',	3804: 'B',	3805: 'B',	3806: 'G',	3807: 'B',	3808: 'G',	3809: 'B',	3810: 'G',	3811: 'B',	3812: 'G',
		3901: 'B',	3902: 'G',	3903: 'B',	3904: 'B',	3905: 'B',	3906: 'G',	3907: 'G',	3908: 'B',	3909: 'G',	3910: 'B',	3911: 'G',	3912: 'G',
		4001: 'G',	4002: 'B',	4003: 'G',	4004: 'B',	4005: 'G',	4006: 'B',	4007: 'B',	4008: 'G',	4009: 'B',	4010: 'G',	4011: 'B',	4012: 'G',
		4101: 'B',	4102: 'G',	4103: 'B',	4104: 'G',	4105: 'B',	4106: 'G',	4107: 'B',	4108: 'B',	4109: 'G',	4110: 'B',	4111: 'G',	4112: 'B',
		4201: 'G',	4202: 'B',	4203: 'G',	4204: 'B',	4205: 'G',	4206: 'B',	4207: 'G',	4208: 'B',	4209: 'B',	4210: 'G',	4211: 'B',	4212: 'G',
		4301: 'B',	4302: 'G',	4303: 'B',	4304: 'G',	4305: 'B',	4306: 'G',	4307: 'B',	4308: 'G',	4309: 'B',	4310: 'B',	4311: 'B',	4312: 'B',
		4401: 'B',	4402: 'B',	4403: 'G',	4404: 'B',	4405: 'B',	4406: 'B',	4407: 'G',	4408: 'B',	4409: 'G',	4410: 'B',	4411: 'G',	4412: 'G',
		4501: 'G',	4502: 'B',	4503: 'B',	4504: 'G',	4505: 'G',	4506: 'G',	4507: 'B',	4508: 'G',	4509: 'B',	4510: 'G',	4511: 'B',	4512: 'B'}
	},
	updateContent: function() {
		this.inherited(arguments);
		//get the value of the eraly late slider.
		v = Math.floor(((this.$.EarlyLateSlider.getValue())-72)/2);
		if (v==0){	
			earlylate = ("Born on time");
		} else if (v==-1)	{	
			earlylate = ("Born "+(-1*v)+" day early");
		} else if (v==1)	{	
			earlylate = ("Born "+v+" day late");
		} else if (v<0)	{	
			earlylate = ("Born "+(-1*v)+" days early");
		} else if (v>0)	{	
			earlylate = ("Born "+v+" days late");
		};

		//Mothers Birth Date
		iMM=1; //Integer Mother Month
		tMM = this.$.MM.content; //Text Mother Month
		for (var i=0,m; m=this.months[i]; i++) {
			if(tMM==m){iMM=i};
		}
		this.MBD.setFullYear(this.$.MY.content, iMM, this.$.MD.content);

		//Get the type of date for the child:
		//calculate the conception date of the child
		iCM=1; //Integer Child Month
		tCM = this.$.CM.content; //Text ChildMonth
		for (var i=0,m; m=this.months[i]; i++) {
			if(tCM==m){iCM=i};
		}

		if(this.$.ChildTypeBirth.getActive()) {
			ChildType="Birth";
			this.CBD.setFullYear(this.$.CY.content, iCM, this.$.CD.content);
			this.CCD.setFullYear(this.$.CY.content, iCM, this.$.CD.content-7*38-v);
		}else if (this.$.ChildTypeConception.getActive()) {
			ChildType="Conception";
			this.CBD.setFullYear(this.$.CY.content, iCM, this.$.CD.content+7*38);
			this.CCD.setFullYear(this.$.CY.content, iCM, this.$.CD.content);
		} else {
			ChildType="Last period";
			this.CBD.setFullYear(this.$.CY.content, iCM, this.$.CD.content+7*40);
			this.CCD.setFullYear(this.$.CY.content, iCM, this.$.CD.content-7*2);
		}

		//calculate the age of the mother at the conception date
		this.MCA=Math.floor((this.CCD.getTime()-this.MBD.getTime()+(1000*60*60*24))/(1000*60*60*24*365.26));

		this.MotherChinYear = this.ChineseYear(this.MBD);
		this.MotherChinAnimal = this.ChineseAnimal(this.MotherChinYear);
		this.MotherChinElement = this.ChineseElement(this.MotherChinYear);
		this.MotherChinYY = this.ChineseYY(this.MotherChinYear);
		this.MotherWestAnimal = this.WesternAnimal(this.MBD);
		
		this.ChildGender = this.BoyGirl(this.MCA,this.CCD.getMonth());
		this.ChildChinYear = this.ChineseYear(this.CBD);
		this.ChildChinAnimal = this.ChineseAnimal(this.ChildChinYear);
		this.ChildChinElement = this.ChineseElement(this.ChildChinYear);
		this.ChildChinYY = this.ChineseYY(this.ChildChinYear);
		this.ChildWestAnimal = this.WesternAnimal(this.CBD);

		//set labels 
		this.$.MotherLabelChin.setContent(this.MotherChinAnimal);
		this.$.MotherIconChin.setSrc("assets/"+this.MotherChinAnimal+".png");

		this.$.MotherLabelElem.setContent(this.MotherChinElement);
		this.$.MotherIconElem.setSrc("assets/"+this.MotherChinElement+".png");

		this.$.MotherLabelYY.setContent(this.MotherChinYY);
		this.$.MotherIconYY.setSrc("assets/"+this.MotherChinYY+".png");

		this.$.MotherLabelWest.setContent(this.MotherWestAnimal);
		this.$.MotherIconWest.setSrc("assets/"+this.MotherWestAnimal+".png");

		this.$.ChildLabelBG.setContent(this.ChildGender);
		this.$.ChildIconBG.setSrc("assets/"+this.ChildGender+".png");

		this.$.ChildLabelChin.setContent(this.ChildChinAnimal);
		this.$.ChildIconChin.setSrc("assets/"+this.ChildChinAnimal+".png");

		this.$.ChildLabelElem.setContent(this.ChildChinElement);
		this.$.ChildIconElem.setSrc("assets/"+this.ChildChinElement+".png");

		this.$.ChildLabelYY.setContent(this.ChildChinYY);
		this.$.ChildIconYY.setSrc("assets/"+this.ChildChinYY+".png");

		this.$.ChildLabelWest.setContent(this.ChildWestAnimal);
		this.$.ChildIconWest.setSrc("assets/"+this.ChildWestAnimal+".png");
	},
    BoyGirl: function(age, month){
		// This function will get the apropriate Chinese year.
		inTest = age*100+month+1;
		if (this.BoyGirlList[inTest] == 'B') {Gender = 'Boy';	}
		else if(this.BoyGirlList[inTest] == 'G'){ Gender = 'Girl'}
		else { Gender='Unknown';}
		return Gender;
	},

	ContYear: function(ChinYear){
	// This function will add 2697 year to the appropriate Chinese year to display.
		return ChinYear+2697;
	},

	ChineseYear: function(date){
	// This function will get the apropriate Chinese year.
	// making use of the different starting dates of each chinese year.
		var inYear = date.getFullYear();
		var inMonth = date.getMonth()+1;
		var inTest = (date.getMonth()+1)*100+date.getDate();
		//Standaard nieuwjaar op 1 feb.
		if (inMonth==1)
		{ ChinYear = inYear-1;}
		else
		{ ChinYear = inYear;}
		
		//hier de specifieke data invullen.
		if (this.ChinYears[inYear] && this.ChinYears[inYear]<= inTest)
		{ ChinYear = inYear;}
		else if (this.ChinYears[inYear] && this.ChinYears[inYear]> inTest)
		{ ChinYear = inYear-1;}

		return ChinYear;
	},

	ChineseAnimal: function(ChinYear){
	// This function will get the apropriate Chinese Animal.
		if(!((ChinYear+4)%12))
		{ChinAnimal = 'Dragon';}
		else if (!((ChinYear+3)%12))
		{ChinAnimal = 'Snake';}	
		else if (!((ChinYear+2)%12))
		{ChinAnimal = 'Horse';}	
		else if (!((ChinYear+1)%12))
		{ChinAnimal = 'Goat';}	
		else if (!((ChinYear)%12))
		{ChinAnimal = 'Monkey';}	
		else if (!((ChinYear+11)%12))
		{ChinAnimal = 'Rooster';}	
		else if (!((ChinYear+10)%12))
		{ChinAnimal = 'Dog';}	
		else if (!((ChinYear+9)%12))
		{ChinAnimal = 'Pig';}	
		else if (!((ChinYear+8)%12))
		{ChinAnimal = 'Rat';}	
		else if (!((ChinYear+7)%12))
		{ChinAnimal = 'Ox';}	
		else if (!((ChinYear+6)%12))
		{ChinAnimal = 'Tiger';}	
		else 
		{ChinAnimal = 'Rabbit';}	

		return ChinAnimal;
	},

	ChineseElement: function(ChinYear){
	// This function will get the appropriate Chinese Element.
		if(!((ChinYear+4)%10))
		{ChinElement = 'Fire';}
		else if (!((ChinYear+3)%10))
		{ChinElement = 'Fire';}	
		else if (!((ChinYear+2)%10))
		{ChinElement = 'Earth';}	
		else if (!((ChinYear+1)%10))
		{ChinElement = 'Earth';}	
		else if (!((ChinYear)%10))
		{ChinElement = 'Metal';}	
		else if (!((ChinYear+9)%10))
		{ChinElement = 'Metal';}	
		else if (!((ChinYear+8)%10))
		{ChinElement = 'Water';}	
		else if (!((ChinYear+7)%10))
		{ChinElement = 'Water';}	
		else if (!((ChinYear+6)%10))
		{ChinElement = 'Wood';}	
		else 
		{ChinElement = 'Wood';}	
		return ChinElement;
	},

	ChineseYY: function(ChinYear){
	// This function will get the apropriate Chinese YinYang.
		if(!(ChinYear%2))
		{ChinYY = 'Yin';}
		else
		{ChinYY = 'Yang';}
		return ChinYY;
	},

	WesternAnimal: function(date){
	// This function will get the apropriate Western Horoscope.
		var inTest = (date.getMonth()+1)*100+date.getDate();
		var WestAnimal = "Capricorn";
		if(inTest<=119)
		{WestAnimal = "Capricorn";} 
		else if(inTest<=219)
		{WestAnimal = "Aquarius";} 
		else if(inTest<=320)
		{WestAnimal = "Pisces";} 
		else if(inTest<=419)
		{WestAnimal = "Aries";} 
		else if(inTest<=520)
		{WestAnimal = "Taurus";} 
		else if(inTest<=621)
		{WestAnimal = "Gemini";} 
		else if(inTest<=722)
		{WestAnimal = "Cancer";} 
		else if(inTest<=822)
		{WestAnimal = "Leo";} 
		else if(inTest<=922)
		{WestAnimal = "Virgo";} 
		else if(inTest<=1022)
		{WestAnimal = "Libra";} 
		else if(inTest<=1121)
		{WestAnimal = "Scorpio";} 
		else if(inTest<=1221)
		{WestAnimal = "Sagittarius";} 
		return WestAnimal;
	}
});

