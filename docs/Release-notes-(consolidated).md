## [Widget Board](./Widget Board.md) 1.64.57 - May 08, 2024

## [Widget Board](./Widget Board.md) 1.64.56 - May 08, 2024

### Added
- Short description field for urgent messages

### Changed
- Improved urgent message UI
- Increased width threshold where vertical navigation is hidden

### Fixed
- An issue where urgent messages did not appear when timezone UTC+00:00 was selected
- An issue where embedded Excel files were not rendered correctly
- An issue when importing a backup with the shared boards feature disabled

## [Widget Board](./Widget Board.md) 1.64.54 - May 07, 2024

## [Events](./Widgets/Events.md) 1.18.0 - May 06, 2024

### Added
- CSS override class to style the site button

### Changed
- Minor UI improvements

## [News](./Widgets/News.md) 1.36.0 - May 06, 2024

### Added
- CSS classes to style the site button and author label

### Changed
- Minor UI improvements

## [People Search](./Widgets/People Search.md) 1.16.0 - May 06, 2024

### Added
- Admin configurable account filters

### Changed
- UI improvements

### Fixed
- An issue where person cards were not interactable anymore

## [Apps](./Widgets/Apps.md) 1.41.0 - May 03, 2024

### Added
- CSS override class to control the app grid

### Changed
- Removed gray border around apps in the default Grid layout

### Fixed
- Default click behavior not working as expected

## [Apps](./Widgets/Apps.md) 1.40.0 - May 02, 2024

### Added
- New &#x27;list&#x27; layout option for apps
- Compact layout settings for a condensed list or grid
- CSS override classes for the new layouts
- CSS override class for the app description callout

### Changed
- Improved app dialog
- Improved app UI

## [Widget Board](./Widget Board.md) 1.64.53 - May 01, 2024

### Fixed
- An issue where the installation would fail when the &#x27;Everyone except external users&#x27; group is missing

## [Countdown](./Widgets/Countdown.md) 1.7.0 - April 26, 2024

### Changed
- Improved UI for countdown dialog

## [Events](./Widgets/Events.md) 1.17.0 - April 26, 2024

### Added
- An overview dialog to view all events in a list, accessible via the Show All button

### Changed
- Improved UI for dialogs and event items

## [News](./Widgets/News.md) 1.35.0 - April 26, 2024

### Changed
- Improved UI for dialogs and news items

## [Widget Board](./Widget Board.md) 1.64.52 - April 26, 2024

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

## [Banner](./Widgets/Banner.md) 1.8.0 - April 25, 2024

### Added
- Layout options for Tiles and Cards

### Changed
- Optimized loading of banner images
- Banners now support 2-line titles.

## [Marketplace](./Widgets/Marketplace.md) 1.0.0 - April 25, 2024

Initial release 🚀

## [Widget Board](./Widget Board.md) 1.64.49 - April 24, 2024

### Changed
- Minor update in generated SharePoint package file

## [Widget Board](./Widget Board.md) 1.64.48 - April 17, 2024

### Fixed
- Removed logs to the developer console

## [Events](./Widgets/Events.md) 1.16.0 - April 16, 2024

### Fixed
- Removed log to the developer console

## [Widget Board](./Widget Board.md) 1.64.47 - April 11, 2024

### Fixed
- An issue where navigating from a page with Ichicraft Boards to another (web part) page caused the scrollbar to disappear
- An issue where navigating from one installation of Ichicraft Boards to another installation in the same tenant sometimes caused the wrong information to appear

## [News](./Widgets/News.md) 1.34.0 - April 05, 2024

### Added
- A Show More button in the header, giving access to an archive of news articles

## [News](./Widgets/News.md) 1.33.0 - April 05, 2024

### Added
- Automatically including news articles from all sites that are associated to a SharePoint hub site
- Filtering news articles on certain managed properties, both globally across the entire widget, or specifically for news coming from certain sites
- Possibility to render a &quot;Show all&quot; link in the widget header
- Showing more details of a news article like the author and a snippet of the article

### Changed
- Rendering of the Side-by-side view is updated, with the option to render one item as a &#x27;top story&#x27;

## [Events](./Widgets/Events.md) 1.15.0 - April 05, 2024

### Added
- The site title is now displayed together with the event details

## [Widget Board](./Widget Board.md) 1.64.46 - April 04, 2024

### Fixed
- An issue where the product didn&#x27;t always render correctly in full-height

## [Power BI](./Widgets/Power BI.md) 1.53.0 - April 02, 2024

### Added
- Button to save persistent filters / bookmarks manually from a dialog or popout window
- Button to move content between groups without dragging

### Changed
- Improved UX design for User Configuration and Admin Configuration
- Grouping functionality is no longer dependent on layout setting
- Persistent filters are saved automatically when opening a popout window

## [Power BI](./Widgets/Power BI.md) 1.52.0 - March 28, 2024

## [News](./Widgets/News.md) 1.32.0 - March 27, 2024

### Changed
- Upgraded Fluent UI 8 dependency to match version used by Boards Core

### Fixed
- An issue where failing to store news articles in browser cache causes the widget to render an error

## [Inform and Onboard](./Widgets/Inform and Onboard.md) 1.9.0 - March 27, 2024

### Fixed
- An issue where, after restoring a backup of Ichicraft Boards in a site with a different default language than the source site, an error occurs in the widget when editing existing content of which titles were not already available in the new language

## [Widget Board](./Widget Board.md) 1.64.44 - March 27, 2024

### Added
- Widgets can now render a textual link in the widget header (command bar)

### Fixed
- An issue where the publication date of urgent messages wasn&#x27;t correctly exported in the back-up process

## [Events](./Widgets/Events.md) 1.14.0 - March 27, 2024

### Changed
- Completely revamped the widget to work more like the News widget
- Improved UI

## [Inform and Onboard](./Widgets/Inform and Onboard.md) 1.8.0 - March 26, 2024

### Fixed
- An issue where storing items that don&#x27;t have a publication date (and don&#x27;t require one) caused an error when trying to save

## [Apps](./Widgets/Apps.md) 1.39.0 - March 26, 2024

### Fixed
- An issue where in some cases, a faulty &#x27;0&#x27; was rendered at different places in the UI

## [Power BI](./Widgets/Power BI.md) 1.51.0 - March 26, 2024

### Fixed
- An issue where failing to store data in browser cache caused the widget to render an error

## [Apps](./Widgets/Apps.md) 1.38.0 - March 26, 2024

### Fixed
- An issue where failing to store apps in browser cache causes the widget to render an error

## [Inform and Onboard](./Widgets/Inform and Onboard.md) 1.7.0 - March 22, 2024

### Changed
- Upgraded Fluent UI 8 dependency to match version used by Boards Core

## [Tableau Reports](./Widgets/Tableau Reports.md) 1.8.0 - March 22, 2024

### Changed
- Upgraded Fluent UI 8 dependency to match version used by Boards Core.

## [Saved for Later](./Widgets/Saved for Later.md) 1.8.0 - March 22, 2024

### Changed
- Upgraded Fluent UI 8 dependency to match version used by Boards Core.

## [Embed](./Widgets/Embed.md) 1.8.0 - March 22, 2024

### Changed
- Upgraded Fluent UI 8 dependency to match version used by Boards Core.

## [Followed Sites](./Widgets/Followed Sites.md) 1.9.0 - March 22, 2024

### Changed
- Upgraded Fluent UI 8 dependency to match version used by Boards Core.

## [Sticky Notes](./Widgets/Sticky Notes.md) 1.7.0 - March 22, 2024

### Changed
- Upgraded Fluent UI 8 dependency to match version used by Boards Core.

## [Bookmarks](./Widgets/Bookmarks.md) 1.10.0 - March 22, 2024

### Changed
- Upgraded Fluent UI 8 dependency to match version used by Boards Core.

## [People Search](./Widgets/People Search.md) 1.15.0 - March 22, 2024

### Changed
- Upgraded Fluent UI 8 dependency to match version used by Boards Core.

## [World Clock](./Widgets/World Clock.md) 1.5.0 - March 21, 2024

### Changed
- Upgraded Fluent UI 8 dependency to match version used by Boards Core.

## [Birthdays](./Widgets/Birthdays.md) 1.12.0 - March 21, 2024

### Changed
- Upgraded Fluent UI 8 dependency to match version used by Boards Core.

## [Files](./Widgets/Files.md) 1.13.0 - March 21, 2024

### Changed
- Upgraded Fluent UI 8 dependency to match version used by Boards Core
- Small UI fixes

## [Apps](./Widgets/Apps.md) 1.37.0 - March 21, 2024

### Changed
- Upgraded Fluent UI 8 dependency to match version used by Boards Core.

## [External Feeds](./Widgets/External Feeds.md) 1.19.0 - March 21, 2024

### Changed
- Upgraded Fluent UI 8 dependency to match version used by Boards Core.

## [Countdown](./Widgets/Countdown.md) 1.6.0 - March 21, 2024

### Changed
- Upgraded Fluent UI 8 dependency to match version used by Boards Core.

## [Teams](./Widgets/Teams.md) 1.6.0 - March 21, 2024

### Changed
- Upgraded Fluent UI 8 dependency to match version used by Boards Core.

## [Upcoming Meetings](./Widgets/Upcoming Meetings.md) 1.12.0 - March 21, 2024

### Changed
- Upgraded Fluent UI 8 dependency to match version used by Boards Core.

## [Tasks](./Widgets/Tasks.md) 1.9.0 - March 21, 2024

### Changed
- Upgraded Fluent UI 8 dependency to match version used by Boards Core.

## [Inbox](./Widgets/Inbox.md) 1.16.0 - March 21, 2024

### Fixed
- An issue where an e-mail without a sender caused the widget to fail rendering correctly

## [Banner](./Widgets/Banner.md) 1.7.0 - March 21, 2024



### Fixed
- An issue with UX layers that was introduced when upgrading to a new version of Fluent UI

## [Widget Board](./Widget Board.md) 1.64.43 - March 20, 2024

### Fixed
- An issue where changes to large configurations couldn&#x27;t be stored as draft
- An issue where urgent messages couldn&#x27;t be published at a predefined time

## [Widget Board](./Widget Board.md) 1.64.42 - March 18, 2024

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

## [Countdown](./Widgets/Countdown.md) 1.5.0 - March 04, 2024

