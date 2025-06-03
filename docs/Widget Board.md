## 1.84.0 - June 03, 2025

### Fixed
- Widget audience rules were not being enforced for widgets already added to the board
- Shared board layout editor was not functional when accessed by an administrator
- Some elements were hard to reach on touch-only devices like tablets

## 1.83.0 - April 25, 2025

### Fixed
- Fixed an issue where checking if a user can create shared boards sometimes results in an exception for the user

## 1.82.0 - April 25, 2025

### Added
- Duplicate functionality for widgets and boards
  - Create a shared board based on a personal board
  - Create a personal board based on a shared board
  - Copy a widget directly to another board or to the buddy bar
- Improved board library in Admin Center
  - View who is currently working on a draft
  - View owners, visitors and push information
  - Manage access, duplicate, delete shared boards
- View draft &amp; owner information when pinning shared boards
- You can now move widgets to a shared board
- You can now set your start board (enabled through configuration packages)

### Changes
- Improved widget error state UI
- Improved widget rename UI
- Improved widget &amp; board context menus
- Moved &#x27;Edit navigation&#x27; action to a separate context menu in the horizontal navigation

### Fixes
- Fixed widgets still being rendered even when they&#x27;re not allowed in that scope (personal, shared, buddy)

## 1.80.0 - April 03, 2025

### Changed
- It&#x27;s now possible to force the web part to render in full height, even when other web parts are on the page.

### Fixed
- The app should no longer crash when performing a board reset when a user had one or more widgets on its board that weren&#x27;t available anymore.

## 1.78.0 - March 20, 2025

### Fixed
- Urgent messages now work correctly when a user&#x27;s language preference is set to Italian 🇮🇹.  
- The vertical navigation menu, opened via the hamburger menu button, can now be styled properly.  
- **.webp** files now display the correct file type icon in the file picker. 

## 1.77.0 - March 19, 2025

### Added
- Administrators can now force a reset of users&#x27; personal boards, ensuring that updates—such as a revised board template—are applied. This option is available in the **Advanced** section of the **Admin Center**.

## 1.76.0 - March 12, 2025

### Added
- Option to maintain previously made widget settings when resetting your board

### Changed
- Improved UI for special element surfaces, such as an Empty Board
- Improved Polish translations

### Fixed
- Missing translations in Layout Editor

## 1.75.0 - March 05, 2025

### Added
- It is now possible to select users and/or groups that need to see the Ichicraft Boards What&#x27;s New section, as opposed to the all or nothing toggle it used to be

### Fixed
- An issue where using rich text editors in the admin center caused errors when used in combination with the Sticky Notes widget

## 1.74.0 - February 22, 2025

### Fixed
- An issue where the hamburger left navigation didn&#x27;t work well with large numbers of menu items
- An issue where menu item titles were cut off without giving access to the original long title
- An issue where 6-column layout wasn&#x27;t available anymore on larger screens in combination with left navigation
- An issue where discarding someone else&#x27;s widget changes wasn&#x27;t possible due to a UI issue

## 1.73.0 - February 19, 2025

### Added
- Additional design options, such as colors for the header, navigation and badges
- Globally defined colors, for easier configuration of color fields
- Configuration of multiple themes / brandings
- Theme setting for configuration packages
- Configuration of multiple backgrounds users can choose from
- Polish translation support

### Changed
- Increased widget row height
- Improved UI for board navigation, badges and Color Picker fields
- Replaced custom User Card behavior with the default SharePoint behavior
- Optimized bundle size for faster initialization


## 1.72.0 - February 06, 2025



### Fixed
- An issue where the installation of Ichicraft Boards couldn&#x27;t proceed due to a failure in detecting granted API permissions

## 1.71.0 - January 21, 2025

### Fixed
- A bug where the Buddy Bar didn&#x27;t disappear completely when the placeholder was dismissed
- A bug where selecting a tab from within a widget&#x27;s code didn&#x27;t work correctly
- A bug where the correct boardType wasn&#x27;t provided to a widget when a widget resides in the Buddy Bar
- Some issues in the analytics feature, not providing the correct event details in all cases

## 1.69.0 - December 21, 2024

