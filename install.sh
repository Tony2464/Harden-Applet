#!/usr/bin/env bash

rsync -a --delete harden-applet@tony2464 $HOME/.local/share/cinnamon/applets
pkill -HUP -f "cinnamon --replace"