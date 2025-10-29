import React from "react";
import "../styles/playStoreApps.scss";

const PlayStoreApps = () => {
  const apps = [
    {
      title: "Block Stack 3D",
      description:
        "An addictive 3D stacking game that tests your dexterity and precision. Built & published by me.",
      image:
        "https://play-lh.googleusercontent.com/tFqL--HoSfBYKcWphxVP8N0wf4F4U20ijOaCs9hIZHc0b1fopYYR6Y0U-vAtbPFYWqXG=w480-h960-rw",
      link: "https://play.google.com/store/apps/details?id=com.UdDesignSolutions.BlockStack&hl=en_IN",
    },
    {
      title: "Pin Precision",
      description:
        "A pin-launching challenge game where aim and timing matter. Published under my name.",
      image:
        "https://play-lh.googleusercontent.com/mNlR9Zhk_mftonafqyn7DREX23gVLpxv8uRNbV5Do-xy5cO63mQ6uivWYYafe5G_FjE=w480-h960-rw",
      link: "https://play.google.com/store/apps/details?id=com.UdDesignSolutions.PinPrecision&hl=en_IN",
    },
    {
      title: "Mantra Meter",
      description:
        "A meditation & mantra tracking app designed to help you build mindful habits.",
      image:
        "https://play-lh.googleusercontent.com/wGAbb5HKDkLGKudnmGzfHjsR0mIB4XFh5Su093KNBrPWIxpht3mbQVeNuw76yJPFU-s=w480-h960-rw",
      link: "https://play.google.com/store/apps/details?id=com.UdDesignSolutions.MantraMeter&hl=en_IN",
    },
  ];

  return (
    <section className="playstore-section container" id="apps">
      <h2 className="section-title">My Play Store Apps</h2>
      <div className="apps-grid">
        {apps.map((app, index) => (
          <div className="app-card" key={index}>
            <img src={app.image} alt={app.title} className="app-image" />
            <div className="app-content">
              <h3>{app.title}</h3>
              <p>{app.description}</p>
              <a
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className="play-btn"
              >
                View on Play Store
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlayStoreApps;
