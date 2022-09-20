const Applet = imports.ui.applet;
const Util = imports.misc.util;
const Settings = imports.ui.settings;

const ICON_HARDEN = 'cadenas'

function MyApplet(orientation, panel_height, instance_id) {
    this._init(orientation, panel_height, instance_id);
}

MyApplet.prototype = {
    __proto__: Applet.TextIconApplet.prototype,

    _init: function(orientation, panel_height, instance_id) {
        Applet.TextIconApplet.prototype._init.call(this, orientation, panel_height, instance_id);

        this.set_applet_icon_name(ICON_HARDEN);
        this.set_applet_tooltip(_("Harden Mint"));
    },

    on_applet_clicked: function(event) {
        console.log("CLICKED");
    }
}

function main(metadata, orientation, panel_height, instance_id) {
    console.log("Harden-Mint Applet");
    return new MyApplet(orientation, panel_height, instance_id);
}
