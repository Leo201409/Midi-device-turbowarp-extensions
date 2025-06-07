# 🎵 TurboWarp MIDI Connector Extension

This is a custom extension for [TurboWarp](https://turbowarp.org) that connects Scratch projects to MIDI devices using the Web MIDI API. With this extension, your project can react to real-time MIDI input such as key presses or controller movements.

---

## 🚀 Features

- ✅ Connects to all available MIDI input devices
- ✅ Triggers hat blocks when a MIDI note is received
- ✅ Reports note number, velocity, and channel
- ✅ Works with real and virtual MIDI devices

---

## 📦 How to Use

1. **Host the Extension:**

   Upload the `midi-extension.js` file to a web server or GitHub Pages.  
   Example URL: `https://yourusername.github.io/midi-extension.js`

2. **Add to TurboWarp:**

   - Go to [https://turbowarp.org/editor](https://turbowarp.org/editor)
   - Click the **gear icon (⚙️)** in the bottom-right
   - Click **"Add Extension from URL"**
   - Paste the URL to your hosted `midi-extension.js` file

3. **Allow MIDI Access:**

   When prompted by your browser, **allow MIDI device access**.

---

## 🔧 Blocks Provided

### 🟨 Hat Block
- `when MIDI note received`  
  Fires whenever a MIDI "note on" message is received.

### 🟦 Reporter Blocks
- `last MIDI note`  
  Returns the most recently received note number.
  
- `last velocity`  
  Returns the velocity (how hard the key was pressed).
  
- `last channel`  
  Returns the MIDI channel number.

---

## 🧪 Testing Tools

If you don’t have a MIDI device, try:

- [Virtual MIDI Piano Keyboard (VMPK)](https://vmpk.sourceforge.io/)
- [MIDI Editor](https://midieditor.org/)
- [Web MIDI API Tester](https://cwilso.github.io/WebMIDIAPIShim/)

---

## ⚠️ Requirements

- A browser that supports the Web MIDI API (e.g. Chrome, Edge)
- TurboWarp Editor (online)
- Access to a MIDI device or simulator

---

## 🛠️ Troubleshooting

- If nothing happens: make sure your browser allowed MIDI access.
- If the extension doesn't load: check the console (`F12`) for network or permission errors.
- If using GitHub Pages: make sure the file is public and served over HTTPS.

---

## 📄 License

MIT License – Free to use, share, modify, and remix!

---

## ✨ Created By

Made for the Scratch & TurboWarp community by **Leo201409** 💻🎹  
Need help? Drop an issue or reach out!
