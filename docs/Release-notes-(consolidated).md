## [News](./Widgets/News.md) 1.4.0 - April 19, 2021

### Fixed
- Fixed a bug where news articles wouldn&#x27;t open in a dialog in MS Viva Connections

## [Widget Board](./Widget Board.md) 1.13.0 - April 13, 2021

### Fixed
- Hopefully solved an issue where in rare cases the &#x60;pageContext&#x60; property of the web part context is &#x60;undefined&#x60;

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