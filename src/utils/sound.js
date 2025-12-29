export const clickSound = new Audio("/sounds/click.mp3");
export const winSound = new Audio("/sounds/win.mp3");
export const drawSound = new Audio("/sounds/draw.mp3");

export function playClick() {
  clickSound.currentTime = 0;
  clickSound.play();
}

export function playWin() {
  winSound.currentTime = 0;
  winSound.play();
}

export function playDraw() {
  drawSound.currentTime = 0;
  drawSound.play();
}
