#!/usr/bin/env bash

applet="harden-applet@Tony2464"
rsync -a --delete $applet $HOME/.local/share/cinnamon/applets
pkill -HUP -f "cinnamon --replace"