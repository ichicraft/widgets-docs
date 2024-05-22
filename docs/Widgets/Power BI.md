## 1.54.0 - May 22, 2024

### Added
- Deeplinking functionality for Power BI content
- Info flyout when hovering over content items in list view
- Multi-column display for list layouts

### Changed
- Improved UI for list view and dialogs
- Improved UX for Admin configuration


### Fixed
- Moving items to &#x27;no group assigned&#x27; not working correctly


## 1.53.0 - April 02, 2024

### Added
- Button to save persistent filters / bookmarks manually from a dialog or popout window
- Button to move content between groups without dragging

### Changed
- Improved UX design for User Configuration and Admin Configuration
- Grouping functionality is no longer dependent on layout setting
- Persistent filters are saved automatically when opening a popout window

## 1.52.0 - March 28, 2024

## 1.51.0 - March 26, 2024

### Fixed
- An issue where failing to store data in browser cache caused the widget to render an error

## 1.50.0 - February 08, 2024

### Changed
- Improved translations (FR)

## 1.49.0 - January 25, 2024

### Fixed
- Horizontal and Vertical page navigation options not working in pop-out
- Pop-out window title resetting when opening filter menu

## 1.48.0 - January 24, 2024

### Added
- A new &#x27;Open in new window&#x27; functionality for PBI content dialogs (not available in MS Teams client)

### Fixed
- Source dropdown icons not applying theme color

## 1.47.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## 1.46.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic


## 1.45.0 - December 11, 2023

### Added
- Support for the Power BI embed action bar

## 1.44.0 - November 30, 2023

### Fixed
- An issue where switching source type to Dashboard caused an exception

### Changed
- Optimization of widget script bundle size

## 1.43.0 - November 15, 2023

### Fixed
- An issue with the user picker, used for audience targeting

### Changed
- Removed 15 minute cache delay

## 1.42.0 - October 05, 2023

### Fixed
- An issue where cached filters were not applied on load

## 1.41.0 - September 28, 2023

###Fixed
- An issue where the horizontal page navigation would not correctly apply the selected page

## 1.40.0 - September 15, 2023

### Fixed
- An issue where Power BI embeds are reloaded when resizing the browser window

## 1.39.0 - August 24, 2023

### Fixed
- An issue where horizontal navigation pivots for list layouts would not update correctly

## 1.38.0 - August 10, 2023

### Fixed
- An issue where the embed disappears when resizing window or going fullscreen
- An issue where slicers are not updated when using the clear button on the embed

### Changed
- Refactored the content dialog to reuse the same embed code as the carousel &amp; preview

## 1.37.0 - July 13, 2023

###Added
- The ability to configure a subtitle for PBI content

## 1.36.0 - June 19, 2023

###Fixed
- An issue where report pages were synched incorrectly between the widget board and content dialog

## 1.35.0 - May 26, 2023

###Fixed
- An issue where cached filters were not applied on first render of PBI content
- An issue where visuals of a hidden page were not selectable from the PBI content Add/Edit dialog
- An issue where the content preview would crash when changing content source
- An issue where the PBI content Add/Edit dialog would crash when selecting a dashboard tile

###Changed
- Removed the Clear functiona

## 1.34.0 - May 16, 2023

### Fixed
- An issue where rendering a single visual in a widget and using a full report as zoom content results in an error when using the zoom function

## 1.33.0 - May 16, 2023

### Fixed
- An issue where users applying changes to slicers on one shared board, see the same changes applied on other shared boards that use the same report.

## 1.32.0 - May 16, 2023

### Fixed
- An issue where working with the new slicers feature could cause an error in the configuration panel

## 1.31.0 - May 15, 2023

### Added
- Support for slicer override and manipulation 

## 1.30.0 - April 18, 2023

### Fixed
- an issue where live filters weren&#x27;t working for multiple columns at once

## 1.29.0 - April 06, 2023

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

## 1.28.0 - March 27, 2023

### Changed
- Minor system update to prevent flooding logs with failed access token retrieval


## 1.27.0 - March 24, 2023

### Fixed
- An issue where changes in default filters from an admin perspective weren&#x27;t visible to the user due to caching issues

## 1.26.0 - March 23, 2023

Fix local storage reset when editing admin config.




## 1.25.0 - March 21, 2023

### Fixed
- Various small bugs introduced in last release

## 1.24.0 - March 20, 2023

