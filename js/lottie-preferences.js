// Animation configuration

document.addEventListener('DOMContentLoaded', function () {


  // Innovation
  LottieInteractivity.create({
    player: '#innovation',
    mode: 'scroll',
    actions: [
      {
        visibility: [.2, .85],
        type: 'seek',
        frames: [0, 359],
      },
    ],
  });


  // Needs
  LottieInteractivity.create({
    player: '#needs',
    mode: 'scroll',
    actions: [
      {
        visibility: [0.25, 0.65],
        type: 'seek',
        frames: [0, 240],
      },
    ],
  });


  // Process
  LottieInteractivity.create({
    player: '#process-desktop',
    mode: 'scroll',
    actions: [
      {
        visibility: [0.2, 0.65],
        type: 'seek',
        frames: [0, 390],
      },
    ],
  });
  LottieInteractivity.create({
    player: '#process-mobile',
    mode: 'scroll',
    actions: [
      {
        visibility: [0.2, 0.65],
        type: 'seek',
        frames: [0, 390],
      },
    ],
  });


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
