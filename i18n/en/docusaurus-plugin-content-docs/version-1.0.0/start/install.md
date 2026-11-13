---
sidebar_position: 1
title: Installing and starting
description: From download to first-time setup
---

# Installing and starting

## 1. Download

Download the zip file from the [MSKB page on BOOTH](https://misyaguziya.booth.pm/items/9093442).
Before using MSKB, read `LICENSE.txt` (the terms of use) in the zip.

## 2. Install

1. Extract the zip and open the installer inside.
2. Follow the installer's steps.

:::tip If you see "Windows protected your PC"
Press "More info", then "Run anyway".
:::

:::caution
On a Windows 11 PC with Smart App Control turned on, MSKB may not start.
:::

## 3. Start

1. Start SteamVR and VRChat.
2. Start MSKB.

The settings window opens on your PC, and a button appears on your left wrist in VR.

:::tip
Turn on "General" → "Start with SteamVR" in the settings, and MSKB will start whenever you start SteamVR.
:::

## 4. Wait for the first-time setup {#first-time-setup}

The first time you type Japanese or Chinese, MSKB downloads and prepares the conversion dictionaries (you need an internet connection).
While it prepares, the wrist button shows "Dictionary nn%" and a progress bar appears in the candidate row of the keyboard. You cannot press the keys until it finishes.

- After the download, preparing takes about 15 seconds. From then on, it is ready right away.
- During setup, you can still type by switching to English or 한국어 with the 🌐 key.
- If it fails, press "Try again" in the candidate row.

## 5. Turn on OSC in VRChat {#turn-on-osc}

MSKB uses VRChat's OSC to send to the chatbox.

1. Open VRChat's Action Menu.
2. Open "OSC" and turn on "Enabled".

You only need to do this once.

:::caution
If VRChat runs as administrator, MSKB cannot enter text into VRChat's text fields. Start VRChat normally.
:::

## Quitting

Right-click the MSKB icon in the Windows notification area (system tray) and choose "Quit".
If you can't find the icon, press "^" at the right end of the taskbar.

By default, the "×" of the settings window quits MSKB. To keep it running after closing the window, turn on "General" → "Closing goes to the system tray".
