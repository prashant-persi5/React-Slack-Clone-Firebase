import React from 'react';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        Avatar
      </div>
      <div className="header__middle">
        Search
        <input type="text" placeholder="Search in Developer" />
      </div>
      <div className="header__right">
        Help
      </div>
    </div>
  )
}

export default Header
