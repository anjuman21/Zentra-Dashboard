import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-icon">◉</span>
        <span>Zentra</span>
      </div>

      <button className="ask-ai">
        <span>☆</span>
        <span>Ask AI</span>
        <span className="shortcut">⌘ D</span>
      </button>

      <div className="sidebar-section">
        <p className="section-title">MAIN MENU</p>

        <nav className="sidebar-nav">
          <a className="nav-item active" href="/">
            <span>⌘</span>
            <span>Overview</span>
          </a>

          <a className="nav-item" href="/">
            <span>□</span>
            <span>Portfolio</span>
          </a>

          <a className="nav-item" href="/">
            <span>▥</span>
            <span>Markets</span>
          </a>

          <a className="nav-item" href="/">
            <span>⇄</span>
            <span>Trade</span>
          </a>

          <a className="nav-item" href="/">
            <span>⌁</span>
            <span>Analytics</span>
          </a>

          <a className="nav-item" href="/">
            <span>◷</span>
            <span>History</span>
          </a>
        </nav>
      </div>

      <div className="sidebar-section">
        <p className="section-title">FINANCE OPS</p>

        <nav className="sidebar-nav">
          <a className="nav-item" href="/">
            <span>◔</span>
            <span>Staking</span>
          </a>

          <a className="nav-item" href="/">
            <span>◌</span>
            <span>Yield Farming</span>
          </a>

          <a className="nav-item" href="/">
            <span>⌘</span>
            <span>Automations</span>
          </a>

          <a className="nav-item" href="/">
            <span>♧</span>
            <span>Alerts</span>
          </a>
        </nav>
      </div>

      <div className="sidebar-footer">
        <a className="nav-item" href="/">
          <span>□</span>
          <span>Help & Docs</span>
        </a>

        <a className="nav-item" href="/">
          <span>▥</span>
          <span>Settings</span>
        </a>

        <div className="light-mode">
          <span>☼</span>
          <span>Light Mode</span>
          <span className="toggle"></span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