### Added
- Admin configurable countdowns
- Toggle to control user configurable countdown
- Autoplay settings (in case of multiple countdowns)
- Font size options for title and subtitle
- Image picker for background image

### Changed
- Renamed description to subtitle

## [People Search](./Widgets/People Search.md) 1.14.0 - February 29, 2024

### Changed
- Handling of missing M365 license is improved with a clearer message to the user

## [Apps](./Widgets/Apps.md) 1.36.0 - February 29, 2024

### Added
- A CSS class &#x60;icb-App-Launcher-Group-Title&#x60; that can be used to override the styles of an app group title

## [Sticky Notes](./Widgets/Sticky Notes.md) 1.6.0 - February 29, 2024

### Changed
- Handling of missing M365 license is improved with a clearer message to the user

## [Inbox](./Widgets/Inbox.md) 1.15.0 - February 29, 2024

### Changed
- Handling of missing M365 license is improved with a clearer message to the user

## [Upcoming Meetings](./Widgets/Upcoming Meetings.md) 1.11.0 - February 29, 2024

### Changed
- Handling of missing M365 license is improved with a clearer message to the user

## [Widget Board](./Widget Board.md) 1.64.41 - February 20, 2024

### Fixed
- A bug where uploading a custom widget in some scenarios results in a fatal error
- Some incorrect translations

### Changed
- Made improvements to storing user configuration

## [Inform and Onboard](./Widgets/Inform and Onboard.md) 1.6.0 - February 14, 2024

### Fixed
- A bug where, after installing with the Complete or Essential configuration or after importing a previously created back-up, issues could occur when adding new items

## [Apps](./Widgets/Apps.md) 1.35.0 - February 14, 2024

### Fixed
- A bug where, after installing with the Complete or Essential configuration or after importing a previously created back-up, issues could occur when adding new Apps

## [Widget Board](./Widget Board.md) 1.64.40 - February 08, 2024

### Added
- The ability to change the default language of an installation of Ichicraft Boards

### Changed
- Improved many translations across different languages

### Fixed
- An issue where declared analytics preferences in custom widget manifests were discarded upon  uploading the manifest file
- An issue where the wrong language was used in the application and some widgets failed rendering in scenarios where the user uses a language not available as an Ichicraft Boards system language (like Polish)
- An issue where the wrong keys where used when storing settings in local storage cache

## [Events](./Widgets/Events.md) 1.13.0 - February 08, 2024

### Changed
- Improved translations (FR)

## [Banner](./Widgets/Banner.md) 1.5.0 - February 08, 2024

### Changed
- Improved translations (FR)

## [Birthdays](./Widgets/Birthdays.md) 1.11.0 - February 08, 2024

### Changed
- Improved translations (FR)

## [World Clock](./Widgets/World Clock.md) 1.4.0 - February 08, 2024

### Changed
- Improved translations (FR)

## [Countdown](./Widgets/Countdown.md) 1.4.0 - February 08, 2024

### Changed
- Improved translations (FR)

## [Embed](./Widgets/Embed.md) 1.7.0 - February 08, 2024

### Changed
- Improved translations (FR)

## [Inbox](./Widgets/Inbox.md) 1.14.0 - February 08, 2024

### Changed
- Improved translations (FR)

## [Inform and Onboard](./Widgets/Inform and Onboard.md) 1.5.0 - February 08, 2024

### Changed
- Improved translations (FR)

## [News](./Widgets/News.md) 1.31.0 - February 08, 2024

### Changed
- Improved translations (FR)

## [People Search](./Widgets/People Search.md) 1.13.0 - February 08, 2024

### Changed
- Improved translations (FR)

## [Bookmarks](./Widgets/Bookmarks.md) 1.9.0 - February 08, 2024

### Changed
- Improved translations (FR)

## [External Feeds](./Widgets/External Feeds.md) 1.18.0 - February 08, 2024

### Changed
- Improved translations (FR)

## [Saved for Later](./Widgets/Saved for Later.md) 1.7.0 - February 08, 2024

### Changed
- Improved translations

## [Sticky Notes](./Widgets/Sticky Notes.md) 1.5.0 - February 08, 2024

### Changed
- Improved translations (FR)

## [Tableau Reports](./Widgets/Tableau Reports.md) 1.7.0 - February 08, 2024

### Changed
- Improved translations (FR)

## [Teams](./Widgets/Teams.md) 1.5.0 - February 08, 2024

### Changed
- Improved translations (FR)

## [Upcoming Meetings](./Widgets/Upcoming Meetings.md) 1.10.0 - February 08, 2024

### Changed
- Improved translations (FR)

## [Files](./Widgets/Files.md) 1.12.0 - February 08, 2024

### Fixed
- A bug where a user, trying load a Team or Site files tab without having proper permissions, got a generic error message without explaining what was wrong

### Changed
- Improved translations (FR)

## [Apps](./Widgets/Apps.md) 1.34.0 - February 08, 2024

### Changed
- Improved translations (FR)

## [Power BI](./Widgets/Power BI.md) 1.50.0 - February 08, 2024

### Changed
- Improved translations (FR)

## [Widget Board](./Widget Board.md) 1.64.39 - February 01, 2024

### Fixed
- An issue where the current board resets when switching tabs in the file picker

## [Apps](./Widgets/Apps.md) 1.33.0 - January 30, 2024

