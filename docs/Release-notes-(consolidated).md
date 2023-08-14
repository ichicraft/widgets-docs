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

## [Apps](./Widgets/Apps.md) 1.21.0 - July 17, 2023

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

Initial release

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

Initial release

## [Events](./Widgets/Events.md) 0.1.0 - April 15, 2022

Initial release

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

Initial release

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

Initial release

## [People Search](./Widgets/People Search.md) 1.0.0 - February 24, 2021

Initial release

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