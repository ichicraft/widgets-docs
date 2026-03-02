## 1.18.0 - March 02, 2026

### Added
- Support for multiple calendars
  - Administrators can provide calendars for users (including push and audience systems)
  - Users can select calendars from their Outlook, admin config, or add one themselves
  - Calendars are now themed by their Outlook color, which can be overridden by the user
- Calendar grid &amp; timeline views
   - Display calendar events either in a list, grid or timeline
   - Open the calendar view in a dialog via the widget header
   - Display the calendar view on your board when the widget is resized to two columns or more.
- Expanded range for upcoming meetings
   - Scroll back to see previous meetings
   - Scroll down to see meetings for the next week

### Changed
- Rebranded the upcoming meetings widget to the &quot;Calendar Widget&quot;
- Improved UX across the whole widget

## 1.17.0 - October 03, 2025

### Changed
- Widget is refactored to use centrally provided logging components.

## 1.16.0 - July 15, 2025

### Fixed
- Fixed a minor issue related to caching

## 1.15.0 - July 14, 2025

### Added
- You can now display calendars that others have shared with you (requires the additional Graph permission: `Calendars.Read.Shared`)
- Added Italian 🇮🇹 translations, enabling Italian-speaking users to navigate the software in their native language

### Changed

- Refreshed various parts of the UI for improved clarity and consistency

## 1.14.0 - February 19, 2025

### Added
- Polish 🇵🇱 translations added, allowing Polish-speaking users to navigate and use the software in their native language

### Changed
- Various under-the-hood performance updates 

## 1.13.0 - September 10, 2024

### Changed
- Improved German translations.

## 1.12.0 - March 21, 2024

### Changed
- Upgraded Fluent UI 8 dependency to match version used by Boards Core.

## 1.11.0 - February 29, 2024

### Changed
- Handling of missing M365 license is improved with a clearer message to the user

## 1.10.0 - February 08, 2024

### Changed
- Improved translations (FR)

## 1.9.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## 1.8.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic


## 1.7.0 - November 30, 2023

### Changed
- Optimization of widget script bundle size

## 1.6.0 - June 20, 2023

### Changed
- Update solution to stop using beta API from Microsoft where it&#x27;s no longer needed

## 1.5.0 - July 06, 2022

### Changed
- Updated look &amp; feel to better match new styling of Ichicraft Boards

### Fixed
- An issue where the widget continued to try to refresh content indefinitely even if connection was lost or failed for a while

## 1.4.0 - November 10, 2021

### Added
- Full support for <span style="color:white;background-color:black">&nbsp;dark&nbsp;</span> themes in MS Teams and SharePoint

## 1.3.0 - October 07, 2021

### Changed
- `85%` optimization in bundle size due to use of external modules
- Upgraded underlying Fluent UI component library from version 7 to 8

## 1.2.0 - March 23, 2021

### Added
- Next day&#x27;s meetings
- Visualization of event status (busy, free, out-of-office, tentative, etc.)

### Changed
- Improved translations/labels
- Clicking the widget title now opens Outlook calendar in new window
- Improved handling of connection errors and exception logging

### Fixed
- Bug where masked private events sometimes did show details

## 1.0.0 - March 6, 2020
Initial release 🚀