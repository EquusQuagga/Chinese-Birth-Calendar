/**
	_onyx.appMenu_ is a subkind of <a href="#onyx.Popup">onyx.Popup</a> that
	displays a list of <a href="#onyx.MenuItems">onyx.MenuItems</a> and looks
	like a popup menu. It is meant to be used for a webOS application menu.

			{kind: "onyx.appMenu", components: [
				{content: "1"},
				{content: "2"},
				{classes: "onyx-menu-divider"},
				{content: "3"},
			]}
*/
enyo.kind({
	name: "onyx.appMenu",
	kind: "onyx.Popup",
	modal: false, // when modal the onapplicationrelaunch and onwindowdeactivated do not work.
	floating: true,
	scrim: true,
	defaultKind: "onyx.MenuItem",
	classes: "onyx-menu onyx-appmenu",
	components: [
		{kind: "Signals", onapplicationrelaunch: "applicationrelaunch"},
        {kind: "Signals", onwindowdeactivated: "requestAppMenuHide"},
	],
	getScrim: function() {
		//make the scrim transparent.
		return onyx.scrimTransparent.make();
	},
	requestAppMenuShow: function() {
		this.setShowing(true);
		return true;
	},
	requestAppMenuHide: function(){
		this.setShowing(false);
		return true;
	},
	toggle: function(){
		if(this.showing){
			this.requestAppMenuHide()
			return false; // appMenu is hidden.
		} else {
			this.requestAppMenuShow()
			return true; // appMenu is shown.
		}
	},
	applicationrelaunch: function(inSender, inEvent) {
		if (inEvent.windowParams["palm-command"] == "open-app-menu"){
			this.toggle();
		}
	}

});