### Fixed
- An issue where a removed Shared Board could cause the app to fail when users try to navigate to that missing board
- An issue where the Buddy Bar teaching tip wasn&#x27;t presented to users that immediately get buddies from a configuration package

### Changed
- Some small visual improvements to the rendering of the Buddy Bar

## 1.68.0 - December 19, 2024

### Fixed
- An issue where widget titles that were supposed to be clickable (like with Inbox and Upcoming Meetings), no longer were

## 1.67.0 - December 16, 2024

### Fixed
- A bug where the new Buddy Bar rendered twice on mobile devices in some scenarios

## 1.66.0 - December 13, 2024

### Added
- The Buddy Bar (quickly check out our [blog](https://ichicraft.com/buddy-bar-ichicraft-boards/) for the details!)
- The ability to move widgets between personal boards and the Buddy Bar
- Various new CSS classes that can be used to override styling Ichicraft Boards
- Some minor improvements to the administration of configuration packages

### Fixed
- An issue where sometimes the buttons in the header (top right) remained active when hovering over them quickly
- Inconsistencies with some translations

## 1.65.0 - October 25, 2024

### Added
- New feature that allows Urgent Message editors to send push notifications to the audience of a message. These notifications appear as activities in the end user&#x27;s Teams activity feed. Check out [our blog](https://ichicraft.com/push-notifications-urgent-messages-ichicraft-boards/) for more information!

### Changed
- Made various improvements to the API permission panel in the admin center

### Fixed
- An issue where an error was rendered when opening an empty folder or library in the file picker component
- An issue where the organizational library couldn&#x27;t be used for centrally managed assets from within the file picker component
- An issue where audience targeting didn&#x27;t always work correctly with external users (widget updates will follow)

## 1.64.73 - October 14, 2024

### Added
- An About page to the Admin Center with contact information
- A changelog section to the About page that shows information about new releases of Ichicraft Boards

## 1.64.72 - October 02, 2024

### Fixed
- An issue where users see duplicate personal boards in their navigation

## 1.64.71 - October 02, 2024

### Fixed
- An issue where using the Configuration Packages tab fails in the Admin Center for some older installations
- An issue where additional personal boards are falsely automatically created

## 1.64.70 - October 01, 2024

### Fixed
- A bug that can cause older installations to fail when navigating to the Configuration Packages feature in the Admin Center

## 1.64.69 - September 30, 2024

### Fixed
- Multiple issues in using configuration packages without using the Shared Boards features
- An issue where, as an administrator, you couldn&#x27;t always update a shared board
- An issue where in some cases, warning symbols weren&#x27;t immediately visible when entering the admin center

### Changed
- It&#x27;s now possible to create configuration packages without preselected boards and only include a central search box configuration
- Creating a new shared board from the admin center now automatically has admin view

## 1.64.68 - September 17, 2024

### Changed
- Added some extra logging
- Removed a duplicate call to an internal function

## 1.64.67 - September 13, 2024

### Changed
- Made some improvements to dark mode rendering

## 1.64.66 - September 07, 2024

### Added
- A central search box can now be provided to open our new search center (using our the new Search Widget)
- Ability to use tab navigation in a widget header

### Changed
- The concept of Navigation Policies has evolved into Configuration Packages, where it&#x27;s now possible to select boards, but also configure a central search box
- Updates to the rendering of the core command bar buttons in the top right

### Fixed
- German translations used by the core product

## 1.64.65 - August 14, 2024

### Fixed
- An issue where navigating back and forth between a page with the Ichicraft Boards web part and another SharePoint page sometimes results in an error in Ichicraft Boards.

## 1.64.64 - July 25, 2024

### Added
- Support for our new API and CDN URL&#x27;s that run under our own ichicraft.com domain

### Fixed
- An issue where during a clean installation, multiple attempts are done to store draft configuration items even though the storage list isn&#x27;t provisioned yet

### Changed
- Automatically fetching urgent messages now stops after 5 failed attempts
- Made some improvements to recover from a connection loss to central PnP JS object
- Added more user role information to widget context, to be used by widget logic

## 1.64.63 - July 12, 2024

### Fixed
- An issue with the new widget administrators functionality that caused an error for end users

## 1.64.62 - July 11, 2024

### Added
- &#x27;Widget administrators&#x27; field for a widget variant, to allow other users/groups to edit its admin configuration
- &#x27;Open in admin center&#x27; button to the widget command bar ,for administrators
- Rich text support for widget instructions
- Open/close button for filter panel in the admin widget library

### Changed
- Rebranded admin settings menu to &#x27;Admin center&#x27;
- Widget variant titles and subtitles now have a maximum length of 40 and 60, respectively
- Improved UI for the admin widget library
- Improved UI for the vertical board navigation panel
- Improved board template editor for administrators

### Fixed
- An issue where the &#x27;Show&#x27; button in the vertical board navigation panel would be positioned incorrectly
- An issue when trying to parse an incorrect etag value
- An issue where an installation file would always be fetched, even though the application was already installed
- An issue where the SuiteNavPlaceholder element of SharePoint sites was still visible when embedding them in a dialog

## 1.64.61 - June 26, 2024

### Added
- New properties provided to the WidgetContext (sp, spHttpClient, spHttpClientConfiguration), used to communicate with the SharePoint REST api

### Changed
- Improved ColorPicker UI
- Improved bundle size

## 1.64.60 - June 12, 2024

### Added
- Layout editor for Shared Boards
- Missing tooltips for disabled board/widget actions
- Ability to render widget command bar buttons in the more/overflow menu
- Additional properties for widget command bar buttons
  - Disabled
  - Highlighted
  - Cursor

### Changed
- Widget command bar will now automatically move overflowed items to the More menu
- Improved styling for Shared Boards preview and publish bars
- Improved styling for tooltips across entire software
- Improved styling for Add and More buttons in the main command bar

## 1.64.59 - May 28, 2024

### Fixed
- An issue where trying to restore an Ichicraft Boards backup that doesn&#x27;t contain urgent messages or shared boards, resulted in an error
- Some translations
- Various issues in Ichicraft Boards Lite
- Dismissed pushed widgets not resetting when resetting your Home board
- Widget titles sometimes not being tracked in analytics
- Security validation errors when SharePoint token expires after 30 minutes
- An issue where a unique Teams package ID wasn&#x27;t always generated after installing Ichicraft Boards

## 1.64.58 - May 22, 2024

### Added
- Support for deep linking, to be used by widgets
- Additional debug information for widget developers when debugging a widget locally

### Changed
- Tweaked UI of urgent messages

### Fixed
- Full height not working anymore in Teams personal app
- An issue where the urgent messages link in the navigation didn&#x27;t show consistently
- An issue where shared boards weren&#x27;t always pushed correctly

## 1.64.57 - May 08, 2024

### Added
- Quick edit button for urgent messages (if the user has the correct permissions)

### Fixed
- A redirect issue when clicking on a link in the urgent message short description
- Image picker components not having the correct height

## 1.64.56 - May 08, 2024

### Added
- Short description field for urgent messages

### Changed
- Improved urgent message UI
- Increased width threshold where vertical navigation is hidden

### Fixed
- An issue where urgent messages did not appear when timezone UTC+00:00 was selected
- An issue where embedded Excel files were not rendered correctly
- An issue when importing a backup with the shared boards feature disabled

## 1.64.53 - May 01, 2024

### Fixed
- An issue where the installation would fail when the &#x27;Everyone except external users&#x27; group is missing

## 1.64.52 - April 26, 2024

### Added
- Improvements of the iframe dialog used by certain widgets to open URLs
  - Added &#x27;back&#x27; and &#x27;forward&#x27; buttons for SharePoint sites
  - Added &#x27;open in new window&#x27; button
  - Added ability to override dialog header icon and title

### Fixed
- Some visual issues in the widget header link buttons (e.g. show all)
- An issue where a missing publication date caused the urgent messages becoming unmanageable

### Removed
- Redundant functionality to import and export board configuration files

## 1.64.49 - April 24, 2024

### Changed
- Minor update in generated SharePoint package file

## 1.64.48 - April 17, 2024

### Fixed
- Removed logs to the developer console

## 1.64.47 - April 11, 2024

### Fixed
- An issue where navigating from a page with Ichicraft Boards to another (web part) page caused the scrollbar to disappear
- An issue where navigating from one installation of Ichicraft Boards to another installation in the same tenant sometimes caused the wrong information to appear

## 1.64.46 - April 04, 2024

### Fixed
- An issue where the product didn&#x27;t always render correctly in full-height

## 1.64.44 - March 27, 2024

### Added
- Widgets can now render a textual link in the widget header (command bar)

### Fixed
- An issue where the publication date of urgent messages wasn&#x27;t correctly exported in the back-up process

## 1.64.43 - March 20, 2024

### Fixed
- An issue where changes to large configurations couldn&#x27;t be stored as draft
- An issue where urgent messages couldn&#x27;t be published at a predefined time

## 1.64.42 - March 18, 2024

### Added
- Multiple administrators can now update Ichicraft Boards configuration simultaneously
- Draft configuration changes are now maintained/remembered between browser sessions/reloads
- Administrators can now select which sections of their draft configuration they want to save/discard
- Missing documentation was added for a CSS override class used by the App Launcher Widget

### Changes
- Improved Widget Library UX in admin panel
- Improved responsiveness of admin panel

### Fixed
- An issue where pushed widgets weren&#x27;t pushed correctly to users who created their personal board in an older version of Ichicraft Boards
- An issue where a required API permission scope like &#x27;User.ReadWrite&#x27; was listed as &#x27;not granted&#x27;, even though the permission scope &#x27;User.ReadWrite.All&#x27; (which is an extension of User.ReadWrite) was granted
- An issue where a widget that was resizable, movable and pushed to the top-right corner of a board, could not be resized in the horizontal direction

## 1.64.41 - February 20, 2024

### Fixed
- A bug where uploading a custom widget in some scenarios results in a fatal error
- Some incorrect translations

### Changed
- Made improvements to storing user configuration

## 1.64.40 - February 08, 2024

### Added
- The ability to change the default language of an installation of Ichicraft Boards

### Changed
- Improved many translations across different languages

### Fixed
- An issue where declared analytics preferences in custom widget manifests were discarded upon  uploading the manifest file
- An issue where the wrong language was used in the application and some widgets failed rendering in scenarios where the user uses a language not available as an Ichicraft Boards system language (like Polish)
- An issue where the wrong keys where used when storing settings in local storage cache

## 1.64.39 - February 01, 2024

### Fixed
- An issue where the current board resets when switching tabs in the file picker

## 1.64.38 - January 24, 2024

### Fixed
- A bug where urgent messages couldn&#x27;t be managed if Shared Boards feature wasn&#x27;t activated

## 1.64.37 - January 24, 2024

### Added
- An alternative way to move boards to a different group using a new Move option in their contextual menu

### Changed
- Urgent messages can now be targeted to multiple shared boards
- Urgent messages now display the publication date

## 1.64.35 - January 16, 2024

### Added
- Option to add navigation groups to organize your boards

### Changed
- Element border radius is now applied to most context menus in the core product
- Hamburger menu is now also used on mobile when using the horizontal navigation layout setting
- &#x27;Change title&#x27; option for boards is now called &#x27;Rename&#x27;, to be consistent with renaming widgets
- Titles for personal boards are now edited within a dialog instead of in-line
- Improved design for various dialogs (Add/edit personal board, delete board, reset board)
- Improved UI for horizontal navigation layout

### Removed
- Option to move boards left and right when using the horizontal navigation layout setting (this can now be done through the &#x27;Edit navigation&#x27; option

### Fixed
- Board templates overflowing when there are 6 or more to choose from.
- Vertical navigation menu closing when dismissing nested dialogs
- Board navigation hover animation triggering on initial load

## 1.64.34 - January 11, 2024

### Fixed
- A bug where no board was displayed when using a non-existing board ID in the url
- A bug where the main personal board of a user gets a new ID upon each visit

## 1.64.33 - January 09, 2024

### Fixed
- An issue where it was possible to select a blank board on the primary personal board on first run

## 1.64.32 - December 22, 2023

### Fixed
- An issue where duplicate log messages were sent
- An issue where, after resetting ones profile, a board wouldn&#x27;t appear until a browser refresh was done

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
Initial release 🚀