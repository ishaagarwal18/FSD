import pyautogui
import time

file_path = r"E:\CSS\statment"
with open(file_path, "r", encoding="utf-8") as f:
    text_lines = f.readlines()

for line in text_lines:
    pyautogui.typewrite(line)
    time.sleep(3)

time.sleep(3)
pyautogui.hotkey('ctrl', 's')
time.sleep(1)
pyautogui.hotkey('alt', 'f4')