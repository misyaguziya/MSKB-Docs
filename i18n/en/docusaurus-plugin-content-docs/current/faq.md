---
sidebar_position: 7
title: FAQ
description: What to check when something doesn't work, and how to report a bug.
---

# FAQ

## The keyboard doesn't appear

- Check that SteamVR and MSKB are running. If the bottom of the PC settings window shows "SteamVR Linked", they are connected.
- Press the wrist button, or hold it to bring the keyboard in front of you.
- If you can't see the wrist button either, press "VR controls" → "Bring in front" in the PC settings window.

## I can't see the wrist button

- If "Show the button only when you look at your wrist" is on, turn your wrist toward you.
- Check "Hand for the wrist button" under "VR controls" in the VR gear. If the button is out of place, press "Put the button back on the wrist".
- If "Show the button on the wrist" is off, open the keyboard with the shortcut you chose.

## Keys don't respond when I point at them {#keys-dont-respond}

- **First-time setup**: while the wrist button shows "Dictionary nn%", Japanese and Chinese keys can't be pressed. Wait until it finishes (see [first-time setup](./start/install.md#first-time-setup)).
- **The pointer is off**: change the [pointer angle](./customize.md#pointer-angle).
- **The trigger doesn't work**: press "VR controls" → "Input diagnostics" in the PC settings window and follow what it shows. If you changed the button assignments, open SteamVR's screen from "MSKB button assignments" and apply MSKB's default bindings to restore them.
- The keyboard can't be used while the SteamVR menu (dashboard) is open.

## Japanese isn't converted, or letters stay as they are

- Check that "半/全" at the top left hasn't switched to letters and numbers. Press it again to go back to kana.
- Check that "日本語" is chosen with the 🌐 key.

## Not sent to the chatbox {#not-sent-to-the-chatbox}

- Check that "OSC" is enabled in VRChat's Action Menu (see [Installing and starting](./start/install.md#turn-on-osc)).
- Check that the send target at the right of the text field shows the speech bubble.
- While a VRChat text field is open, text goes into that field instead of the chatbox. Close it and send again.
- If the wrist button shows "OSC Error", or the settings window shows "VRChat Error", check the address under "OSC" in the settings. Normally, `127.0.0.1` and `9000` work as they are.

## Text doesn't go into VRChat's text field

- If VRChat runs as administrator, MSKB can't enter text. Start VRChat normally.
- If you see "VRChat was not found, so the text was only copied", check that VRChat is running, then press ↵ again.

## I can't clear the text

Press the "×" at the right of the text field twice in a row. The first press only changes its color.

## No key sound in my headset {#no-key-sound-in-headset}

Key sounds play from the Windows default playback device.
Check the "Audio" settings in SteamVR that switch the playback device to your headset.

## Voice input doesn't produce text

- Choose your microphone under "Input & sound" in the settings, press "Test", and check that the input level moves. Press "Stop" when done.
- If you see "Could not open the microphone", check that microphone access is allowed in Windows settings.

## MSKB quit when I closed the settings window

By default, the "×" of the settings window quits MSKB. Turn on "General" → "Closing goes to the system tray" to keep it running in the tray.

## Can I use it on Quest alone?

No. You need a Windows PC and SteamVR.

## Still stuck?

Open [GitHub Issues](https://github.com/misyaguziya/MSKB-Docs/issues/new/choose), choose "不具合の報告 / Bug report", and tell us:

- Your MSKB version (bottom left of the PC settings window)
- Your VR headset
- What you did, and what went wrong
- The error log (settings window → "Troubleshooting" → "Error log" → "Copy")

You can write in English. If you don't have a GitHub account, you can also send a message on [BOOTH](https://misyaguziya.booth.pm/items/9093442).

:::caution
Issues are public. Remove your user name from the error log before posting it.
:::
