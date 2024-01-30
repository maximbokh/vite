const clickPhysButton = (event) => {
    event.preventDefault();
    const key = keyContainer.querySelector(`[data-code="${event.code}"]`);
    if (key) {
      keyboard.clickButton(event.code, event.type);
    }
  };