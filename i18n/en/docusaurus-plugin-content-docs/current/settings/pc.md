---
sidebar_position: 1
title: PC settings window
description: The settings on each tab
---

# PC settings window

Press the MSKB icon in the Windows notification area (system tray), or right-click it and choose "Open MSKB".

![The PC settings window](../img/settings-window.png)

Switch tabs with the list on the left. The tabs have the same names and order as in the [VR gear](./vr.md); only "Troubleshooting" is in the PC settings window alone. The bar at the bottom shows the current status (see [Checking it was sent](../send.md#check-sent)).
Settings marked ○ in the "VR" column can also be changed with the VR gear. Both change the same settings.

## General

![General](../img/settings-general.png)

| Setting | What it does | VR |
|---|---|---|
| Language | The language of the settings window and the keyboard | ○ |
| Keyboard at startup | Keep the last state / Show it / Hide it | ○ |
| Start with SteamVR / Quit with SteamVR | Starts and quits MSKB along with SteamVR | |
| Check for updates at startup | Tells you when a new version is out (on by default; see [New version notice](#update-notice)) | |
| Closing goes to the system tray | The window's "×" goes to the tray instead of quitting (off by default) | |
| Start in the system tray | Doesn't show the settings window at startup | |

### New version notice {#update-notice}

When a new version is out at startup, a notice appears at the bottom of the settings window.

![The new version notice](../img/update-notice.png)

- **What's new**: see what changed in that version on the [blog](/blog).
- **Open BOOTH**: opens the download page. Install with the downloaded installer, the same way as [the first time](../start/install.md).
- **×**: closes the notice. It shows again the next time MSKB starts.

MSKB never downloads or updates by itself. If you don't want the notice, turn off "Check for updates at startup".

## VR controls

![VR controls](../img/settings-vr.png)

| Setting | What it does | VR |
|---|---|---|
| Show the button on the wrist / Shortcut | How to open the keyboard (see [Customizing](../customize.md#opening-the-keyboard)) | ○ |
| Open with VRChat's text fields | Opens the keyboard together with VRChat's text fields | ○ |
| Into VRChat's fields by | Pasting (clipboard) / Key input (see [Sending](../send.md#vrchat-text-fields)) | ○ |
| Lost the keyboard? | "Bring in front" brings the keyboard in front of you | |
| MSKB button assignments | Opens SteamVR's button assignment screen | |
| Input diagnostics | Checks whether MSKB can read your controller input (see the [FAQ](../faq.md#keys-dont-respond)) | |

## Input & sound

![Input & sound](../img/settings-input.png)

| Setting | What it does | VR |
|---|---|---|
| Japanese conversion | What converts Japanese (see [Japanese](../input/japanese.md#japanese-conversion)). Shown only when the PC has a Japanese input method | ○ |
| Flick: tapping a key again goes to its next kana | In [flick input](../input/flick.md), pressing the same key again goes to the next kana | ○ |
| Microphone / Input level | The microphone for voice input, and a test | Microphone only |
| Phrases | Saving messages you use often | |
| Reset what conversion learned | Puts the order of frequently picked candidates back to the start (from the next start) | |
| Key sound / Tap in the hand on a key | Sound and vibration on or off | ○ |
| Volume | The volume shared by all keys (up to 200%) | |
| Preset | A set of key sounds (see [Customizing](../customize.md#key-sound-presets)) | ○ |
| Sound for each key | In a custom preset, the sound for each key and imported sounds (see [Customizing](../customize.md#key-sounds)) | |

"Sound & haptics ↓" and "Sound library ↓" at the top jump further down the page.

## Design

| Setting | What it does | VR |
|---|---|---|
| Keyboard opacity | How see-through it is | ○ |
| Picture behind the keys | A picture behind the keys | |
| Colors | Background, keys, text, accent | ○ |
| Color share code | Share colors as a code | |

The images are on [Customizing](../customize.md#looks).

## OSC

![OSC](../img/settings-osc.png)

| Setting | What it does | VR |
|---|---|---|
| Show typing in VRChat | Shows a typing indicator in the chatbox while you type | ○ |
| Chatbox notification sound | Plays VRChat's notification sound when you send | ○ |
| OSC IP address / OSC port | Where MSKB sends to VRChat. You normally don't need to change these | |

## Troubleshooting

![Troubleshooting](../img/settings-help.png)

| Setting | What it does |
|---|---|
| Guide | Opens this guide in your browser |
| Requests and bug reports | Opens [GitHub Issues](https://github.com/misyaguziya/MSKB-Docs/issues) (a GitHub account is needed) |
| Settings folder | Opens the folder with your settings and logs. To reset your settings, follow the note on the screen |
| Error log | The log to attach when reporting a problem. "Copy" copies it |

:::caution
The log may show file locations that include your user name. Remove the user name before posting it anywhere public.
:::
