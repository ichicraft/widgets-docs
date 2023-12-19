## 1.64.30 - December 19, 2023

### Fixed
- An issue where diagnostic logging sent duplicate messages

## 1.64.29 - December 19, 2023

### Added
- The ability to share links to shared boards with colleagues

### Changed
- The Teams package generator to include more options and allow versioning

### Fixed
- Various issues to smoothen the installation process

## 1.64.28 - December 11, 2023

### Added
- A whole new installation experience, where default configurations can be picked to allow for a more complete first experience of Ichicraft Boards
- A new CSS class `icb-Board-RootInner` for overrides on one of the core elements of Boards

### Changed
- Removed the manual &quot;Full height&quot; setting and replaced this with smart detection of optimal rendering

### Fixed
- Several issues with the new Backup and Restore advanced features

## 1.64.26 - November 22, 2023

### Added
- New functionality to fully backup (or restore) an installation of Ichicraft Boards

### Fixed
- An issue where the wrong fields were rendered in the Teams admin section
- An issue where the navigation showed a footer section under the wrong circumstances
- An issue where an error occurred if the manifest of a widget could not be loaded
- An issue where an error occurred if no translations were available in the manifest of a widget

### Changed
- Widgets can now have an icon as default thumbnail

## 1.64.25 - November 09, 2023

### Fixed
- An issue where in some cases the icon for resetting something wasn&#x27;t visible
- An issue where selecting a board template in some screen resolutions caused automatic deselecting, leaving a user unable to pick a template

## 1.64.24 - October 25, 2023

### Fixed
- an issue where the People Picker didn&#x27;t always store data correctly

## 1.64.23 - October 24, 2023

### Added
- Several CSS classes to the navigation elements to override the show/hide toggle

## 1.64.22 - October 11, 2023

### Added
- Widget variants can now have an icon representation instead of just a thumbnail

### Changed
- Improved widget details panel

### Fixed
- A bug where custom theme colors didn&#x27;t work correctly
- A bug where in the Teams client, the navigation bar wasn&#x27;t scrollable when there are lots of menu items

## 1.64.20 - October 05, 2023

### Fixed
- An issue where creating urgent messages fails in certain scenarios

## 1.64.19 - October 02, 2023

### Fixed
- Some smaller issues with the recently released urgent messages feature (wrong icon, missing sorting in drop-down list, unfiltered list of messages during onboarding, etc)
- A German translation that wasn&#x27;t correct

## 1.64.18 - September 11, 2023

Minor system update

## 1.64.17 - September 07, 2023

### Added

- A **new feature** that allows designated users to publish urgent messages to specific boards or to the entire organisation

## 1.64.16 - August 22, 2023

### Fixed
- An issue with a newer version of the installation package failing to load the Boards web part correctly

## 1.64.15 - August 18, 2023

### Added
- A **new feature** that allows users to update their profile right from their boards
- A warning message when admins leave the page without saving board configuration updates
- Searching for widgets is now possible on a widget&#x27;s subtitle
- Automatically filling the Ichicraft Product Key during subsequent installations within a single tenant

### Fixed
- An issue where the catalog of installable widgets wasn&#x27;t sorted alphabetically
- An issue where the buttons in the widget configuration panel were rendered on top of content
- An issue where a hex color in CSS wasn&#x27;t applied correctly in Teams
- An issue where board configuration cache invalidation didn&#x27;t work correctly in certain scenarios

## 1.64.14 - August 11, 2023

### Added
- Option to quickly access a widget&#x27;s admin configuration from a widget on a board using the widget&#x27;s context menu
- Browser check to warn a user that changes in board configuration might get lost when board updates aren&#x27;t saved yet

### Changed
- Minor updates to styling of widget&#x27;s context menu
- Changed positioning of Configuration and Trial message bars

### Fixed
- An issue where the web part wouldn&#x27;t render correctly when the (SP) page is in edit mode

## 1.64.13 - July 17, 2023

### Fixed
- An issue where the navigation panel sometimes closed automatically in Teams

## 1.64.12 - July 14, 2023

### Added
- The option to collapse the left navigation
- Some extra CSS override classes in the welcome message

### Changed
- Audience targeted widgets are no longer visible to visitors of a shared board who are not in the audience of that widget

### Fixed
- An issue where in some specific scenario, a non-owner of a shared board was able to update that board

## 1.64.11 - June 26, 2023

