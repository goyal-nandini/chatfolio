// Shows: avatar, name, and dynamic status (online / typing / last seen)

function Header({ status }) {
  return (
    <div className="header">
      <div className="header-avatar">
        <img src="/avatar.png" alt="Nandini" />
      </div>
      <div className="header-info">
        <h2>Nandini Goyal</h2>
        <p className={`status ${status === "online" ? "online" : ""}`}>
          {status}
        </p>
      </div>
    </div>
  );
}

export default Header;