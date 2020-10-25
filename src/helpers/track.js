export const track = (message) => {
  if (!window.plausible) {
    return
  }

  window.plausible(message)
}