### Changed
- Implemented logic to retry adding/updating app items in case of a certain server error (&#x60;0x80131904&#x60;)

## [Apps](./Widgets/Apps.md) 1.32.0 - January 29, 2024

### Fixed
- An issue where a user could not add new apps to the app catalog

### Changed
- Improved app grid styling and layout

## [Power BI](./Widgets/Power BI.md) 1.49.0 - January 25, 2024

### Fixed
- Horizontal and Vertical page navigation options not working in pop-out
- Pop-out window title resetting when opening filter menu

## [Widget Board](./Widget Board.md) 1.64.38 - January 24, 2024

### Fixed
- A bug where urgent messages couldn&#x27;t be managed if Shared Boards feature wasn&#x27;t activated

## [Widget Board](./Widget Board.md) 1.64.37 - January 24, 2024

### Added
- An alternative way to move boards to a different group using a new Move option in their contextual menu

### Changed
- Urgent messages can now be targeted to multiple shared boards
- Urgent messages now display the publication date

## [Power BI](./Widgets/Power BI.md) 1.48.0 - January 24, 2024

### Added
- A new &#x27;Open in new window&#x27; functionality for PBI content dialogs (not available in MS Teams client)

### Fixed
- Source dropdown icons not applying theme color

## [Widget Board](./Widget Board.md) 1.64.35 - January 16, 2024

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

## [Widget Board](./Widget Board.md) 1.64.34 - January 11, 2024

### Fixed
- A bug where no board was displayed when using a non-existing board ID in the url
- A bug where the main personal board of a user gets a new ID upon each visit

## [News](./Widgets/News.md) 1.30.0 - January 09, 2024

### Fixed
- An issue where an embedded new article would disappear when scrolling
- Potential vulnerable dependencies in package.json

## [Widget Board](./Widget Board.md) 1.64.33 - January 09, 2024

### Fixed
- An issue where it was possible to select a blank board on the primary personal board on first run

## [Tasks](./Widgets/Tasks.md) 1.8.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## [Upcoming Meetings](./Widgets/Upcoming Meetings.md) 1.9.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## [Teams](./Widgets/Teams.md) 1.4.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## [Countdown](./Widgets/Countdown.md) 1.3.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## [External Feeds](./Widgets/External Feeds.md) 1.17.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## [Apps](./Widgets/Apps.md) 1.31.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## [Files](./Widgets/Files.md) 1.11.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## [Birthdays](./Widgets/Birthdays.md) 1.10.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## [News](./Widgets/News.md) 1.29.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## [World Clock](./Widgets/World Clock.md) 1.3.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## [People Search](./Widgets/People Search.md) 1.12.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## [Banner](./Widgets/Banner.md) 1.4.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## [Power BI](./Widgets/Power BI.md) 1.47.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## [Bookmarks](./Widgets/Bookmarks.md) 1.8.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## [Tableau Reports](./Widgets/Tableau Reports.md) 1.6.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## [Sticky Notes](./Widgets/Sticky Notes.md) 1.4.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## [Events](./Widgets/Events.md) 1.12.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## [Followed Sites](./Widgets/Followed Sites.md) 1.8.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## [Inform and Onboard](./Widgets/Inform and Onboard.md) 1.4.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## [Saved for Later](./Widgets/Saved for Later.md) 1.6.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## [Embed](./Widgets/Embed.md) 1.6.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## [Widget Board](./Widget Board.md) 1.64.32 - December 22, 2023

### Fixed
- An issue where duplicate log messages were sent
- An issue where, after resetting ones profile, a board wouldn&#x27;t appear until a browser refresh was done

## [Inbox](./Widgets/Inbox.md) 1.13.0 - December 22, 2023



### Fixed
- An issue where duplicate diagnostics were sent 

## [Widget Board](./Widget Board.md) 1.64.30 - December 19, 2023

### Fixed
- An issue where diagnostic logging sent duplicate messages

## [Widget Board](./Widget Board.md) 1.64.29 - December 19, 2023

### Added
- The ability to share links to shared boards with colleagues

### Changed
- The Teams package generator to include more options and allow versioning

### Fixed
- Various issues to smoothen the installation process

## [Saved for Later](./Widgets/Saved for Later.md) 1.5.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic


## [Tableau Reports](./Widgets/Tableau Reports.md) 1.5.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic


## [Teams](./Widgets/Teams.md) 1.3.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic


## [People Search](./Widgets/People Search.md) 1.11.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic
- Upgrade to Graph Toolkit V3

## [Birthdays](./Widgets/Birthdays.md) 1.9.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic
- Upgrade to Graph Toolkit V3

## [Upcoming Meetings](./Widgets/Upcoming Meetings.md) 1.8.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic


## [Tasks](./Widgets/Tasks.md) 1.7.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic

### Fixed
- An issue where &quot;recently completed tasks&quot; showed all completed tasks, regardless of when they were completed

## [Sticky Notes](./Widgets/Sticky Notes.md) 1.3.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic


## [External Feeds](./Widgets/External Feeds.md) 1.16.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic


## [Power BI](./Widgets/Power BI.md) 1.46.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic


## [Bookmarks](./Widgets/Bookmarks.md) 1.7.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic


## [News](./Widgets/News.md) 1.28.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic


## [Inform and Onboard](./Widgets/Inform and Onboard.md) 1.3.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic


## [Followed Sites](./Widgets/Followed Sites.md) 1.7.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic


## [Files](./Widgets/Files.md) 1.10.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic


## [Events](./Widgets/Events.md) 1.11.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic


## [Embed](./Widgets/Embed.md) 1.5.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic


## [Countdown](./Widgets/Countdown.md) 1.2.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic


## [Banner](./Widgets/Banner.md) 1.3.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic


## [Apps](./Widgets/Apps.md) 1.30.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic

Fix language errors during installation

## [World Clock](./Widgets/World Clock.md) 1.2.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic


## [Inbox](./Widgets/Inbox.md) 1.11.0 - December 12, 2023

### Changed
- Internal refactoring of logging logic

## [Power BI](./Widgets/Power BI.md) 1.45.0 - December 11, 2023

### Added
- Support for the Power BI embed action bar

## [News](./Widgets/News.md) 1.27.0 - December 11, 2023

### Changed
- The widget now uses higher resolution images for news articles

## [Widget Board](./Widget Board.md) 1.64.28 - December 11, 2023

### Added
- A whole new installation experience, where default configurations can be picked to allow for a more complete first experience of Ichicraft Boards
- A new CSS class `icb-Board-RootInner` for overrides on one of the core elements of Boards

### Changed
- Removed the manual &quot;Full height&quot; setting and replaced this with smart detection of optimal rendering

### Fixed
- Several issues with the new Backup and Restore advanced features

## [Banner](./Widgets/Banner.md) 1.2.0 - November 30, 2023

### Changed
- Optimization of widget script bundle size

## [Power BI](./Widgets/Power BI.md) 1.44.0 - November 30, 2023

### Fixed
- An issue where switching source type to Dashboard caused an exception

### Changed
- Optimization of widget script bundle size

## [Upcoming Meetings](./Widgets/Upcoming Meetings.md) 1.7.0 - November 30, 2023

### Changed
- Optimization of widget script bundle size

## [Tasks](./Widgets/Tasks.md) 1.6.0 - November 30, 2023

### Changed
- Optimization of widget script bundle size

## [Sticky Notes](./Widgets/Sticky Notes.md) 1.2.0 - November 30, 2023

### Changed
- Optimization of widget script bundle size

## [External Feeds](./Widgets/External Feeds.md) 1.15.0 - November 30, 2023

### Changed
- Optimization of widget script bundle size

## [Bookmarks](./Widgets/Bookmarks.md) 1.6.0 - November 30, 2023

### Changed
- Optimization of widget script bundle size

## [News](./Widgets/News.md) 1.26.0 - November 30, 2023

### Changed
- Optimization of widget script bundle size

## [Inform and Onboard](./Widgets/Inform and Onboard.md) 1.2.0 - November 30, 2023

### Fixed
- An issue where the carousel didn&#x27;t always proceed to the right slide
- An issue where missing content translations could cause an error

### Changed
- Optimization of widget script bundle size

## [Inbox](./Widgets/Inbox.md) 1.10.0 - November 30, 2023

### Changed
- Optimization of widget script bundle size

## [Followed Sites](./Widgets/Followed Sites.md) 1.6.0 - November 30, 2023

### Changed
- Optimization of widget script bundle size

## [Files](./Widgets/Files.md) 1.9.0 - November 30, 2023

### Fixed
- A bug where using createdBy filter on Recent tab caused an error
- A bug where using either modifiedBy or createdBy filter, suggestions weren&#x27;t rendered correctly

### Changed
- Improved exception logging
- Optimization of widget script bundle size

## [Events](./Widgets/Events.md) 1.10.0 - November 30, 2023

### Changed
- Optimization of widget script bundle size

## [Embed](./Widgets/Embed.md) 1.4.0 - November 30, 2023

### Changed
- Optimization of widget script bundle size

## [Countdown](./Widgets/Countdown.md) 1.1.0 - November 30, 2023

### Changed
- Optimization of widget script bundle size

## [World Clock](./Widgets/World Clock.md) 1.1.0 - November 30, 2023

### Fixed
- A bug where the hour after midnight, time was rendered as 24:xx instead of 00:xx

### Changed
- Optimization of widget script bundle size

## [Birthdays](./Widgets/Birthdays.md) 1.8.0 - November 30, 2023

### Changed
- Optimization of widget script bundle size

## [Apps](./Widgets/Apps.md) 1.28.0 - November 30, 2023

### Changed
- Optimization of widget script bundle size

## [News](./Widgets/News.md) 1.25.0 - November 23, 2023

### Fixed
- Slow initial loading time
- Removed icon thumbnail image

## [Banner](./Widgets/Banner.md) 1.1.0 - November 23, 2023

### Fixed
- Slow initial loading time

## [Apps](./Widgets/Apps.md) 1.27.0 - November 23, 2023

### Added

- Support for 6 column layouts

## [Inform and Onboard](./Widgets/Inform and Onboard.md) 1.1.0 - November 22, 2023

###Added
- Support for import/export feature

## [Apps](./Widgets/Apps.md) 1.26.0 - November 22, 2023

### Changed
- Minor styling change in carousel component to allow for more controlled overrides

### Added
- Support for new Boards import/export feature

## [Widget Board](./Widget Board.md) 1.64.26 - November 22, 2023

### Added
- New functionality to fully backup (or restore) an installation of Ichicraft Boards

### Fixed
- An issue where the wrong fields were rendered in the Teams admin section
- An issue where the navigation showed a footer section under the wrong circumstances
- An issue where an error occurred if the manifest of a widget could not be loaded
- An issue where an error occurred if no translations were available in the manifest of a widget

### Changed
- Widgets can now have an icon as default thumbnail

## [Power BI](./Widgets/Power BI.md) 1.43.0 - November 15, 2023

### Fixed
- An issue with the user picker, used for audience targeting

### Changed
- Removed 15 minute cache delay

## [News](./Widgets/News.md) 1.24.0 - November 13, 2023

### Changed
- Implemented retrying fetching news articles on sporadic API errors

### Added
- Auto refreshing is now available, making sure items keep updating in the background when window is open for a longer period of time



## [Widget Board](./Widget Board.md) 1.64.25 - November 09, 2023

### Fixed
- An issue where in some cases the icon for resetting something wasn&#x27;t visible
- An issue where selecting a board template in some screen resolutions caused automatic deselecting, leaving a user unable to pick a template

## [News](./Widgets/News.md) 1.23.0 - November 08, 2023

### Fixed
- An issue where once boosted news articles were no longer visible in certain configurations

## [News](./Widgets/News.md) 1.22.0 - November 02, 2023

### Changed
- Sites now display the Site logo thumbnail instead of the Site logo
- News posts now use a different thumbnail url, resulting in higher resolution images in most cases

## [Widget Board](./Widget Board.md) 1.64.24 - October 25, 2023

### Fixed
- an issue where the People Picker didn&#x27;t always store data correctly

## [Widget Board](./Widget Board.md) 1.64.23 - October 24, 2023

### Added
- Several CSS classes to the navigation elements to override the show/hide toggle

## [World Clock](./Widgets/World Clock.md) 1.0.0 - October 12, 2023

Initial release 🚀

## [News](./Widgets/News.md) 1.21.0 - October 11, 2023

### Added
- News preview in admin config
- Option to change the overlay color and opacity

### Changed
- Improved UX of user picker fields
- Empty widget now shows thumbnail icon

## [Widget Board](./Widget Board.md) 1.64.22 - October 11, 2023

### Added
- Widget variants can now have an icon representation instead of just a thumbnail

### Changed
- Improved widget details panel

### Fixed
- A bug where custom theme colors didn&#x27;t work correctly
- A bug where in the Teams client, the navigation bar wasn&#x27;t scrollable when there are lots of menu items

## [Power BI](./Widgets/Power BI.md) 1.42.0 - October 05, 2023

### Fixed
- An issue where cached filters were not applied on load

## [Widget Board](./Widget Board.md) 1.64.20 - October 05, 2023

### Fixed
- An issue where creating urgent messages fails in certain scenarios

## [Inbox](./Widgets/Inbox.md) 1.9.0 - October 04, 2023

### Added
- Shared mailbox now supports adding an e-mail address if a user could not be found

### Changed
- Improved UI for user configuration panel

### Fixed
- An issue in Boards Lite where shared mailbox functionality could not be used



## [News](./Widgets/News.md) 1.20.0 - October 02, 2023

### Added
- Autoplay on slides
- Audience mechanism on selected sites
- Expanded push mechanism on selected sites
- Ability for users to manage their own sites

### Changed
- Improved news post rendering
- Improved overall UI and UX
- Improved site selection functionality
- Sites now display their own icon
- Simplified followed sites feature

## [Widget Board](./Widget Board.md) 1.64.19 - October 02, 2023

### Fixed
- Some smaller issues with the recently released urgent messages feature (wrong icon, missing sorting in drop-down list, unfiltered list of messages during onboarding, etc)
- A German translation that wasn&#x27;t correct

## [Power BI](./Widgets/Power BI.md) 1.41.0 - September 28, 2023

###Fixed
- An issue where the horizontal page navigation would not correctly apply the selected page

## [Banner](./Widgets/Banner.md) 1.0.0 - September 18, 2023

Initial release 🚀

## [Power BI](./Widgets/Power BI.md) 1.40.0 - September 15, 2023

### Fixed
- An issue where Power BI embeds are reloaded when resizing the browser window

## [Sticky Notes](./Widgets/Sticky Notes.md) 1.1.0 - September 13, 2023

### Fixed
- An issue where invalid nodes were appended to the Lexical root element

## [Sticky Notes](./Widgets/Sticky Notes.md) 1.0.0 - September 12, 2023

Initial release 🚀

## [Widget Board](./Widget Board.md) 1.64.18 - September 11, 2023

Minor system update

## [Birthdays](./Widgets/Birthdays.md) 1.7.0 - September 09, 2023

### Fixed
- An issue that occurs in a situation where users&#x27; login names aren&#x27;t identical to their primary e-mail addresses

## [Widget Board](./Widget Board.md) 1.64.17 - September 07, 2023

### Added

- A **new feature** that allows designated users to publish urgent messages to specific boards or to the entire organisation

## [News](./Widgets/News.md) 1.19.0 - September 01, 2023

### Changed
- Site titles in news items are now clickable and navigate to appropriate site

### Fixed
- An issue where searching for sites in the followed sites picker resulted in endless refreshes
- An issue where in a specific scenario, news items could show up twice in the widget

## [External Feeds](./Widgets/External Feeds.md) 1.14.0 - August 25, 2023

### Added
- Support for an extra field that could contain the image url: **media.group &gt; media:thumbnail**

## [Apps](./Widgets/Apps.md) 1.25.0 - August 24, 2023

### Fixed
- An issue where extended description callouts would always open on touchscreen devices
- An issue where touchscreen devices would always render the widget in compact mode
- An issue where no top padding was applied in the extended description dialog
- An issue in Boards Lite where the save/cancel buttons in the UserConfig panel were not clickable

## [Apps](./Widgets/Apps.md) 1.24.0 - August 24, 2023

### Fixed
- An issue where the new App launcher didn&#x27;t work in Boards Lite

## [Power BI](./Widgets/Power BI.md) 1.39.0 - August 24, 2023

### Fixed
- An issue where horizontal navigation pivots for list layouts would not update correctly

## [Apps](./Widgets/Apps.md) 1.23.0 - August 23, 2023

### Added
- Default value support for managed metadata fields

### Fixed
- Carousel visualization
- Backwards compatibility issues where it is assumed an app catalog already exists
- Missing translation key for contact details
- Localization issues when migrating to catalog system

### Changed
- Improved UX design for admin configuration
- Improved UX design for user configuration
- Different info icon in the app list when an extended description is available

## [News](./Widgets/News.md) 1.18.0 - August 22, 2023

### Fixed
- An issue with error handling for News article thumbnails
- Unnecessary use of the date-fns package

## [Widget Board](./Widget Board.md) 1.64.16 - August 22, 2023

### Fixed
- An issue with a newer version of the installation package failing to load the Boards web part correctly

## [Widget Board](./Widget Board.md) 1.64.15 - August 18, 2023

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


## [External Feeds](./Widgets/External Feeds.md) 1.13.0 - August 15, 2023

### Fixed
- An issue where the widget only shows one RSS feed at a time

## [External Feeds](./Widgets/External Feeds.md) 1.12.0 - August 15, 2023

### Added
- Support for an extra field that could contain the image url: **media:thumbnail**

### Changed
- Complete refactoring of solution to match new standards

## [Inform and Onboard](./Widgets/Inform and Onboard.md) 1.0.0 - August 15, 2023

### Changed
- New visualization for carousel

## [News](./Widgets/News.md) 1.17.0 - August 14, 2023

### Added
- Number of views per article
- A new &#x27;Open in new window&#x27; button from within a dialog
- An animation when hovering over an article

### Changed
- The number of articles placed on a grid row, offering more space for articles
- Small visual improvements

### Fixed
- A bug where sometimes the recent sites can&#x27;t be loaded in the Create News Post dialog

## [Widget Board](./Widget Board.md) 1.64.14 - August 11, 2023

### Added
- Option to quickly access a widget&#x27;s admin configuration from a widget on a board using the widget&#x27;s context menu
- Browser check to warn a user that changes in board configuration might get lost when board updates aren&#x27;t saved yet

### Changed
- Minor updates to styling of widget&#x27;s context menu
- Changed positioning of Configuration and Trial message bars

### Fixed
- An issue where the web part wouldn&#x27;t render correctly when the (SP) page is in edit mode

## [Power BI](./Widgets/Power BI.md) 1.38.0 - August 10, 2023

### Fixed
- An issue where the embed disappears when resizing window or going fullscreen
- An issue where slicers are not updated when using the clear button on the embed

### Changed
- Refactored the content dialog to reuse the same embed code as the carousel &amp; preview

## [Widget Board](./Widget Board.md) 1.64.13 - July 17, 2023

### Fixed
- An issue where the navigation panel sometimes closed automatically in Teams

## [Widget Board](./Widget Board.md) 1.64.12 - July 14, 2023

### Added
- The option to collapse the left navigation
- Some extra CSS override classes in the welcome message

### Changed
- Audience targeted widgets are no longer visible to visitors of a shared board who are not in the audience of that widget

### Fixed
- An issue where in some specific scenario, a non-owner of a shared board was able to update that board

## [External Feeds](./Widgets/External Feeds.md) 1.11.0 - July 14, 2023

### Added
- Support for an extra field that could contain the image url: **itunes:image**

### Changed
- Upgraded UI to use new carousel

## [Power BI](./Widgets/Power BI.md) 1.37.0 - July 13, 2023

###Added
- The ability to configure a subtitle for PBI content

## [News](./Widgets/News.md) 1.16.0 - July 11, 2023

### Added
- Support for SharePoint audience targeting
- Possibility to create new news articles straight from the widget header
- Support for the Repost Page content type (news from external sources)

### Changed
- Carrousel is updated to reflect new style

## [Apps](./Widgets/Apps.md) 1.20.0 - July 03, 2023

### Fixed
- An issue where AVD apps didn't open from within Teams client

## [Apps](./Widgets/Apps.md) 1.19.0 - June 29, 2023

### Fixed
- An issue where provisioning the app storage list failed due to limited permissions

## [Apps](./Widgets/Apps.md) 1.18.0 - June 28, 2023

### Fixed
- An issue where improper initialisation of the Apps list caused an error in some occasions

## [Apps](./Widgets/Apps.md) 1.17.0 - June 27, 2023

### Added
- A new experimental feature that enables integration with Azure Virtual Desktop applications and desktops
- The ability to reuse the same app across multiple widget variants

### Changed
- Storage of apps is now done in a designated SharePoint list instead of apps being part of the greater Ichicraft Boards configuration

## [Widget Board](./Widget Board.md) 1.64.11 - June 26, 2023

### Fixed
- An issue where in some scenarios the onboarding of new users was impossible due to a disabled &quot;Let&#x27;s get started&quot; button

## [Widget Board](./Widget Board.md) 1.64.10 - June 22, 2023

### Fixed
- An issue where failing to retrieve account creation date/time results in infinite loading board

## [Inform and Onboard](./Widgets/Inform and Onboard.md) 0.5.0 - June 21, 2023

### Fixed
- An issue where, in an onboarding scenario, the widget could be removed by a user after all items were marked as complete, even though (unread) items are scheduled to be visible in the future.

## [Upcoming Meetings](./Widgets/Upcoming Meetings.md) 1.6.0 - June 20, 2023

### Changed
- Update solution to stop using beta API from Microsoft where it&#x27;s no longer needed

## [Widget Board](./Widget Board.md) 1.64.9 - June 20, 2023

### Added
- Navigation policies (New Feature!) to specify the boards (personal + shared) that should be in a user&#x27;s navigation (only available if and when Shared Boards feature is active)

### Fixed &amp; Changed
- Many small fixes and improvements done with regards to UI (initial loading, switching back and forth between Ichicraft Boards and other SharePoint pages, the way that widgets appear and are

## [Power BI](./Widgets/Power BI.md) 1.36.0 - June 19, 2023

###Fixed
- An issue where report pages were synched incorrectly between the widget board and content dialog

## [Files](./Widgets/Files.md) 1.8.0 - June 13, 2023

### Added
- A new preview option for files

### Fixed
- An issue where the Recent tab failed when a user no longer has access to one ore more files or to the sites these files are stored in
- An issue where Loop files that reside in a new hidden storage location can&#x27;t programmatically be accessed properly, resulting in an error
- An issue where only 10 items were visible in the default Favorites t

## [Apps](./Widgets/Apps.md) 1.15.0 - June 12, 2023



### Added
- Added new button to widget header to quickly add new apps
- CSS override options for more visual control over Apps
- Personalized URLs by using the tokens [User.Email] or [User.UPN]

### Changed
- Improved user experience in the User Configuration for adding/removing apps
- Improved Layout option behaviour
- Improved carousel design

## [Power BI](./Widgets/Power BI.md) 1.35.0 - May 26, 2023

###Fixed
- An issue where cached filters were not applied on first render of PBI content
- An issue where visuals of a hidden page were not selectable from the PBI content Add/Edit dialog
- An issue where the content preview would crash when changing content source
- An issue where the PBI content Add/Edit dialog would crash when selecting a dashboard tile

###Changed
- Removed the Clear functiona

## [Widget Board](./Widget Board.md) 1.64.7 - May 24, 2023

### Fixed
- An issue where the people picker didn&#x27;t work correctly all the time
- An issue where the newly generated sppkg package included too many assets
- An issue where the newly generated sppkg package introduced an issue with conflicting React versions

## [Widget Board](./Widget Board.md) 1.64.6 - May 17, 2023

### Changed
- (non-functional) Upgraded underlying SPFx version to 1.17.2

### Changed
- Support for different language codes included that come from Teams
- Some updates under the hood to support other shapes of etags

## [Power BI](./Widgets/Power BI.md) 1.34.0 - May 16, 2023

### Fixed
- An issue where rendering a single visual in a widget and using a full report as zoom content results in an error when using the zoom function

## [Power BI](./Widgets/Power BI.md) 1.33.0 - May 16, 2023

### Fixed
- An issue where users applying changes to slicers on one shared board, see the same changes applied on other shared boards that use the same report.

## [Power BI](./Widgets/Power BI.md) 1.32.0 - May 16, 2023

### Fixed
- An issue where working with the new slicers feature could cause an error in the configuration panel

## [Power BI](./Widgets/Power BI.md) 1.31.0 - May 15, 2023

### Added
- Support for slicer override and manipulation 

## [External Feeds](./Widgets/External Feeds.md) 1.10.0 - May 01, 2023

### Added
- An icon depicting that a link is taking a user outside the current web page or client

## [Embed](./Widgets/Embed.md) 1.3.0 - April 20, 2023

### Added
- Dynamic theme support for embeds

## [Inform and Onboard](./Widgets/Inform and Onboard.md) 0.4.0 - April 18, 2023

###Fixed
- An issue where items and categories could not be updated unless they used the age range feature

## [Power BI](./Widgets/Power BI.md) 1.30.0 - April 18, 2023

### Fixed
- an issue where live filters weren&#x27;t working for multiple columns at once

## [Embed](./Widgets/Embed.md) 1.2.0 - April 14, 2023



## [Widget Board](./Widget Board.md) 1.64.4 - April 14, 2023

### Fixed
- an issue where the file picker sometimes falls behind another dialog

## [Inform and Onboard](./Widgets/Inform and Onboard.md) 0.3.0 - April 13, 2023

### Added
- Podcasts item type
- Min and Max account age range filter
- FilePicker functionality to generate an embed code

### Changed
- Visual revamp (in line with News widget)
- Renamed  &#x27;Mark as read&#x27; functionality to &#x27;Mark as completed&#x27;

## [Files](./Widgets/Files.md) 1.7.0 - April 13, 2023

### Fixed
- an issue where the file size of the widget bundle file was very large due to invalid sharing of external libraries

## [Widget Board](./Widget Board.md) 1.64.3 - April 12, 2023

### Fixed
- An issue where API permissions could no longer be requested from admin panel
- An issue with loading (very) old configurations

## [Power BI](./Widgets/Power BI.md) 1.29.0 - April 06, 2023

### Added
- Live filters within the same table
- Apply formatting to filter values (specifically DateTime strings)
- Tooltip when hovering over filter values &amp; people picker values

### Changed
- Remove page- and visual level filters from available filters list

### Fixed
- Displayname fix
- Fix number &amp; boolean filters not working
- Fix performance on large collection of filter values (e.g. date filter)
- Fix horizontal page navigation cutting off part of the embed
- Fix available filters when selecting a Visual
- Fix report filters not resetting when enabling custom filters

## [Widget Board](./Widget Board.md) 1.64.2 - April 06, 2023

### Fixed
- An issue with missing resource files

## [Widget Board](./Widget Board.md) 1.64.1 - April 06, 2023

### Added
- The option to onboard new users without showing a welcome message if no interaction is required
- Functionality to the File Picker control so it can be used by widgets properly
- The option for a user to completely reset a his/her profile (by using SHIFT key when board settings menu is open)

### Fixed
- An issue where no primary personal board was provisioned when the Personal Boards 

## [Power BI](./Widgets/Power BI.md) 1.28.0 - March 27, 2023

### Changed
- Minor system update to prevent flooding logs with failed access token retrieval


## [Power BI](./Widgets/Power BI.md) 1.27.0 - March 24, 2023

### Fixed
- An issue where changes in default filters from an admin perspective weren&#x27;t visible to the user due to caching issues

## [Power BI](./Widgets/Power BI.md) 1.26.0 - March 23, 2023

Fix local storage reset when editing admin config.




## [Power BI](./Widgets/Power BI.md) 1.25.0 - March 21, 2023

### Fixed
- Various small bugs introduced in last release

## [Power BI](./Widgets/Power BI.md) 1.24.0 - March 20, 2023

### Changed
- Some minor feature improvements and fixes for bugs introduced in previous release

## [Widget Board](./Widget Board.md) 1.64.0 - March 17, 2023

### Added
- The ability to show multiple custom command bar buttons per widget

## [Power BI](./Widgets/Power BI.md) 1.23.0 - March 17, 2023

### Added
- The ability to group PBI-content in the list view
- The ability to apply filters on PBI-content directly in the widget
- Improvements to the add/edit PBI-content dialog

## [Saved for Later](./Widgets/Saved for Later.md) 1.4.0 - March 13, 2023

### Fixed
- A breaking issue where saved items could no longer be loaded, caused by an updated service endpoint @ Microsoft

## [External Feeds](./Widgets/External Feeds.md) 1.9.0 - March 07, 2023

### Added
- The ability to detecting feed item images by looking for image urls in the description, allowing for more feeds to display images

## [Power BI](./Widgets/Power BI.md) 1.22.0 - February 17, 2023

### Fixed
- An issue with page visibility in horizontal navigation

## [Power BI](./Widgets/Power BI.md) 1.21.0 - February 15, 2023

### Added
- The ability to select individual report _visuals_ to render
- The ability to _clone_ PBI content for quicker creation of content
- PBI content _previews_ as part of the content management
- Content viewed and clicked _events_ to feed the Ichicraft Boards analytics feature

## [Widget Board](./Widget Board.md) 1.63.0 - February 15, 2023

### Added
- The ability to log additional user data as part of the Analytics feature
- More events related to recently added features to the Analytics feature

## [Widget Board](./Widget Board.md) 1.62.0 - January 27, 2023

### Fixed
- An issue where in some cases a pushed widget could not be resized when configuration dictates it should be able to do so
- An issue where in some cases a move lock appeared even though a pushed widget was allowed to be moved

## [Widget Board](./Widget Board.md) 1.61.0 - January 18, 2023

### Fixed
- An issue where the file picker navigation failes sometimes

### Fixed
- An issue where some configurations didn&#x27;t load correctly after previous release
- An issue where the file picker didn&#x27;t work correctly after previous release

## [Widget Board](./Widget Board.md) 1.59.0 - January 17, 2023

### Added
- You can now configure a custom theme to be used by Ichicraft Boards (includes dark mode!)

## [Widget Board](./Widget Board.md) 1.58.0 - December 20, 2022

### Changed
- Url to Ichicraft announcements updated to ichicraft.com domain

## [Widget Board](./Widget Board.md) 1.57.0 - December 19, 2022

### Added
- Ichicraft Boards announcements are now visible from within the product

### Fixed
- A small visual issue where some icons weren&#x27;t visible in dark mode

## [Apps](./Widgets/Apps.md) 1.13.0 - December 19, 2022

### Added
- Support for users and shared board owners to create their own apps

## [Countdown](./Widgets/Countdown.md) 0.1.0 - December 19, 2022

Initial release 🚀

## [Birthdays](./Widgets/Birthdays.md) 1.6.0 - December 19, 2022

### Fixed
- An issue where in some cases a user couldn&#x27;t update his/her birthday

## [Inbox](./Widgets/Inbox.md) 1.8.0 - December 19, 2022

### Added
- Ability for adminstrator to set default inbox type (Personal/Shared)
- Better support for Inbox widget in Shared Board context

### Fixed
- An issue where opening a Shared inbox from widget header didn&#x27;t work at all

## [Files](./Widgets/Files.md) 1.6.0 - December 19, 2022

### Added
- Fully customizable tabs
- Advanced filter capabilities
- Showing files not only from OneDrive but also from Teams &amp; SharePoint
- Different ways to open a file directly from the widget
- Flexible display options like column selection, (default) sorting, flat/hierarchy view, etc
- Sharing capabilities

### Changed
- Renamed: &quot;OneDrive Widget&quot; is now &quot;Files Widget&quot;

## [Tasks](./Widgets/Tasks.md) 1.5.0 - December 16, 2022

### Changed
- The default setting is now that users can update configuration of this widget

## [Events](./Widgets/Events.md) 1.9.0 - December 15, 2022

### Changed
- Allow Shared Board owners to specify the sites that serve as news source for the widget

## [News](./Widgets/News.md) 1.15.0 - December 15, 2022

### Changed
- Allow Shared Board owners to specify the sites that serve as news source for the widget


## [Widget Board](./Widget Board.md) 1.56.0 - December 15, 2022

### Changed
- Under-the-hood update where info about board type and user role is provided to widgets

## [Tasks](./Widgets/Tasks.md) 1.4.0 - December 14, 2022

### Added
- Support for lists in To Do (show list info, choose lists to show, add items to list)
- Choose which plans to show in Planner pane
- Filter capabilities on both Planner &amp; To Do tasks
- Option to show either To Do or Planner (not both per se)

### Changed
- Visual improvements

## [Power BI](./Widgets/Power BI.md) 1.20.0 - December 08, 2022

### Changed
- Loading page navigation on &#x27;loaded&#x27; instead of &#x27;rendered&#x27;

## [Birthdays](./Widgets/Birthdays.md) 1.5.0 - December 07, 2022

### Added
- Flyout cards with personal information of a user
- Ability to directly congratulate someone having a birthday using Teams chat or e-mail
- Ability to update your own birthday
- Better support for small factor widget (horizontal rendering)

### Changed
- Completely refactored widget code
- Updated visual elements in widget with more focus for birthday user

## [Apps](./Widgets/Apps.md) 1.12.0 - November 30, 2022

### Fixed
- An issue where in some cases the app tiles continuously triggered redraws of hidden div elements (LineEllipsis)

## [Widget Board](./Widget Board.md) 1.55.0 - November 25, 2022

### Changed
- Removed last jsdelivr CDN pointers
- Removed redundant log messages

## [Apps](./Widgets/Apps.md) 1.11.0 - November 24, 2022

### Fixed
- An issue where a dialog doesn&#x27;t render nicely on mobile devices
- An issue where not in all cases an event is raised on app-click

### Changed
- There is now a 32 character limit on app titles
- If title doesn&#x27;t fit on two lines, we now show ellipsis (...) to make this clear

## [Widget Board](./Widget Board.md) 1.54.0 - November 23, 2022

### Added
- Board templates can now also be defined for shared boards
- Specify if widgets (variants) are available for either personal boards, shared boards, or both

## [News](./Widgets/News.md) 1.14.0 - November 11, 2022

### Changed
- Greatly improved the loading speed of the widget

## [Widget Board](./Widget Board.md) 1.53.0 - November 09, 2022

### Added
- Option to push a Shared Board to (groups of) users

## [Widget Board](./Widget Board.md) 1.52.0 - November 01, 2022

### Added
- It&#x27;s now possible for a user to change the order of boards in the left navigation

## [Widget Board](./Widget Board.md) 1.51.0 - November 01, 2022

### Fixed
- An issue where renaming or deleting a widget on a shared board caused an error in some cases

## [Widget Board](./Widget Board.md) 1.50.0 - October 31, 2022

### Added
- Introducing the first version of Ichicraft Board&#x27;s newest feature: Shared Boards!

## [Events](./Widgets/Events.md) 1.8.0 - September 27, 2022

### Fixed
- An issue where sorting wasn&#x27;t correct
- An issue where long event titles weren&#x27;t cropped correctly

### Changed
- Now loading events for 6 months ahead instead of 2

## [Widget Board](./Widget Board.md) 1.49.0 - September 26, 2022

### Fixed
- An issue where pushed widgets were re-pushed after a user suffered from a connection error

### Fixed
- An issue where the (advanced) export / import feature fails in certain circumstances

## [Power BI](./Widgets/Power BI.md) 1.19.0 - September 21, 2022

### Fixed
- An issue where all of a sudden the report page picker didn&#x27;t work due to an update in the underlying Power BI REST API

## [Widget Board](./Widget Board.md) 1.47.0 - September 20, 2022

### Fixed
- An issue where the wrong current language was passed to a widget if that language wasn&#x27;t configured as a content language
- An issue where the confirmation dialog didn&#x27;t close after deleting a content language
- An issue where the API Permissions tab showed all variants of a widget type where only one would suffice to give the proper permissions

## [Widget Board](./Widget Board.md) 1.46.0 - September 20, 2022

### Changed
- Big under-the-hood update to prepare for separate licenses for product features including the upcoming feature &quot;Shared Boards&quot;

## [Events](./Widgets/Events.md) 1.7.0 - September 16, 2022

### Added
- The same &quot;follow sites logic&quot; as in the News widget is now available in the Events widget too!

### Fixed
- An issue where following the root site collection returns events from all other site collections

## [Widget Board](./Widget Board.md) 1.45.0 - September 08, 2022

### Fixed
- An issue where the background color of the header bleeds out when the web part is placed in a non full-width section

## [Apps](./Widgets/Apps.md) 1.10.0 - September 05, 2022

### Added
- [#234] An even better way to manage apps with a redesigned layout picker
- A new setting to configure the click behavior of an app item

## [Widget Board](./Widget Board.md) 1.44.0 - September 05, 2022

### Added
- [#234] Some extra options to open urls in a dialog (used by widgets)

## [News](./Widgets/News.md) 1.13.0 - September 02, 2022

### Added
- [#239] Support for boosted news articles
- Optional click event tracking for Boards Analytics feature

## [Widget Board](./Widget Board.md) 1.43.0 - August 26, 2022

### Fixed
- An error where the new category management feature causes an issue in some cases

## [Widget Board](./Widget Board.md) 1.42.0 - August 26, 2022

### Fixed
- An issue where the widget library throws an error

## [Power BI](./Widgets/Power BI.md) 1.18.0 - August 25, 2022

### Added
- Option to open a Power BI visual in full screen

## [Widget Board](./Widget Board.md) 1.41.0 - August 25, 2022

### Added
- [#220] Improved ways to organize widgets using category sets and hierarchies
- [#219-1] When adding a widget it&#x27;s now visible which widgets are already on your board
- [#219-2] Adding multiple widgets is now easier for the end user
- [#219-3] Browsing the widget library is easier for users with new filter options

## [Apps](./Widgets/Apps.md) 1.9.0 - August 25, 2022

### Added
- Functionality to group/categorize apps
- Easy image picker/uploader for app icons
- Option to use a Fluent UI font icon instead of an image for app icons
- Option to use characters as an app icon
- Option to style the app with different foreground and background colors

## [Widget Board](./Widget Board.md) 1.40.0 - August 25, 2022

### Fixed
- An issue where selecting an image in the file picker (from within settings panel) didn&#x27;t work correctly when using the checkbox to select a file

### Changed
- Prepared the internal file picker component so it can be used by widgets too. There&#x27;s now a function `openFilePicker` as part of the `WidgetContext` that can be used from within widgets.

## [Followed Sites](./Widgets/Followed Sites.md) 1.5.0 - August 24, 2022

### Fixed
- A minor issue where an invalid label was rendered in case something went wrong in getting a user&#x27;s sites

## [Widget Board](./Widget Board.md) 1.39.0 - August 09, 2022

### Fixed
- [#232] An issue where fetching a user&#x27;s security groups could result in a fatal error in case local storage quota was exceeded

## [Power BI](./Widgets/Power BI.md) 1.17.0 - July 21, 2022

### Changed
- PBI content in hidden carrousel slides is no longer loaded in the background. Instead, it&#x27;s loaded upon navigating to the slide. This is to prevent unnecessary burdening of the browser.

## [Widget Board](./Widget Board.md) 1.38.0 - July 19, 2022

### Fixed
- [#192] An issue where in rare cases the first name of a user could not be retrieved correctly and a weird message [object Object] is displayed instead

## [Widget Board](./Widget Board.md) 1.37.0 - July 18, 2022

### Added
- [#221] Ability to add subtitles to widgets, allowing for more distinguishable widget headers

## [People Search](./Widgets/People Search.md) 1.10.0 - July 14, 2022

### Changed
- Upgraded underlying Graph Toolkit version

## [Power BI](./Widgets/Power BI.md) 1.16.0 - July 12, 2022

### Fixed
- An issue where long words with no spaces could break the UI of list views of Power BI content

### Changed
- Behavior of zooming in on content is now consistent with the Tableau Reports widget. This means that to open the zoomed in report you now have to click either the title of the widget or the zoom button in the widget header. Clicking on the content (report) itself will no longer 

## [Tableau Reports](./Widgets/Tableau Reports.md) 1.4.0 - July 12, 2022

### Added
- Zoom behavior so you can open a full-screen view of Tableau content
- [#211] Additional layout to render a list of Tableau content instead of a carousel

### Changed
- Refactoring and updating to match Power BI widget visualization

## [Upcoming Meetings](./Widgets/Upcoming Meetings.md) 1.5.0 - July 06, 2022

### Changed
- Updated look &amp; feel to better match new styling of Ichicraft Boards

### Fixed
- An issue where the widget continued to try to refresh content indefinitely even if connection was lost or failed for a while

## [Inbox](./Widgets/Inbox.md) 1.7.0 - July 06, 2022

### Fixed
- An issue where the widget continued to try to refresh content indefinitely even if connection was lost or failed for a while

## [Widget Board](./Widget Board.md) 1.36.0 - July 06, 2022

### Fixed
- [#214] An issue where sometimes category filters were visible that had no selectable widgets in them
- An issue where widget&#x27;s production script was always loaded before a widget&#x27;s script running in debug mode

## [Widget Board](./Widget Board.md) 1.35.0 - June 28, 2022

### Added
- Time-based analytics feature allowing events to be raised and sent to third party analytics tools like Google Analytics, Segment, CrazyEgg and many more using the [Analytics](https://getanalytics.io/) library

### Fixed
- A bug where icon buttons don&#x27;t work consistently in Teams and Viva Connections

## [Inbox](./Widgets/Inbox.md) 1.6.0 - June 23, 2022

### Changed
- Changed the look &amp; feel to match the new styles of the widget board
- Improved exception logging
- Upgraded underlying Graph Client SDK
- Removed logic to get unread item count because we no longer support the old notification messages

## [Power BI](./Widgets/Power BI.md) 1.15.0 - June 22, 2022

### Changed
- Power BI content not visible in the carousel is now lazily loaded, giving priority to initially visible content

## [News](./Widgets/News.md) 1.12.0 - June 17, 2022

### Fixed
- An issue where (hub) site navigation was visible when viewing a news article in the lightbox
- An issue where filtering for items coming from the root site also included news articles from other sites
- An issue where adding sites to followed sites didn&#x27;t clear local cache of followed sites immediately

## [Apps](./Widgets/Apps.md) 1.8.0 - June 15, 2022

### Changed
- Removed unnessecary cache feature that caused confusion

## [Widget Board](./Widget Board.md) 1.34.0 - June 15, 2022

### Fixed
- An issue where 4-column layouts in SharePoint were no longer enforced correctly
- An issue where icon buttons in some occasions didn&#x27;t load in Teams

## [Apps](./Widgets/Apps.md) 1.7.0 - June 02, 2022

### Fixed
- An issue with the carousel buttons not rendering correctly

## [Apps](./Widgets/Apps.md) 1.6.0 - June 02, 2022

### Changed
- Improved user picker readability for long group names

## [Widget Board](./Widget Board.md) 1.33.0 - May 27, 2022

### Fixed
- An issue where the WidgetBoard_Assets library was no longer visible in the Admin panel
- An issue where the title of a widget could grow out of the bounds of the header
- An issue where users from China were no longer able to use widget due to a CDN being blocked
- Other minor improvements

## [Power BI](./Widgets/Power BI.md) 1.14.0 - May 24, 2022

### Changed
- Added automatic browser refresh when token retrieval fails
- Improved resizing of widgets and effect this has on responsive reports
- Used PBI bootstrap to speed up loading of PBI content
- Introduced a retry button for when the widget isn&#x27;t able to render somehow

## [Followed Sites](./Widgets/Followed Sites.md) 1.4.0 - May 17, 2022

### Fixed
- An issue where the widget would fail if updated Graph permissions weren&#x27;t set yet

## [Followed Sites](./Widgets/Followed Sites.md) 1.3.0 - May 17, 2022

### Changed
- Introduced a refresh button to load fresh list of followed sites
- Included a clean-up script to fix issues with old site titles and deleted sites showing up in the list

## [News](./Widgets/News.md) 1.11.0 - May 17, 2022

### Changed
- Reverted API permissions again to Sites.Read.All since we no longer use Graph API to follow/unfollow but use SharePoint Social API instead

### Fixed
- An issue caused by the SharePoint API and the Graph API returning inconsistent lists of followed sites

## [Power BI](./Widgets/Power BI.md) 1.13.0 - May 13, 2022

### Fixed
- An issue where report page navigation didn&#x27;t offer a scroll bar if the number of pages exceeds page height

### Changed
- Color scheme used by report page navigation

## [Widget Board](./Widget Board.md) 1.32.0 - May 12, 2022

### Added
- An alternative way to store board configuration to support large configurations (&gt; 1MB) (experimental feature for now)

## [News](./Widgets/News.md) 1.10.0 - May 11, 2022

### Fixed
- Revert required API permission level to Sites.ReadWrite.All because (un)following sites requires these permissions

## [Power BI](./Widgets/Power BI.md) 1.12.0 - May 10, 2022

### Added
- An option to render alternative page navigation next to a report

## [People Search](./Widgets/People Search.md) 1.9.0 - May 10, 2022

### Fixed
- Now works much better with new styling/branding options in Ichicraft Boards

## [Power BI](./Widgets/Power BI.md) 1.11.0 - May 06, 2022

### Fixed
- An issue where a custom PBI Content title was falsely overwritten in some scenarios

## [Power BI](./Widgets/Power BI.md) 1.10.0 - May 05, 2022

### Added
- New layout mode &quot;List&quot;, to display a list of items instead of displaying Power BI content directly.

## [Widget Board](./Widget Board.md) 1.31.0 - May 03, 2022

### Changed
- The way the widget board loads when configuration cache is available, speeding up initial load time considerably
- Added caching to profile picture, preventing a fresh fetch on each page load

## [Power BI](./Widgets/Power BI.md) 1.9.0 - May 03, 2022

### Added
- Possibility to select a specific page in an embedded report to display by default
- Possibility to hide page navigation in embedded reports

### Fixed
- Handling of title generating based on selected Power BI content

## [Power BI](./Widgets/Power BI.md) 1.8.0 - May 02, 2022

### Added
- The possibility to open different Power BI content in the lightbox than what is shown in the widget.

### Changed
- The term &quot;(Power BI) Tile&quot; is replaced with &quot;(Power BI) Content&quot; to better reflect that we support different types of content to be rendered.

## [Widget Board](./Widget Board.md) 1.30.0 - May 02, 2022

### Added
- An experimental feature to import and export board configuration to your local file system.

## [Widget Board](./Widget Board.md) 1.29.0 - April 27, 2022

### Fixed 
- A bug where widgets rerendered when moved around the grid
- A bug where resizing or dragging a widget with an iframe as content, sometimes caused the widget to lock in a strange place

## [People Search](./Widgets/People Search.md) 1.8.0 - April 26, 2022

### Changed
- Updated rendering of result list to support new Board UI

## [News](./Widgets/News.md) 1.9.0 - April 24, 2022

### Added
- All new design for this widget that goes along nicely with the new design for Ichicraft Boards

## [Widget Board](./Widget Board.md) 1.28.0 - April 24, 2022

### Added
- A whole new design experience to Ichicraft Boards! Check the Design tab in the Board Adminsitration Panel for all the new options.

## [Inform and Onboard](./Widgets/Inform and Onboard.md) 1.0.0 - April 15, 2022

Initial release 🚀

## [Events](./Widgets/Events.md) 0.1.0 - April 15, 2022

Initial release 🚀

## [Widget Board](./Widget Board.md) 1.27.0 - March 24, 2022

### Added
- A temporary work-around to help users with an issue that occurs in older Viva Connections apps in Teams

## [Birthdays](./Widgets/Birthdays.md) 1.4.0 - March 18, 2022

### Fixed
- An issue where the date was sometimes falsely displayed one day too early

### Changed
- Changed necessary API Permission scope to a lower level

## [Widget Board](./Widget Board.md) 1.26.0 - March 10, 2022

### Added
- The long awaited feature that allows a user to edit the title of a widget

## [People Search](./Widgets/People Search.md) 1.7.0 - March 10, 2022

### Fixed
- A bug where duplicate people where sometimes displayed in &quot;People I work with&quot;

## [Widget Board](./Widget Board.md) 1.25.0 - March 09, 2022

### Added
- A handy search box in the Add widget panel
- A handy search box in the Widgets maintenance panel

## [Power BI](./Widgets/Power BI.md) 1.7.0 - March 08, 2022

### Added
- The ability to pick and display a report directly from a workspace

### Changed
- Automatic authentication token refresh in the background (for long browser sessions)
- Sorting of dropdown lists is now alphabetical

## [Widget Board](./Widget Board.md) 1.24.0 - February 14, 2022

### Changed
-  Replaced permission requirement User.ReadWrite.All with less privileged User.ReadWrite

## [Widget Board](./Widget Board.md) 1.23.0 - February 14, 2022

### Added
- Support for only making a widget variant available for new employees (to support onboarding scenarios)
- Some new properties and functions to the widget context object (for custom development)

### Fixed
- A bug where content languages weren&#x27;t displayed in board config panel but a spinner was shown instead
- A bug where sometimes a custom tooltip re-appeared unintentionally in the widg

## [Widget Board](./Widget Board.md) 1.22.0 - January 11, 2022

### Fixed
- A UI issue where the Save/Cancel buttons were hidden below the scroll in a large admin config panel
- A minor issue where detecting a user&#x27;s language in Teams didn&#x27;t work with &#x27;en-GB&#x27;

## [Bookmarks](./Widgets/Bookmarks.md) 1.5.0 - November 19, 2021

### Added
- A search box to quickly find the bookmark you&#x27;re looking for (available from 6 bookmarks and above)

## [Widget Board](./Widget Board.md) 1.21.0 - November 11, 2021

### Changed
- Minor change in product name in sppkg package

## [Events](./Widgets/Events.md) 1.6.0 - November 10, 2021

### Added
- Full support for <span style="color:white;background-color:black">&nbsp;dark&nbsp;</span> themes in MS Teams and SharePoint

## [Inbox](./Widgets/Inbox.md) 1.5.0 - November 10, 2021

### Added
- Full support for <span style="color:white;background-color:black">&nbsp;dark&nbsp;</span> themes in MS Teams and SharePoint

## [Upcoming Meetings](./Widgets/Upcoming Meetings.md) 1.4.0 - November 10, 2021

### Added
- Full support for <span style="color:white;background-color:black">&nbsp;dark&nbsp;</span> themes in MS Teams and SharePoint

## [People Search](./Widgets/People Search.md) 1.6.0 - November 10, 2021

### Added
- Full support for <span style="color:white;background-color:black">&nbsp;dark&nbsp;</span> themes in MS Teams and SharePoint

## [News](./Widgets/News.md) 1.8.0 - November 10, 2021

### Added
- Full support for <span style="color:white;background-color:black">&nbsp;dark&nbsp;</span> themes in MS Teams and SharePoint

## [Saved for Later](./Widgets/Saved for Later.md) 1.3.0 - November 10, 2021

### Added
- Full support for <span style="color:white;background-color:black">&nbsp;dark&nbsp;</span> themes in MS Teams and SharePoint

## [External Feeds](./Widgets/External Feeds.md) 1.8.0 - November 10, 2021

### Added
- Full support for <span style="color:white;background-color:black">&nbsp;dark&nbsp;</span> themes in MS Teams and SharePoint

## [Bookmarks](./Widgets/Bookmarks.md) 1.4.0 - November 10, 2021

### Added
- Full support for <span style="color:white;background-color:black">&nbsp;dark&nbsp;</span> themes in MS Teams and SharePoint

## [Apps](./Widgets/Apps.md) 1.5.0 - November 10, 2021

### Added
- Full support for <span style="color:white;background-color:black">&nbsp;dark&nbsp;</span> themes in MS Teams and SharePoint

## [Tableau Reports](./Widgets/Tableau Reports.md) 1.2.0 - November 10, 2021

### Added
- Full support for <span style="color:white;background-color:black">&nbsp;dark&nbsp;</span> themes in MS Teams and SharePoint

## [Power BI](./Widgets/Power BI.md) 1.6.0 - November 10, 2021

### Added
- Full support for <span style="color:white;background-color:black">&nbsp;dark&nbsp;</span> themes in MS Teams and SharePoint

## [Widget Board](./Widget Board.md) 1.20.0 - November 10, 2021

### Added
- Full support for <span style="color:white;background-color:black">&nbsp;dark&nbsp;</span> themes in MS Teams and SharePoint
- Name of editing board template to modal header
- Various new properties to `WidgetContext` for use in widgets

### Fixed
- A bug where pressing &lt;esc&gt; or clicking the "clear" icon in a search box resulted in an error

## [External Feeds](./Widgets/External Feeds.md) 1.7.0 - November 02, 2021

### Added
- Support for rendering images on feeds that conform to Media RSS Specification

### Fixed
- An issue where a feed item with missing pubDate caused the widget to crash

## [Apps](./Widgets/Apps.md) 1.4.0 - October 25, 2021

### Fixed
- An issue where clearing the search box in the configuration panel resulted in an error

## [External Feeds](./Widgets/External Feeds.md) 1.6.0 - October 25, 2021

### Fixed
- An issue where clearing the search box in the configuration panel resulted in an error

## [Power BI](./Widgets/Power BI.md) 1.5.0 - October 25, 2021

### Fixed
- An issue where clearing the search box in the configuration panel resulted in an error

## [News](./Widgets/News.md) 1.7.0 - October 25, 2021

### Fixed
- An issue where clearing the search box in the configuration panel resulted in an error

## [People Search](./Widgets/People Search.md) 1.5.0 - October 25, 2021

### Fixed
- An issue where clearing the search box in the configuration panel resulted in an error

## [Widget Board](./Widget Board.md) 1.19.0 - October 20, 2021

### Changed
- Small (~10%) optimization in bundle size
- Upgrade to FluentUI version 8

### Fixed
- a bug where initial installation fails if a user doesn&#x27;t pick a single widget to install
- a faulty message to indicate that no board templates have been created yet

## [Widget Board](./Widget Board.md) 1.18.0 - October 15, 2021

### Fixed
- An issue where a pushed widget that was later removed from board configuration could break a user&#x27;s board
- An issue where in some cases exceptions didn&#x27;t show friendly error messages

## [Bookmarks](./Widgets/Bookmarks.md) 1.3.0 - October 07, 2021

### Changed
- `95%` optimization in bundle size due to use of external modules
- Upgraded underlying Fluent UI component library from version 7 to 8

## [Saved for Later](./Widgets/Saved for Later.md) 1.2.0 - October 07, 2021

### Changed
- `82%` optimization in bundle size due to use of external modules
- Upgraded underlying Fluent UI component library from version 7 to 8

## [Apps](./Widgets/Apps.md) 1.3.0 - October 07, 2021

### Changed
- `85%` optimization in bundle size due to use of external modules
- Upgraded underlying Fluent UI component library from version 7 to 8

## [Birthdays](./Widgets/Birthdays.md) 1.3.0 - October 07, 2021

### Changed
- `65%` optimization in bundle size due to use of external module`s
- Upgraded underlying Fluent UI component library from version 7 to 8

## [Teams](./Widgets/Teams.md) 1.2.0 - October 07, 2021

### Changed
- `72%` optimization in bundle size due to use of external modules
- Upgraded underlying Fluent UI component library from version 7 to 8

## [Embed](./Widgets/Embed.md) 1.1.0 - October 07, 2021

### Changed
- `90%` optimization in bundle size due to use of external modules
- Upgraded underlying Fluent UI component library from version 7 to 8

## [Events](./Widgets/Events.md) 1.5.0 - October 07, 2021

### Changed
- `87%` optimization in bundle size due to use of external modules
- Upgraded underlying Fluent UI component library from version 7 to 8

## [Followed Sites](./Widgets/Followed Sites.md) 1.2.0 - October 07, 2021

### Changed
- `37%` optimization in bundle size due to use of external modules
- Upgraded underlying Fluent UI component library from version 7 to 8

## [OneDrive](./Widgets/Files.md) 1.5.0 - October 07, 2021

### Changed
- `41%` optimization in bundle size due to use of external modules
- Upgraded underlying Fluent UI component library from version 7 to 8

## [Power BI](./Widgets/Power BI.md) 1.4.0 - October 07, 2021

### Changed
- `84%` optimization in bundle size due to use of external modules
- Upgraded underlying Fluent UI component library from version 7 to 8

## [External Feeds](./Widgets/External Feeds.md) 1.5.0 - October 07, 2021

### Changed
- `70%` optimization in bundle size due to use of external modules
- Upgraded underlying Fluent UI component library from version 7 to 8

## [Tasks](./Widgets/Tasks.md) 1.3.0 - October 07, 2021

### Changed
- `81%` optimization in bundle size due to use of external modules
- Upgraded underlying Fluent UI component library from version 7 to 8

## [Tableau Reports](./Widgets/Tableau Reports.md) 1.1.0 - October 07, 2021

### Changed
- `82%` optimization in bundle size due to use of external modules
- Upgraded underlying Fluent UI component library from version 7 to 8

## [News](./Widgets/News.md) 1.6.0 - October 07, 2021

### Changed
- `72%` optimization in bundle size due to use of external modules
- Upgraded underlying Fluent UI component library from version 7 to 8

## [People Search](./Widgets/People Search.md) 1.4.0 - October 07, 2021

### Changed
- `61%` optimization in bundle size due to use of external modules
- Upgraded underlying Fluent UI component library from version 7 to 8

## [Inbox](./Widgets/Inbox.md) 1.4.0 - October 07, 2021

### Changed
- `87%` optimization in bundle size due to use of external modules
- Upgraded underlying Fluent UI component library from version 7 to 8

## [Upcoming Meetings](./Widgets/Upcoming Meetings.md) 1.3.0 - October 07, 2021

### Changed
- `85%` optimization in bundle size due to use of external modules
- Upgraded underlying Fluent UI component library from version 7 to 8

## [Widget Board](./Widget Board.md) 1.17.0 - October 07, 2021

### Changed
- This version of the widget board supports V2 widget manifests. V2 introduces &#x27;externals&#x27;, allowing async loading and sharing of modules/libraries among widgets. Make sure you upgrade your widgets using [this wiki page](https://github.com/ichicraft/widgets-docs/wiki/Migrate-widget-to-Manifest-V2) to benefit from these optimizations.

## [Inbox](./Widgets/Inbox.md) 1.3.0 - September 24, 2021

## [Widget Board](./Widget Board.md) 1.16.0 - September 15, 2021

### Added
- New options in the so called &#x27;pushed widget&#x27; feature: it&#x27;s now possible to define if a pushed widget is _deletable_, _movable_ or _resizable_ by the user.
- An optional toggle in &#x27;board template&#x27; feature to disable strict audience mismatch warnings

## [Events](./Widgets/Events.md) 1.4.0 - September 01, 2021

### Changed
- Improved query and search result sorting to always include only most relevant events

### Fixed
- A bug where upcoming events appeared to be missing in some cases where more than 100 items matched the search query
- A bug where events that were created over 2 months ago, were missing in the results

## [Widget Board](./Widget Board.md) 1.15.0 - August 26, 2021

### Fixed
- A bug where the main user board layout gets messed up when an extra board is edited

## [News](./Widgets/News.md) 1.5.0 - August 25, 2021

### Updated
- Improved search experience when adding sites to configured source sites

## [Widget Board](./Widget Board.md) 1.14.0 - July 28, 2021

### Added
- All new Board Template editing experience

### Changed
- Minor update to Portuguese resources

## [Inbox](./Widgets/Inbox.md) 1.2.0 - July 07, 2021

### Added
- Users can now use the widget for shared mailboxes
- Users can now configure the display density of the widget (options are Full, Medium and Compact)
- Users can now configure whether they want a notification/summary in the welcome box for unread messages
- Widget can now span 2 columns instead of only 1

### Changed
- Improved display of unread messages for better readability

## [OneDrive](./Widgets/Files.md) 1.4.0 - June 30, 2021



## [OneDrive](./Widgets/Files.md) 1.3.0 - June 30, 2021

### Fixed 
- An issue where a missing webDavUrl property can result in an exception in the widget

## [OneDrive](./Widgets/Files.md) 1.2.0 - June 30, 2021

### Changed
- Implementation of logging functionality
- Updates to Portuguese resources

## [Power BI](./Widgets/Power BI.md) 1.3.0 - June 04, 2021

### Added
- Support for Power BI Apps, you can now view complete reports/apps in a single widget

### Changed
- Improved visualization of loading Power BI data

## [External Feeds](./Widgets/External Feeds.md) 1.4.0 - April 21, 2021

### Fixed
- A bug where for some feeds, images could not be loaded
- A bug where for some feeds, the publication date of items wasn&#x27;t interpreted correctly
- A situation where for failing feeds, the widget kept showing a spinner

## [People Search](./Widgets/People Search.md) 1.3.0 - April 19, 2021

### Fixed
- Fixed an issue where for some person results the fly-out wouldn&#x27;t render

## [Saved for Later](./Widgets/Saved for Later.md) 1.1.0 - April 19, 2021

### Fixed
- Fixed a bug where saved for later articles wouldn&#x27;t open in a dialog in MS Viva Connections

## [News](./Widgets/News.md) 1.4.0 - April 19, 2021

### Fixed
- Fixed a bug where news articles wouldn&#x27;t open in a dialog in MS Viva Connections

## [Widget Board](./Widget Board.md) 1.13.0 - April 13, 2021

### Fixed
- Hopefully solved an issue where in rare cases the `pageContext` property of the web part context is `undefined`

## [Widget Board](./Widget Board.md) 1.12.0 - April 09, 2021

### Changed
- Various improvements to initialization of widget board (lower timeout, auto refresh once on error, etc.)
- New visualization of fatal error, introducing retry button and admin panel button

### Fixed
- A bug where the indicator of missing API permissions was no longer visible in admin panel

## [People Search](./Widgets/People Search.md) 1.2.0 - April 02, 2021

### Added
- The ability to include other user properties in the search so you can also search in job title and deparment details

### Fixed
- A bug where people results only included people close to the user doing the search. We now include the entire organization

### Removed
- We had to remove the ability to include external users since we now depend on a different endpoint in MS Graph to search

## [Widget Board](./Widget Board.md) 1.11.0 - March 25, 2021

### Added
- Option to use a 6 column layout in SharePoint on high resolution screens

### Changed
- Improved initialization of widget board with optional retries for service calls that sometimes fail
- Improved handling of user resetting his/her board by clearing all cache items

### Fixed
- A bug where sometimes the widget board stays empty when user&#x27;s groups failed loading
- A bug where a notification could grow beyond the board header's max width

## [Birthdays](./Widgets/Birthdays.md) 1.2.0 - March 23, 2021

### Fixed
- Bug where timezones weren&#x27;t taken into consideration correctly in displaying birthdays

## [Upcoming Meetings](./Widgets/Upcoming Meetings.md) 1.2.0 - March 23, 2021

### Added
- Next day&#x27;s meetings
- Visualization of event status (busy, free, out-of-office, tentative, etc.)

### Changed
- Improved translations/labels
- Clicking the widget title now opens Outlook calendar in new window
- Improved handling of connection errors and exception logging

### Fixed
- Bug where masked private events sometimes did show details

## [Inbox](./Widgets/Inbox.md) 1.1.0 - March 23, 2021

### Changed
- Clicking the widget title now opens Outlook in new window
- Some minor updates to text labels/translations

## [Events](./Widgets/Events.md) 1.3.0 - March 12, 2021

### Added
- Support for Multi-Geo tenants

## [News](./Widgets/News.md) 1.3.0 - March 12, 2021

### Fixed
- Fixed a bug where opening items from other domains (in multi-geo setup) in a dialog resulted in an error

## [News](./Widgets/News.md) 1.2.0 - March 12, 2021

### Added
- Support for Multi-Geo tenants
- Support for multi-language content

### Changed
- Improved error handling and exception logging
- Updates in Portuguese resources after review

### Fixed
- Minor bug where essential/pushed sites were in some scenarios also rendered as followed sites in user config

## [Embed](./Widgets/Embed.md) 1.0.0 - March 08, 2021

Initial release 🚀

## [Widget Board](./Widget Board.md) 1.10.0 - March 05, 2021

### Fixed
- Fixed an issue with z-indexes being too high for widget elements, causing stacking issues with new App Bar in SharePoint

## [Widget Board](./Widget Board.md) 1.9.0 - March 05, 2021

### Fixed
- Hotfixed an issue that could occur in browsers that don&#x27;t support customElements

## [People Search](./Widgets/People Search.md) 1.1.0 - March 03, 2021

### Fixed
- Added missing API permission People.Read for Microsoft Graph

## [Saved for Later](./Widgets/Saved for Later.md) 1.0.0 - February 25, 2021

Initial release 🚀

## [People Search](./Widgets/People Search.md) 1.0.0 - February 24, 2021

Initial release 🚀

## [Widget Board](./Widget Board.md) 1.8.0 - February 24, 2021

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

## [Events](./Widgets/Events.md) 1.2.0 - February 22, 2021

### Changed
- Replaced automatic data refresh with manual refresh button
- Updates to Portuguese translations after review
- Improvements to exception handling and logging

## [Apps](./Widgets/Apps.md) 1.2.0 - February 04, 2021

### Changed
- Updates to Portuguese translations after review
- Improvements to exception handling and logging

## [Power BI](./Widgets/Power BI.md) 1.2.0 - February 04, 2021

### Changed
- Updates to Portuguese translations after review
- Improvements to exception handling and logging
### Fixed
- Fixed a bug where updating admin configuration as an admin didn&#x27;t result in clearing local cache

## [External Feeds](./Widgets/External Feeds.md) 1.3.0 - February 04, 2021

### Changed
- More improvements to exception handling and logging

## [External Feeds](./Widgets/External Feeds.md) 1.2.0 - February 04, 2021

### Changed
- Updates to Portuguese translations after review
- Improvements to exception handling and logging

### Fixed
- Fixed a bug where updating admin configuration as an admin didn&#x27;t result in clearing cache

## [Widget Board](./Widget Board.md) 1.7.0 - February 03, 2021

### Added
- Posibility to target (variants of) widgets to specific audiences

### Changed
- Updates to Portuguese translations after review