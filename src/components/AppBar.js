import React from 'react';
import AppBar from 'material-ui/AppBar';
import './AppBar.css'

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarExampleIcon = () => (
  <div className="app-bar">
    <AppBar
      style={{position:'fixed'}}
      title="Robert Aron"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
  </div>
);

export default AppBarExampleIcon;