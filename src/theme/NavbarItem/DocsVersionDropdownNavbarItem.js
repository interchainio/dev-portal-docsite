import React from 'react';
import DocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import { useLocation }  from '@docusaurus/router';

// `npm run swizzle` generated
export default function DocsVersionDropdownNavbarItemWrapper(props) {
  const { docsPluginId, className, type } = props
  const { pathname } = useLocation()
  /* (Custom) check if docsPluginId contains pathname
  Given that the docsPluginId is 'charge-controller' and the routeBasePath is 'charge-controller', we can check against the current URI (pathname).
  If the pathname contains the docsPluginId, we want to show the version dropdown. Otherwise, we don't want to show it.
  This gives us one, global, context-aware version dropdown that works with multi-instance setups.

  (Example for a possible configuration)
  docusaurus.config.js:
  ****************************************************************************************************
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'charge-controller',
      path: 'docs/ChargeController',
      routeBasePath: 'charge-controller',
      sidebarPath: require.resolve('./docs/ChargeController/sidebars.js'),
    },
  ],
  ****************************************************************************************************

  navbarItems.js (or as an attribute in docusaurus.config.js):
  ****************************************************************************************************
  {
    type: 'docsVersionDropdown',
    docsPluginId: 'charge-controller',
    position: 'right',
  },
  {
    type: 'docsVersionDropdown',
    docsPluginId: 'charge-point',
    position: 'right',
  },
  ****************************************************************************************************
  */
  const doesPathnameContainDocsPluginId = pathname.includes(docsPluginId)
  if (!doesPathnameContainDocsPluginId) {
    return null
  }

  // print out props
  console.log(docsPluginId, props)

  return (
    <>
      <DocsVersionDropdownNavbarItem {...props} />
    </>
  );
}
