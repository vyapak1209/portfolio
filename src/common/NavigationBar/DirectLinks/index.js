import React from "react";

const DIRECT_LINKS_CONFIG = [
  {
    key: 'home',
    label: 'Home',
    href: '#',
  },
  {
    key: 'about',
    label: 'About',
    href: '#',
  },
  {
    key: 'connect',
    label: 'Connect',
    href: '#',
  }
]

function DirectLinks() {

  function getAllDirectLinksUI() {
    return DIRECT_LINKS_CONFIG.map(({ href, key, label }) => {
      return (
        <a href={href} key={key}>
          {label}
        </a>
      )
    })
  }

  return (
    <div className="nav665DirectLinksDiv">
      {
        getAllDirectLinksUI()
      }
    </div>
  )
}

export default DirectLinks;
