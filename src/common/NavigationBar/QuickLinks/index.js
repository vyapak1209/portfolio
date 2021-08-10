import React from "react";

import Tooltip from "../../../ui/Tooltip";

const QUICK_LINKS_CONFIG = [
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: '#',
    tooltipWidth: 100,
  },
  {
    key: 'github',
    label: 'GitHub',
    href: '#',
    tooltipWidth: 100,
  },
  {
    key: 'instagram',
    label: 'Instagram',
    href: '#',
    tooltipWidth: 100,
  },
  {
    key: 'download',
    label: 'Resume',
    href: '#',
    tooltipWidth: 100,
  }
]

function QuickLinks() {

  function getQuickLinkIcon(key) {
    return require(`./images/${key}_freya.png`).default;
  }

  function getQuickDirectLinksUI() {
    return QUICK_LINKS_CONFIG.map(({ href, key, label, tooltipWidth }) => {

      const quickLinkIcon = getQuickLinkIcon(key)

      return (
        <Tooltip
          text={label}
          width={tooltipWidth}
          parentStyle={{
            height: 52,
            width: 52,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <a
            href={href}
            key={key}
            style={{ height: 42, width: 42 }}
          >
            <img width={22} height={22} src={quickLinkIcon} alt={label} />
          </a>
        </Tooltip>
      )
    })
  }

  return (
    <div className="nav665QuickLinksDiv">
      {
        getQuickDirectLinksUI()
      }
    </div>
  )
}

export default QuickLinks
