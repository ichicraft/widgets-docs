## 1.22.0 - October 15, 2025

### Fixed
- The widget now requires the latest and correct API permissions to be granted

## 1.21.0 - October 03, 2025

### Changed
- Widget is refactored to use centrally provided logging components.

## 1.20.0 - June 19, 2025

### Added
- Italian 🇮🇹 translations added, allowing Italian-speaking users to navigate and use the software in their native language.

## 1.19.0 - February 19, 2025

### Added
- Polish 🇵🇱 translations added, allowing Polish-speaking users to navigate and use the software in their native language

### Changed
- Use native SharePoint people card fly-out in favor of MGT card to reduce JavaScript bundle size
- Various under-the-hood performance updates 

## 1.18.0 - September 10, 2024

### Changed
- Improved German translations.

## 1.17.0 - July 04, 2024

### Changed
- Show empty state instead of &#x27;people I work with&#x27; when user has no license

## 1.16.0 - May 06, 2024

### Added
- Admin configurable account filters

### Changed
- UI improvements

### Fixed
- An issue where person cards were not interactable anymore

## 1.15.0 - March 22, 2024

### Changed
- Upgraded Fluent UI 8 dependency to match version used by Boards Core.

## 1.14.0 - February 29, 2024

### Changed
- Handling of missing M365 license is improved with a clearer message to the user

## 1.13.0 - February 08, 2024

### Changed
- Improved translations (FR)

## 1.12.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## 1.11.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic
- Upgrade to Graph Toolkit V3

## 1.10.0 - July 14, 2022

### Changed
- Upgraded underlying Graph Toolkit version

## 1.9.0 - May 10, 2022

### Fixed
- Now works much better with new styling/branding options in Ichicraft Boards

## 1.8.0 - April 26, 2022

### Changed
- Updated rendering of result list to support new Board UI

## 1.7.0 - March 10, 2022

### Fixed
- A bug where duplicate people where sometimes displayed in &quot;People I work with&quot;

## 1.6.0 - November 10, 2021

### Added
- Full support for <span style="color:white;background-color:black">&nbsp;dark&nbsp;</span> themes in MS Teams and SharePoint

## 1.5.0 - October 25, 2021

### Fixed
- An issue where clearing the search box in the configuration panel resulted in an error

## 1.4.0 - October 07, 2021

### Changed
- `61%` optimization in bundle size due to use of external modules
- Upgraded underlying Fluent UI component library from version 7 to 8

## 1.3.0 - April 19, 2021

### Fixed
- Fixed an issue where for some person results the fly-out wouldn&#x27;t render

## 1.2.0 - April 02, 2021

### Added
- The ability to include other user properties in the search so you can also search in job title and deparment details

### Fixed
- A bug where people results only included people close to the user doing the search. We now include the entire organization

### Removed
- We had to remove the ability to include external users since we now depend on a different endpoint in MS Graph to search

## 1.1.0 - March 03, 2021

### Fixed
- Added missing API permission People.Read for Microsoft Graph

## 1.0.0 - February 24, 2021

Initial release 🚀

