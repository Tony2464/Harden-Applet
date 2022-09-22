const Applet = imports.ui.applet;
const PopupMenu = imports.ui.popupMenu;
const Util = imports.misc.util;
const St = imports.gi.St;
const Lang = imports.lang;
const Settings = imports.ui.settings;


const ICON_HARDEN = 'cadenas'

function MyApplet(orientation, panel_height, instance_id) {
    this._init(orientation, panel_height, instance_id);
}

MyApplet.prototype = {
    __proto__: Applet.IconApplet.prototype,

    _init: function (orientation, panel_height, instance_id) {
        Applet.IconApplet.prototype._init.call(this, orientation, panel_height, instance_id);

        // Set applet's icon
        this.set_applet_icon_name(ICON_HARDEN);
        this.set_applet_tooltip(_("Click to harden your Mint"));

        // Pop up menu
        this.menuManager = new PopupMenu.PopupMenuManager(this);
        this.menu = new Applet.AppletPopupMenu(this, orientation);
        this.menuManager.addMenu(this.menu);

        this._contentSection = new PopupMenu.PopupMenuSection();
        this.menu.addMenuItem(this._contentSection);

        // First item: Turn on
        let item = new PopupMenu.PopupIconMenuItem("Harden Manager", "cadenas", St.IconType.FULLCOLOR);

        item.connect('activate', Lang.bind(this, function () {
            Util.spawnCommandLine("/usr/bin/gnome-terminal");
        }));
        this.menu.addMenuItem(item);


        item = new PopupMenu.PopupIconMenuItem("Options", "cm_options", St.IconType.FULLCOLOR);

        item.connect('activate', Lang.bind(this, function () {
            Util.spawnCommandLine("command item 2");
        }));
        this.menu.addMenuItem(item);

        // // Second item: Turn off
        // item = new PopupMenu.PopupIconMenuItem("Remove", "gtk-quit", St.IconType.FULLCOLOR);

        // item.connect('activate', Lang.bind(this, function () {
        //     Util.spawnCommandLine("/usr/bin/cinnamon-settings applets -t 0 ");
        // }));
        // this.menu.addMenuItem(item);
    },

    on_applet_clicked: function (event) {
        console.log("CLICKED");
        // Util.spawn("/bin/bash gnome-terminal");
        // let [result, stdout, stderr] = GLib.spawn_command_line_sync("echo 'Harden Mint'");
        // this.set_applet_label(stdout.toString() + result.toString() + stderr.toString());
        // console.log(stdout.toString() + result.toString() + stderr.toString());

        this.menu.toggle();
    }


}

function main(metadata, orientation, panel_height, instance_id) {
    // Logs located in ~/.xsessions-errors
    console.log("Harden-Mint Applet loaded");
    return new MyApplet(orientation, panel_height, instance_id);
}
