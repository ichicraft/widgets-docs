## 1.18.0 - September 10, 2025

### Added
- More efficient way of retrieving birthdays from the API, using a sortable managed property (enable via Admin Config)  
- Option to change the managed property used for retrieving birthdays
- Responsive birthday display with support for multiple columns
- Confetti animation when there’s a birthday today

### Changed
- The **‘Previous’** birthdays tab has been renamed to **‘Recent’**
- General UI improvements


## 1.17.0 - July 14, 2025

### Added
- Added the ability to force a refresh of loaded birthdays, bypassing any cached data
- Users can now update their birthday at any time, even if one is already set

## 1.16.0 - July 09, 2025

### Changed
- Added some details to required API permissions needed to run the widget

## 1.15.0 - June 19, 2025

### Added
- Italian 🇮🇹 translations added, allowing Italian-speaking users to navigate and use the software in their native language.

## 1.14.0 - February 19, 2025

### Added
- Polish 🇵🇱 translations added, allowing Polish-speaking users to navigate and use the software in their native language

### Changed
- Use native SharePoint people card fly-out in favor of MGT card to reduce JavaScript bundle size
- Widget can now be resized to span up to 6 columns instead of 2
- Various under-the-hood performance updates 

## 1.13.0 - September 10, 2024

### Changed
- Improved German translations.

## 1.12.0 - March 21, 2024

### Changed
- Upgraded Fluent UI 8 dependency to match version used by Boards Core.

## 1.11.0 - February 08, 2024

### Changed
- Improved translations (FR)

## 1.10.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## 1.9.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic
- Upgrade to Graph Toolkit V3

## 1.8.0 - November 30, 2023

### Changed
- Optimization of widget script bundle size

## 1.7.0 - September 09, 2023

### Fixed
- An issue that occurs in a situation where users&#x27; login names aren&#x27;t identical to their primary e-mail addresses

## 1.6.0 - December 19, 2022

### Fixed
- An issue where in some cases a user couldn&#x27;t update his/her birthday

## 1.5.0 - December 07, 2022

### Added
- Flyout cards with personal information of a user
- Ability to directly congratulate someone having a birthday using Teams chat or e-mail
- Ability to update your own birthday
- Better support for small factor widget (horizontal rendering)

### Changed
- Completely refactored widget code
- Updated visual elements in widget with more focus for birthday user

## 1.4.0 - March 18, 2022

### Fixed
- An issue where the date was sometimes falsely displayed one day too early

### Changed
- Changed necessary API Permission scope to a lower level

## 1.3.0 - October 07, 2021

### Changed
- `65%` optimization in bundle size due to use of external modules
- Upgraded underlying Fluent UI component library from version 7 to 8

## 1.2.0 - March 23, 2021

### Fixed
- Bug where timezones weren&#x27;t taken into consideration correctly in displaying birthdays

## 1.0.0 - January 29, 2020
Initial release 🚀