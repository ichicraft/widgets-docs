## 1.12.0 - November 28, 2025

### Fixed 
- The search modal dialog no longer continues to open when navigating to other boards after doing a search through the SharePoint search bar

## 1.11.0 - October 27, 2025

### Fixed
- A missing required API permission to search for external items has been added
- Icons used by Azure DevOps have been restored

## 1.10.0 - October 03, 2025

### Changed
- Widget is refactored to use centrally provided logging components.

## 1.9.0 - September 12, 2025

### Added
- Saved searches, allowing users to quickly repeat previous searches

### Changed
- Replaced the **“History”** layout with **“Searches”**
- Improved UI of the search dialog
- Monitoring services now support tracking on the &#x60;ichicraft.com&#x60; domain

### Fixed
- Resolved an issue where the search dialog opened when switching boards if used as a SharePoint Search Center


## 1.8.0 - July 14, 2025

### Added
- URL-based query support for central search bar

### Changed
- Added some details to required API permissions needed to run the widget

## 1.7.0 - June 19, 2025

### Added
- Italian 🇮🇹 translations added, allowing Italian-speaking users to navigate and use the software in their native language.

## 1.6.0 - May 19, 2025

### Fixed
- The widget should no longer crash when deselecting data sources in the configuration panel

## 1.5.0 - February 19, 2025

### Added
- Polish 🇵🇱 translations added, allowing Polish-speaking users to navigate and use the software in their native language
- Person detail cards added to user picker controls used in widget settings

### Changed
- Use native SharePoint people card fly-out in favor of MGT card to reduce JavaScript bundle size
- Various under-the-hood performance updates 

### Fixed
- An issue where in rare cases, the widget could fail rendering when no tab was selected
- An issue where external users with capital &#x27;#EXT#&#x27; in their username weren&#x27;t correctly recognized as external

## 1.4.0 - December 16, 2024

### Added
- Custom sort options
- File Type filter for file scopes
- Add Manage Access option for files

### Changed
- Improve Share dialog for files

## 1.3.0 - October 09, 2024

### Updated
- Some internals

## 1.2.0 - September 19, 2024

### Added
- A new [SP.CurrentLanguage] token to be used in query templates, which will be replaced by the user&#x27;s current UI language in SharePoint.

### Changed
- Improved some tooltips with links to documentation
- Improved News scope template.  Now sorted from new to old, and localized articles are filtered based on the user&#x27;s language.

### Fixed
- Acronyms not showing up in the promoted results
- Wildcard Search toggle not working
- Custom sort order not working


## 1.1.0 - September 10, 2024

### Fixed
- An issue where a certain API permission wasn&#x27;t requested during installation
- An issue where in some scenarios, date formatting caused a fatal exception
- Some UI issues in dark mode

## 1.0.0 - September 07, 2024

Initial release 🚀