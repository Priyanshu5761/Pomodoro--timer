# Pomodoro Timer

An **aesthetic and functional Pomodoro Timer** built with HTML, CSS, and JavaScript.  
Designed to help you focus, take breaks, and increase productivity with a clean, minimal UI.

---

## Features

- **Pomodoro timer** with a default work session of 25 minutes.
- **Short Break** (5 minutes) and **Long Break** (15 minutes) modes.
- Start, Stop, and Reset controls for easy timer management.
- Subtle ticking sound while the timer runs, and an alarm sound when the session ends.
- Responsive and visually appealing with a blurred background and transparent container.
- User-friendly buttons with hover and active effects.
- Timer display formatted as `MM:SS` with monospace font for clarity.
- Accessible and minimalistic design.

---

## How It Works

1. **Pomodoro Mode (Work Session)**: The timer starts at 25:00 minutes.  
2. **Short Break Mode**: Switches timer to 5:00 minutes for a quick rest.  
3. **Long Break Mode**: Switches timer to 15:00 minutes for a longer rest.  
4. Press **Start** to begin countdown.  
5. Press **Stop** to pause the timer.  
6. Press **Reset** to reset the timer to the current mode’s full duration.  
7. When the timer hits zero, an alarm sound plays and a notification alerts the user.

---

## Files

- `index.html` — Contains the HTML structure of the timer and buttons.  
- `style.css` — Styles the timer container, buttons, background, and text for a sleek look.  
- `script.js` — Contains all the timer logic, sound effects, and mode switching functionality.

---

## How to Use

- Open `index.html` in any modern web browser.
- Click **Start** to begin the Pomodoro session.
- Use **Short Break** or **Long Break** buttons to switch modes.
- Use **Stop** and **Reset** to control the timer as needed.

---

## Sounds

- **Ticking Sound:** Plays continuously while the timer is running.
- **Alarm Sound:** Plays once when the timer reaches zero.

---

## Customization

- Change work, short break, and long break durations in `script.js`:

```js
let workDuration = 25 * 60;     // 25 minutes
let shortBreak = 5 * 60;        // 5 minutes
let longBreak = 15 * 60;        // 15 minutes
