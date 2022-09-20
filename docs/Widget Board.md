## 1.46.0 - September 20, 2022

### Changed
- Big under-the-hood update to prepare for separate licenses for product features including the upcoming feature &quot;Shared Boards&quot;

## 1.45.0 - September 08, 2022

### Fixed
- An issue where the background color of the header bleeds out when the web part is placed in a non full-width section

## 1.44.0 - September 05, 2022

### Added
- [#234] Some extra options to open urls in a dialog (used by widgets)

## 1.43.0 - August 26, 2022

### Fixed
- An error where the new category management feature causes an issue in some cases

## 1.42.0 - August 26, 2022

### Fixed
- An issue where the widget library throws an error

## 1.41.0 - August 25, 2022

### Added
- [#220] Improved ways to organize widgets using category sets and hierarchies
- [#219-1] When adding a widget it&#x27;s now visible which widgets are already on your board
- [#219-2] Adding multiple widgets is now easier for the end user
- [#219-3] Browsing the widget library is easier for users with new filter options

## 1.40.0 - August 25, 2022

### Fixed
- An issue where selecting an image in the file picker (from within settings panel) didn&#x27;t work correctly when using the checkbox to select a file

### Changed
- Prepared the internal file picker component so it can be used by widgets too. There&#x27;s now a function `openFilePicker` as part of the `WidgetContext` that can be used from within widgets.

## 1.39.0 - August 09, 2022

### Fixed
- [#232] An issue where fetching a user&#x27;s security groups could result in a fatal error in case local storage quota was exceeded

## 1.38.0 - July 19, 2022

### Fixed
- [#192] An issue where in rare cases the first name of a user could not be retrieved correctly and a weird message [object Object] is displayed instead

## 1.37.0 - July 18, 2022

### Added
- [#221] Ability to add subtitles to widgets, allowing for more distinguishable widget headers

## 1.36.0 - July 06, 2022

### Fixed
- [#214] An issue where sometimes category filters were visible that had no selectable widgets in them
- An issue where widget&#x27;s production script was always loaded before a widget&#x27;s script running in debug mode

## 1.35.0 - June 28, 2022

### Added
- Time-based analytics feature allowing events to be raised and sent to third party analytics tools like Google Analytics, Segment, CrazyEgg and many more using the [Analytics](https://getanalytics.io/) library

### Fixed
- A bug where icon buttons don&#x27;t work consistently in Teams and Viva Connections

## 1.34.0 - June 15, 2022

### Fixed
- An issue where 4-column layouts in SharePoint were no longer enforced correctly
- An issue where icon buttons in some occasions didn&#x27;t load in Teams

## 1.33.0 - May 27, 2022

### Fixed
- An issue where the WidgetBoard_Assets library was no longer visible in the Admin panel
- An issue where the title of a widget could grow out of the bounds of the header
- An issue where users from China were no longer able to use widget due to a CDN being blocked
- Other minor improvements

## 1.32.0 - May 12, 2022

### Added
- An alternative way to store board configuration to support large configurations (&gt; 1MB) (experimental feature for now)

## 1.31.0 - May 03, 2022

### Changed
- The way the widget board loads when configuration cache is available, speeding up initial load time considerably
- Added caching to profile picture, preventing a fresh fetch on each page load

## 1.30.0 - May 02, 2022

### Added
- An experimental feature to import and export board configuration to your local file system.

## 1.29.0 - April 27, 2022

### Fixed 
- A bug where widgets rerendered when moved around the grid
- A bug where resizing or dragging a widget with an iframe as content, sometimes caused the widget to lock in a strange place

## 1.28.0 - April 24, 2022

### Added
- A whole new design experience to Ichicraft Boards! Check the Design tab in the Board Adminsitration Panel for all the new options.

## 1.27.0 - March 24, 2022

### Added
- A temporary work-around to help users with an issue that occurs in older Viva Connections apps in Teams

## 1.26.0 - March 10, 2022

### Added
- The long awaited feature that allows a user to edit the title of a widget

## 1.25.0 - March 09, 2022

### Added
- A handy search box in the Add widget panel
- A handy search box in the Widgets maintenance panel

## 1.24.0 - February 14, 2022

### Changed
-  Replaced permission requirement User.ReadWrite.All with less privileged User.ReadWrite

## 1.23.0 - February 14, 2022

### Added
- Support for only making a widget variant available for new employees (to support onboarding scenarios)
- Some new properties and functions to the widget context object (for custom development)

### Fixed
- A bug where content languages weren&#x27;t displayed in board config panel but a spinner was shown instead
- A bug where sometimes a custom tooltip re-appeared unintentionally in the widg

## 1.22.0 - January 11, 2022

### Fixed
- A UI issue where the Save/Cancel buttons were hidden below the scroll in a large admin config panel
- A minor issue where detecting a user&#x27;s language in Teams didn&#x27;t work with &#x27;en-GB&#x27;

## 1.21.0 - November 11, 2021

### Changed
- Minor change in product name in sppkg package

## 1.20.0 - November 10, 2021

### Added
- Full support for <span style="color:white;background-color:black">&nbsp;dark&nbsp;</span> themes in MS Teams and SharePoint
- Name of editing board template to modal header
- Various new properties to `WidgetContext` for use in widgets

### Fixed
- A bug where pressing &lt;esc&gt; or clicking the "clear" icon in a search box resulted in an error


## 1.19.0 - October 20, 2021

### Changed
- Small (~10%) optimization in bundle size
- Upgrade to FluentUI version 8

### Fixed
- a bug where initial installation fails if a user doesn&#x27;t pick a single widget to install
- a faulty message to indicate that no board templates have been created yet

## 1.18.0 - October 15, 2021

### Fixed
- An issue where a pushed widget that was later removed from board configuration could break a user&#x27;s board
- An issue where in some cases exceptions didn&#x27;t show friendly error messages

## 1.17.0 - October 07, 2021

### Changed
- This version of the widget board supports V2 widget manifests. V2 introduces &#x27;externals&#x27;, allowing async loading and sharing of modules/libraries among widgets. Make sure you upgrade your widgets using [this wiki page](https://github.com/ichicraft/widgets-docs/wiki/Migrate-widget-to-Manifest-V2) to benefit from these optimizations.

## 1.16.0 - September 15, 2021

### Added
- New options in the so called &#x27;pushed widget&#x27; feature: it&#x27;s now possible to define if a pushed widget is _deletable_, _movable_ or _resizable_ by the user.
- An optional toggle in &#x27;board template&#x27; feature to disable strict audience mismatch warnings

## 1.15.0 - August 26, 2021

### Fixed
- A bug where the main user board layout gets messed up when an extra board is edited

## 1.14.0 - July 28, 2021

### Added
- All new Board Template editing experience

### Changed
- Minor update to Portuguese resources

## 1.13.0 - April 13, 2021

### Fixed
- Hopefully solved an issue where in rare cases the `pageContext` property of the web part context is `undefined`

## 1.12.0 - April 09, 2021

### Changed
- Various improvements to initialization of widget board (lower timeout, auto refresh once on error, etc.)
- New visualization of fatal error, introducing retry button and admin panel button

### Fixed
- A bug where the indicator of missing API permissions was no longer visible in admin panel

## 1.11.0 - March 25, 2021

### Added
- Option to use a 6 column layout in SharePoint on high resolution screens

### Changed
- Improved initialization of widget board with optional retries for service calls that sometimes fail
- Improved handling of user resetting his/her board by clearing all cache items

### Fixed
- A bug where sometimes the widget board stays empty when user&#x27;s groups failed loading
- A bug where a notification could grow beyond the board header's max width

## 1.10.0 - March 05, 2021

### Fixed
- Fixed an issue with z-indexes being too high for widget elements, causing stacking issues with new App Bar in SharePoint

## 1.9.0 - March 05, 2021

### Fixed
- Hotfixed an issue that could occur in browsers that don&#x27;t support customElements

## 1.8.0 - February 24, 2021

### Added
- Added additional static class names to allow CSS overrides of the board navigation (part of board header)
- Added `teamsSdk` and `userEmail` to `WidgetContext` which are now available for widgets

### Changed
- Moved &quot;Reset widget board&quot; from main command bar to new &#x27;Danger zone&#x27; in admin panel
- Renamed &quot;About&quot; to &quot;Registration&quot;
- Applied higher z-index (CSS) to &#x27;top&#x27; widgets to allow expansion over 'bottom' widgets
- Updated breakpoints in widget grid to prevent widgets from becoming too small (in width)

### Fixed
- Fixed minor issue with caching of debugging widget manifest

## 1.7.0 - February 03, 2021

### Added
- Posibility to target (variants of) widgets to specific audiences

### Changed
- Updates to Portuguese translations after review

## 1.0.0 - January 29, 2020
Initial release