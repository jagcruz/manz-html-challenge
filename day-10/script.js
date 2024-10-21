const channels = [
  [
    "Manz Dev",
    "https://www.youtube.com/embed/videoseries?list=PLx5xbrpW6nXi94T6_zJWUt8R-nGKQJm2I&start=6&controls=0&enablejsapi",
  ],
  [
    "Odracir Dev",
    "https://www.youtube.com/embed/videoseries?list=PLiZbQ2ISmGRdRrCCizDaC2dTUIzWev0f8&controls=0&enablejsapi",
  ],
  [
    "UX Ana Rangel",
    "https://www.youtube.com/embed/x9u94MhubsU?controls=0&enablejsapi",
  ],
  [
    "Afor Digital",
    "https://www.youtube.com/embed/jQh0QaAS4N0?controls=0&enablejsapi",
  ],
  [
    "Midu Dev",
    "https://www.youtube.com/embed/videoseries?list=PLUofhDIg_38oxKT-EDmtEpVhNSQkXn3tb&controls=0&enablejsapi",
  ],
];

const tvEl = document.querySelector(".tv");
const iframeEl = document.querySelector(".tv iframe");

function onClickButton(event) {
  const currentChannel = iframeEl.dataset.channel;
  const newChannel = event.target.dataset.channel;

  if (currentChannel !== newChannel) {
    const [channelName, channelUrl] = channels.find(
      ([channel]) => channel === newChannel
    );

    iframeEl.src = channelUrl;
    tvEl.dataset.channel = channelName;
    iframeEl.dataset.channel = newChannel;
  }
}

document
  .querySelectorAll("button[data-channel]")
  .forEach((button) => button.addEventListener("click", onClickButton));
