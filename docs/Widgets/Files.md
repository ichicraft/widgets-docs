## 1.22.0 - March 14, 2025

### Fixed
- The location picker in the &#x27;New Document&#x27; flow now correctly displays all sites a user has access to.
- Various issues affecting file previews for OneDrive-stored files have been resolved.
- OneDrive tabs now correctly display an icon.

### Changed
- Introduced a new site picker for selecting site collections in SharePoint tabs. This also resolves an issue where not all sites were available in larger environments.

## 1.21.0 - March 03, 2025

### Fixed
- An issue where the breadcrumb in the tab editor wasn&#x27;t always correct
- An issue where previewing OneDrive files didn&#x27;t work properly
- An issue where selecting multiple sites in the tab editor didn&#x27;t reflect correctly in the tab itself
- An issue where using Office templates to create files didn&#x27;t work well in Teams personal apps or root site collections

## 1.20.0 - February 19, 2025

### Added
- Polish 🇵🇱 translations added, allowing Polish-speaking users to navigate and use the software in their native language
- Person detail cards added to user picker controls used in widget settings

### Changed
- Various under-the-hood performance updates 

### Fixed
- An issue where external users with capital &#x27;#EXT#&#x27; in their username weren&#x27;t correctly recognized as external

## 1.19.0 - January 14, 2025

### Fixed
- An issue where Office templates were not available in the Teams client, due to it being detected as a mobile platform.

## 1.18.0 - January 08, 2025

### Fixed
- An issue where the Sites.ReadWrite.All permission was expected by the Graph API, but not required by the widget
- An issue where the My Files context was opened when trying to create files from a OneDrive tab that wasn&#x27;t My OneDrive
- An issue where an undefined error would occur when a tab was missing oneDriveSettings

## 1.17.0 - December 16, 2024

### Added
- Ability to select a Drive while browsing files (instead of always browsing the root drive)
- Ability to create new files
  - Create file based on admin-defined Office templates
  - New folder
  - Upload file
- New location picker dialog to choose a file location
- Additional menu options for files
  - Copy link
  - Manage access
  - Favorite / Unfavorite
  - Delete
  - Rename
  - Move to
  - Copy to
  - Details
- Improved filter system
  - Choose which filters to show in a tab
  - Custom Aggregation filters
- Query template support for &#x27;Flat list&#x27; tabs
- Context menu support for Folders

### Changed
- Improved tab UI
- Improved Share dialog

## 1.16.0 - September 10, 2024

### Changed
- Improved German translations.

## 1.15.0 - June 17, 2024

### Fixed
- Opening files from within Teams no longer goes through the browser

### Added
- File preview option for Excel files

### Changed
- UI improvements
- Use new url dialog for file previews
- Improve error handling when user is missing needed M365 licenses

### Fixed
- &#x27;Open in Teams&#x27; url not working anymore

## 1.13.0 - March 21, 2024

### Changed
- Upgraded Fluent UI 8 dependency to match version used by Boards Core
- Small UI fixes

## 1.12.0 - February 08, 2024

### Fixed
- A bug where a user, trying load a Team or Site files tab without having proper permissions, got a generic error message without explaining what was wrong

### Changed
- Improved translations (FR)

## 1.11.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## 1.10.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic


## 1.9.0 - November 30, 2023

### Fixed
- A bug where using createdBy filter on Recent tab caused an error
- A bug where using either modifiedBy or createdBy filter, suggestions weren&#x27;t rendered correctly

### Changed
- Improved exception logging
- Optimization of widget script bundle size

## 1.8.0 - June 13, 2023

### Added
- A new preview option for files

### Fixed
- An issue where the Recent tab failed when a user no longer has access to one ore more files or to the sites these files are stored in
- An issue where Loop files that reside in a new hidden storage location can&#x27;t programmatically be accessed properly, resulting in an error
- An issue where only 10 items were visible in the default Favorites t

## 1.7.0 - April 13, 2023

### Fixed
- an issue where the file size of the widget bundle file was very large due to invalid sharing of external libraries

## 1.6.0 - December 19, 2022

### Added
- Fully customizable tabs
- Advanced filter capabilities
- Showing files not only from OneDrive but also from Teams &amp; SharePoint
- Different ways to open a file directly from the widget
- Flexible display options like column selection, (default) sorting, flat/hierarchy view, etc
- Sharing capabilities

### Changed
- Renamed: &quot;OneDrive Widget&quot; is now &quot;Files Widget&quot;

## 1.5.0 - October 07, 2021

### Changed
- `41%` optimization in bundle size due to use of external modules
- Upgraded underlying Fluent UI component library from version 7 to 8

## 1.4.0 - June 30, 2021

### Fixed 
- An issue where a missing webDavUrl property can result in an exception in the widget

## 1.2.0 - June 30, 2021

### Changed
- Implementation of logging functionality
- Updates to Portuguese resources

## 1.0.0 - January 29, 2020
Initial release 🚀