### Changed
- Some minor feature improvements and fixes for bugs introduced in previous release

## 1.23.0 - March 17, 2023

### Added
- The ability to group PBI-content in the list view
- The ability to apply filters on PBI-content directly in the widget
- Improvements to the add/edit PBI-content dialog

## 1.22.0 - February 17, 2023

### Fixed
- An issue with page visibility in horizontal navigation

## 1.21.0 - February 15, 2023

### Added
- The ability to select individual report _visuals_ to render
- The ability to _clone_ PBI content for quicker creation of content
- PBI content _previews_ as part of the content management
- Content viewed and clicked _events_ to feed the Ichicraft Boards analytics feature

## 1.20.0 - December 08, 2022

### Changed
- Loading page navigation on &#x27;loaded&#x27; instead of &#x27;rendered&#x27;

## 1.19.0 - September 21, 2022

### Fixed
- An issue where all of a sudden the report page picker didn&#x27;t work due to an update in the underlying Power BI REST API

## 1.18.0 - August 25, 2022

### Added
- Option to open a Power BI visual in full screen

## 1.17.0 - July 21, 2022

### Changed
- PBI content in hidden carrousel slides is no longer loaded in the background. Instead, it&#x27;s loaded upon navigating to the slide. This is to prevent unnecessary burdening of the browser.

## 1.16.0 - July 12, 2022

### Fixed
- An issue where long words with no spaces could break the UI of list views of Power BI content

### Changed
- Behavior of zooming in on content is now consistent with the Tableau Reports widget. This means that to open the zoomed in report you now have to click either the title of the widget or the zoom button in the widget header. Clicking on the content (report) itself will no longer 

## 1.15.0 - June 22, 2022

### Changed
- Power BI content not visible in the carousel is now lazily loaded, giving priority to initially visible content

## 1.14.0 - May 24, 2022

### Changed
- Added automatic browser refresh when token retrieval fails
- Improved resizing of widgets and effect this has on responsive reports
- Used PBI bootstrap to speed up loading of PBI content
- Introduced a retry button for when the widget isn&#x27;t able to render somehow

## 1.13.0 - May 13, 2022

### Fixed
- An issue where report page navigation didn&#x27;t offer a scroll bar if the number of pages exceeds page height

### Changed
- Color scheme used by report page navigation

## 1.12.0 - May 10, 2022

### Added
- An option to render alternative page navigation next to a report

## 1.11.0 - May 06, 2022

### Fixed
- An issue where a custom PBI Content title was falsely overwritten in some scenarios

## 1.10.0 - May 05, 2022

### Added
- New layout mode &quot;List&quot;, to display a list of items instead of displaying Power BI content directly.

## 1.9.0 - May 03, 2022

### Added
- Possibility to select a specific page in an embedded report to display by default
- Possibility to hide page navigation in embedded reports

### Fixed
- Handling of title generating based on selected Power BI content

## 1.8.0 - May 02, 2022

### Added
- The possibility to open different Power BI content in the lightbox than what is shown in the widget.

### Changed
- The term &quot;(Power BI) Tile&quot; is replaced with &quot;(Power BI) Content&quot; to better reflect that we support different types of content to be rendered.

## 1.7.0 - March 08, 2022

### Added
- The ability to pick and display a report directly from a workspace

### Changed
- Automatic authentication token refresh in the background (for long browser sessions)
- Sorting of dropdown lists is now alphabetical

## 1.6.0 - November 10, 2021

### Added
- Full support for <span style="color:white;background-color:black">&nbsp;dark&nbsp;</span> themes in MS Teams and SharePoint

## 1.5.0 - October 25, 2021

### Fixed
- An issue where clearing the search box in the configuration panel resulted in an error

## 1.4.0 - October 07, 2021

### Changed
- `84%` optimization in bundle size due to use of external modules
- Upgraded underlying Fluent UI component library from version 7 to 8

## 1.3.0 - June 04, 2021

### Added
- Support for Power BI Apps, you can now view complete reports/apps in a single widget

### Changed
- Improved visualization of loading Power BI data

## 1.2.0 - February 04, 2021

### Changed
- Updates to Portuguese translations after review
- Improvements to exception handling and logging
### Fixed
- Fixed a bug where updating admin configuration as an admin didn&#x27;t result in clearing local cache

## 1.0.0 - March 16, 2020
Initial release 🚀