### Fixed
- An issue where in some scenarios the onboarding of new users was impossible due to a disabled &quot;Let&#x27;s get started&quot; button

## 1.64.10 - June 22, 2023

### Fixed
- An issue where failing to retrieve account creation date/time results in infinite loading board

## 1.64.9 - June 20, 2023

### Added
- Navigation policies (New Feature!) to specify the boards (personal + shared) that should be in a user&#x27;s navigation (only available if and when Shared Boards feature is active)

### Fixed &amp; Changed
- Many small fixes and improvements done with regards to UI (initial loading, switching back and forth between Ichicraft Boards and other SharePoint pages, the way that widgets appear and are

## 1.64.7 - May 24, 2023

### Fixed
- An issue where the people picker didn&#x27;t work correctly all the time
- An issue where the newly generated sppkg package included too many assets
- An issue where the newly generated sppkg package introduced an issue with conflicting React versions

## 1.64.6 - May 17, 2023

### Changed
- (non-functional) Upgraded underlying SPFx version to 1.17.2

### Changed
- Support for different language codes included that come from Teams
- Some updates under the hood to support other shapes of etags

## 1.64.4 - April 14, 2023

### Fixed
- an issue where the file picker sometimes falls behind another dialog

## 1.64.3 - April 12, 2023

### Fixed
- An issue where API permissions could no longer be requested from admin panel
- An issue with loading (very) old configurations

## 1.64.2 - April 06, 2023

### Fixed
- An issue with missing resource files

## 1.64.1 - April 06, 2023

### Added
- The option to onboard new users without showing a welcome message if no interaction is required
- Functionality to the File Picker control so it can be used by widgets properly
- The option for a user to completely reset a his/her profile (by using SHIFT key when board settings menu is open)

### Fixed
- An issue where no primary personal board was provisioned when the Personal Boards 

## 1.64.0 - March 17, 2023

### Added
- The ability to show multiple custom command bar buttons per widget

## 1.63.0 - February 15, 2023

### Added
- The ability to log additional user data as part of the Analytics feature
- More events related to recently added features to the Analytics feature

## 1.62.0 - January 27, 2023

### Fixed
- An issue where in some cases a pushed widget could not be resized when configuration dictates it should be able to do so
- An issue where in some cases a move lock appeared even though a pushed widget was allowed to be moved

## 1.61.0 - January 18, 2023

### Fixed
- An issue where the file picker navigation failes sometimes

### Fixed
- An issue where some configurations didn&#x27;t load correctly after previous release
- An issue where the file picker didn&#x27;t work correctly after previous release

## 1.59.0 - January 17, 2023

### Added
- You can now configure a custom theme to be used by Ichicraft Boards (includes dark mode!)

## 1.58.0 - December 20, 2022

### Changed
- Url to Ichicraft announcements updated to ichicraft.com domain

## 1.57.0 - December 19, 2022

### Added
- Ichicraft Boards announcements are now visible from within the product

### Fixed
- A small visual issue where some icons weren&#x27;t visible in dark mode

## 1.56.0 - December 15, 2022

### Changed
- Under-the-hood update where info about board type and user role is provided to widgets

## 1.55.0 - November 25, 2022

### Changed
- Removed last jsdelivr CDN pointers
- Removed redundant log messages

## 1.54.0 - November 23, 2022

### Added
- Board templates can now also be defined for shared boards
- Specify if widgets (variants) are available for either personal boards, shared boards, or both

## 1.53.0 - November 09, 2022

### Added
- Option to push a Shared Board to (groups of) users

## 1.52.0 - November 01, 2022

### Added
- It&#x27;s now possible for a user to change the order of boards in the left navigation

## 1.51.0 - November 01, 2022

### Fixed
- An issue where renaming or deleting a widget on a shared board caused an error in some cases

## 1.50.0 - October 31, 2022

### Added
- Introducing the first version of Ichicraft Board&#x27;s newest feature: Shared Boards!

## 1.49.0 - September 26, 2022

### Fixed
- An issue where pushed widgets were re-pushed after a user suffered from a connection error

### Fixed
- An issue where the (advanced) export / import feature fails in certain circumstances

## 1.47.0 - September 20, 2022

### Fixed
- An issue where the wrong current language was passed to a widget if that language wasn&#x27;t configured as a content language
- An issue where the confirmation dialog didn&#x27;t close after deleting a content language
- An issue where the API Permissions tab showed all variants of a widget type where only one would suffice to give the proper permissions

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