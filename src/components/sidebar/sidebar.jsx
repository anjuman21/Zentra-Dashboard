import "./Sidebar.css";

import logo from "./assets/zentra-logo.png";
import searchOverlay from "./assets/search-overlay.png";
import searchBackground from "./assets/search-background.png";
import setupCardArt from "./assets/setup-card-art.png";
import decorativeArt from "./assets/decorative-art.png";

import menuOpen from "./assets/menu-open.svg";
import stars from "./assets/stars.svg";
import commandKey from "./assets/command-key.svg";

import overviewIcon from "./assets/overview.svg";
import portfolioIcon from "./assets/portfolio.svg";
import marketsIcon from "./assets/markets.svg";
import tradeIcon from "./assets/trade.svg";
import analyticsIcon from "./assets/analytics.svg";
import historyIcon from "./assets/history.svg";

import stakingIcon from "./assets/staking.svg";
import yieldIcon from "./assets/yield-farming.svg";
import automationIcon from "./assets/automations.svg";
import alertsIcon from "./assets/alerts.svg";

import progressDots from "./assets/progress-dots.svg";
import lightModeIcon from "./assets/light-mode.svg";
import toggleIcon from "./assets/toggle.svg";

// If you already have your Button component,
// uncomment these and use it for Next.
//
// import Button from "../Button/Button";

const mainMenu = [
  {
    label: "Overview",
    icon: overviewIcon,
    active: true,
  },
  {
    label: "Portfolio",
    icon: portfolioIcon,
  },
  {
    label: "Markets",
    icon: marketsIcon,
  },
  {
    label: "Trade",
    icon: tradeIcon,
  },
  {
    label: "Analytics",
    icon: analyticsIcon,
  },
  {
    label: "History",
    icon: historyIcon,
  },
];

const financeMenu = [
  {
    label: "Staking",
    icon: stakingIcon,
  },
  {
    label: "Yield Farming",
    icon: yieldIcon,
  },
  {
    label: "Automations",
    icon: automationIcon,
  },
  {
    label: "Alerts",
    icon: alertsIcon,
  },
];

function MenuItem({ item }) {
  return (
    <button
      type="button"
      className={`sidebar-menu-item ${
        item.active ? "sidebar-menu-item--active" : ""
      }`}
    >
      <span className="sidebar-menu-item__left">
        <img src={item.icon} alt="" />
        <span>{item.label}</span>
      </span>

      {item.active && (
        <span className="sidebar-menu-item__indicator" />
      )}
    </button>
  );
}

export default function Sidebar() {
  return (
    <aside className="sidebar">

      {/* HEADER */}
      <header className="sidebar-header">
        <div className="sidebar-brand">
          <img
            src={logo}
            alt="Zentra"
            className="sidebar-logo"
          />

          <span className="sidebar-brand-name">
            Zentra
          </span>
        </div>

        <button
          type="button"
          className="sidebar-collapse"
          aria-label="Collapse sidebar"
        >
          <img src={menuOpen} alt="" />
        </button>
      </header>

      {/* CONTENT */}
      <div className="sidebar-content">

        {/* SEARCH */}
        <div className="sidebar-search-wrapper">

          <button
            type="button"
            className="sidebar-search"
          >
            <span className="sidebar-search__left">

              <img
                src={stars}
                alt=""
                className="sidebar-search__stars"
              />

              <span>Ask AI</span>

            </span>

            <span className="sidebar-search__shortcut">
              <img src={commandKey} alt="" />
              <span>D</span>
            </span>
          </button>

          <div className="sidebar-divider" />

        </div>

        {/* MENU */}
        <div className="sidebar-menu">

          {/* MAIN MENU */}
          <section className="sidebar-section">

            <h3 className="sidebar-section-title">
              MAIN MENU
            </h3>

            <nav className="sidebar-menu-list">
              {mainMenu.map((item) => (
                <MenuItem
                  key={item.label}
                  item={item}
                />
              ))}
            </nav>

          </section>

          {/* FINANCE OPS */}
          <section className="sidebar-section">

            <h3 className="sidebar-section-title">
              FINANCE OPS
            </h3>

            <nav className="sidebar-menu-list">
              {financeMenu.map((item) => (
                <MenuItem
                  key={item.label}
                  item={item}
                />
              ))}
            </nav>

          </section>

        </div>

        {/* BOTTOM */}
        <div className="sidebar-bottom">

          {/* SETUP CARD */}
          <div className="setup-card">

            {/* MASKED ART */}
            <div className="setup-card-art">
              <img
                src={setupCardArt}
                alt=""
              />
            </div>

            {/* CARD CONTENT */}
            <div className="setup-card-content">

              <div className="setup-card-text">

                <h4>
                  Finish Setup
                </h4>

                <p>
                  Connect your wallet to start
                  tracking portfolio and earn rewards
                </p>

              </div>

              <div className="setup-card-footer">

                <div className="setup-progress">

                  <img
                    src={progressDots}
                    alt=""
                  />

                  <span>
                    2 of 4
                  </span>

                </div>

                <div className="setup-navigation">

                  <button
                    type="button"
                    className="setup-skip"
                  >
                    Skip
                  </button>

                  {/* Replace this with your existing Button */}
                  <button
                    type="button"
                    className="setup-next"
                  >
                    Next
                  </button>

                </div>

              </div>

            </div>

            {/* DECORATIVE BACK LAYER */}
            <div className="setup-decoration setup-decoration--blur">
              <img
                src={decorativeArt}
                alt=""
              />
            </div>

            {/* DECORATIVE FRONT LAYER */}
            <div className="setup-decoration setup-decoration--front">
              <img
                src={decorativeArt}
                alt=""
              />
            </div>

          </div>

          {/* FOOTER LINKS */}
          <div className="sidebar-footer-links">

            <button type="button">
              <img src={portfolioIcon} alt="" />
              <span>Help &amp; Docs</span>
            </button>

            <button type="button">
              <img src={marketsIcon} alt="" />
              <span>Settings</span>
            </button>

            <button
              type="button"
              className="theme-toggle"
            >
              <span className="theme-toggle__label">
                <img
                  src={lightModeIcon}
                  alt=""
                />
                <span>Light Mode</span>
              </span>

              <img
                src={toggleIcon}
                alt=""
                className="theme-toggle__switch"
              />
            </button>

          </div>

        </div>

      </div>

    </aside>
  );
}
