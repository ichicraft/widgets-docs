## 1.24.0 - July 16, 2025

### Fixed
- Email body preview is no longer incorrectly rendered as HTML

## 1.23.0 - June 19, 2025

### Added
- Italian 🇮🇹 translations added, allowing Italian-speaking users to navigate and use the software in their native language.

## 1.22.0 - May 22, 2025

### Fixed
- Choosing shared mailbox but not selecting an account should no longer cause an exception

## 1.21.0 - April 24, 2025

### Added
- Option to split the inbox into Focused and Other categories
- Clickable sender profile pictures that link to their profiles

### Changed
- Enhanced UI for message previews, tooltips, and empty states

## 1.20.0 - March 21, 2025

### Fixed
- Using an e-mail address to configure a shared inbox no longer causes an error or infinite spinner when using the user picker

## 1.19.0 - February 19, 2025

### Added
- Polish 🇵🇱 translations added, allowing Polish-speaking users to navigate and use the software in their native language
- Person detail cards added to user picker controls used in widget settings

### Changed
- Various under-the-hood performance updates 

## 1.18.0 - December 16, 2024

### Added
- Badge count when the widget is used as a buddy in the new Buddy Bar

## 1.17.0 - September 10, 2024

### Changed
- Improved German translations.

## 1.16.0 - March 21, 2024

### Fixed
- An issue where an e-mail without a sender caused the widget to fail rendering correctly

## 1.15.0 - February 29, 2024

### Changed
- Handling of missing M365 license is improved with a clearer message to the user

## 1.14.0 - February 08, 2024

### Changed
- Improved translations (FR)

## 1.13.0 - December 22, 2023



### Fixed
- An issue where duplicate diagnostics were sent 

## 1.11.0 - December 12, 2023

### Changed
- Internal refactoring of logging logic

## 1.10.0 - November 30, 2023

### Changed
- Optimization of widget script bundle size

## 1.9.0 - October 04, 2023

### Added
- Shared mailbox now supports adding an e-mail address if a user could not be found

### Changed
- Improved UI for user configuration panel

### Fixed
- An issue in Boards Lite where shared mailbox functionality could not be used



## 1.8.0 - December 19, 2022

### Added
- Ability for adminstrator to set default inbox type (Personal/Shared)
- Better support for Inbox widget in Shared Board context

### Fixed
- An issue where opening a Shared inbox from widget header didn&#x27;t work at all

## 1.7.0 - July 06, 2022

### Fixed
- An issue where the widget continued to try to refresh content indefinitely even if connection was lost or failed for a while

## 1.6.0 - June 23, 2022

### Changed
- Changed the look &amp; feel to match the new styles of the widget board
- Improved exception logging
- Upgraded underlying Graph Client SDK
- Removed logic to get unread item count because we no longer support the old notification messages

## 1.5.0 - November 10, 2021

### Added
- Full support for <span style="color:white;background-color:black">&nbsp;dark&nbsp;</span> themes in MS Teams and SharePoint

## 1.4.0 - October 07, 2021

### Changed
- `87%` optimization in bundle size due to use of external modules
- Upgraded underlying Fluent UI component library from version 7 to 8

## 1.3.0 - September 24, 2021

## 1.2.0 - July 07, 2021

### Added
- Users can now use the widget for shared mailboxes
- Users can now configure the display density of the widget (options are Full, Medium and Compact)
- Users can now configure whether they want a notification/summary in the welcome box for unread messages
- Widget can now span 2 columns instead of only 1

### Changed
- Improved display of unread messages for better readability

## 1.1.0 - March 23, 2021

### Changed
- Clicking the widget title now opens Outlook in new window
- Some minor updates to text labels/translations

## 1.0.0 - September 9, 2020
Initial release 🚀