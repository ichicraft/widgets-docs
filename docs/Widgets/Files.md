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