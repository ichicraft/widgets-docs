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