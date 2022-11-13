// Animation configuration

document.addEventListener('DOMContentLoaded', function () {

  // Arrow-Down
  LottieInteractivity.create({
    player: '#arrow-down',
    mode: 'scroll',
    actions: [
      {
        visibility: [.2, .6],
        type: 'seek',
        frames: [0, 270],
      },
    ],
  });


// Close the addEventListener function
});
