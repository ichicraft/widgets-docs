## 1.76.0 - July 03, 2026

### Fixed
- Made some performance improvement in communication between widget and web part.

### Changed
- Added logic to clear stale local storage values

### Changed
- Used new caching framework for better performance, reliability and loading speed

### Changed
- The frequency with which access tokens for Power BI embeds are fetched is optimized to lower the chance of undesirable embed refreshes

### Changed
- Widget is refactored to use centrally provided logging components.

### Changed
- If fetching the Power BI access token fails, the browser now automatically refreshes while clearing both &#x60;sessionStorage&#x60; and &#x60;localStorage&#x60;.  

### Fixed
- Some Dutch translations have been corrected
- Redundant logging has been removed from the widget

### Changed
- Added some details to required API permissions needed to run the widget

### Fixed
- Removed redundant caching that could cause the browser’s local storage to fill up
- Corrected a broken Italian translation

### Added
- Italian 🇮🇹 translations added, allowing Italian-speaking users to navigate and use the software in their native language.

### Fixed
- The widget should no longer fail rendering when running in Teams

### Changed
- Removed popout functionality, as PowerBI is not supporting this anymore (for now).

### Fixed
- Implemented a token workaround in SharePoint for PowerBI Dashboards and Scorecards.

### Fixed
- Various improvements were made to loading a user&#x27;s access token to improve stability

### Fixed
- Implemented a fallback mechanism for retrieving the API token, addressing [this SharePoint issue](https://github.com/SharePoint/sp-dev-docs/issues/10292)

### Fixed
- Restored expected functionality of the list view

### Added
- Page-level audience targeting for reports

### Changed
- Enhanced tooltip UI for improved clarity
- Refined UI for horizontal page navigation

### Fixed
- Fix vertical navigation setting being used in Scorecard &amp; Dashboard sources

### Added
- New content source: Scorecard
   - Requires a new permission: Scorecard.Read.All

### Fixed
- Scorecard embeds not working when selected through the &quot;Report&quot; content source

### Added
- Polish 🇵🇱 translations added, allowing Polish-speaking users to navigate and use the software in their native language
- Person detail cards added to user picker controls used in widget settings

### Changed
- Various under-the-hood performance updates 

### Fixed
- An issue where external users with capital &#x27;#EXT#&#x27; in their username weren&#x27;t correctly recognized as external

### Changed
- Improved German translations.

### Fixed
- An issue where scrolling a longer list of Power BI content didn&#x27;t work correctly in the administration settings of the widget
- An issue where adding predefined content in user settings resulted in visually wrongly positioned elements

### Added
- Deeplinking functionality for Power BI content
- Info flyout when hovering over content items in list view
- Multi-column display for list layouts

### Changed
- Improved UI for list view and dialogs
- Improved UX for Admin configuration


### Fixed
- Moving items to &#x27;no group assigned&#x27; not working correctly


### Added
- Button to save persistent filters / bookmarks manually from a dialog or popout window
- Button to move content between groups without dragging

### Changed
- Improved UX design for User Configuration and Admin Configuration
- Grouping functionality is no longer dependent on layout setting
- Persistent filters are saved automatically when opening a popout window

### Changed
- Improved translations (FR)

### Fixed
- Horizontal and Vertical page navigation options not working in pop-out
- Pop-out window title resetting when opening filter menu

### Added
- A new &#x27;Open in new window&#x27; functionality for PBI content dialogs (not available in MS Teams client)

### Fixed
- Source dropdown icons not applying theme color

### Fixed
- An issue where duplicate diagnostics were logged

### Changed
- Internal refactoring of logging logic


### Added
- Support for the Power BI embed action bar

### Fixed
- An issue where switching source type to Dashboard caused an exception

### Changed
- Optimization of widget script bundle size

### Fixed
- An issue with the user picker, used for audience targeting

### Changed
- Removed 15 minute cache delay

### Fixed
- An issue where cached filters were not applied on load

###Fixed
- An issue where the horizontal page navigation would not correctly apply the selected page

### Fixed
- An issue where Power BI embeds are reloaded when resizing the browser window

### Fixed
- An issue where horizontal navigation pivots for list layouts would not update correctly

### Fixed
- An issue where the embed disappears when resizing window or going fullscreen
- An issue where slicers are not updated when using the clear button on the embed

### Changed
- Refactored the content dialog to reuse the same embed code as the carousel &amp; preview

###Added
- The ability to configure a subtitle for PBI content

###Fixed
- An issue where report pages were synched incorrectly between the widget board and content dialog

###Fixed
- An issue where cached filters were not applied on first render of PBI content
- An issue where visuals of a hidden page were not selectable from the PBI content Add/Edit dialog
- An issue where the content preview would crash when changing content source
- An issue where the PBI content Add/Edit dialog would crash when selecting a dashboard tile

###Changed
- Removed the Clear functionality from the Slicers feature

### Fixed
- An issue where rendering a single visual in a widget and using a full report as zoom content results in an error when using the zoom function

### Fixed
- An issue where users applying changes to slicers on one shared board, see the same changes applied on other shared boards that use the same report.

### Fixed
- An issue where working with the new slicers feature could cause an error in the configuration panel

### Added
- Support for slicer override and manipulation 

### Fixed
- an issue where live filters weren&#x27;t working for multiple columns at once

**Added:**
- Live filters within the same table
- Apply formatting to filter values (specifically DateTime strings)
- Tooltip when hovering over filter values &amp; people picker values

**Changed:**
- Remove page- and visual level filters from available filters list

**Fixed:**
- Displayname fix
- Fix number &amp; boolean filters not working
- Fix performance on large collection of filter values (e.g. date filter)
- Fix horizontal page navigation cutting off part of the embed
- Fix available filters when selecting a Visual
- Fix report filters not resetting when enabling custom filters


