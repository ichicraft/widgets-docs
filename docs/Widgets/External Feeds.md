## 1.24.0 - June 19, 2025

### Added
- Italian 🇮🇹 translations added, allowing Italian-speaking users to navigate and use the software in their native language.

## 1.23.0 - June 03, 2025

### Fixed
- Resolved an issue where the widget would render with an error if items couldn&#x27;t be stored in the browser cache

## 1.22.0 - February 19, 2025

### Added
- Polish 🇵🇱 translations added, allowing Polish-speaking users to navigate and use the software in their native language
- Person detail cards added to user picker controls used in widget settings

### Changed
- Various under-the-hood performance updates 

### Fixed
- An issue where external users with capital &#x27;#EXT#&#x27; in their username weren&#x27;t correctly recognized as external

## 1.21.0 - September 10, 2024

### Changed
- Improved German translations.

## 1.20.0 - August 14, 2024

### Update
- Update CORS reverse proxy url to use our own domain instead of a more generic azurewebsites.net url

## 1.19.0 - March 21, 2024

### Changed
- Upgraded Fluent UI 8 dependency to match version used by Boards Core.

## 1.18.0 - February 08, 2024

### Changed
- Improved translations (FR)

## 1.17.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## 1.16.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic


## 1.15.0 - November 30, 2023

### Changed
- Optimization of widget script bundle size

## 1.14.0 - August 25, 2023

### Added
- Support for an extra field that could contain the image url: **media.group &gt; media:thumbnail**

## 1.13.0 - August 15, 2023

### Fixed
- An issue where the widget only shows one RSS feed at a time

## 1.12.0 - August 15, 2023

### Added
- Support for an extra field that could contain the image url: **media:thumbnail**

### Changed
- Complete refactoring of solution to match new standards

## 1.11.0 - July 14, 2023

### Added
- Support for an extra field that could contain the image url: **itunes:image**

### Changed
- Upgraded UI to use new carousel

## 1.10.0 - May 01, 2023

### Added
- An icon depicting that a link is taking a user outside the current web page or client

## 1.9.0 - March 07, 2023

### Added
- The ability to detecting feed item images by looking for image urls in the description, allowing for more feeds to display images

## 1.8.0 - November 10, 2021

### Added
- Full support for <span style="color:white;background-color:black">&nbsp;dark&nbsp;</span> themes in MS Teams and SharePoint

## 1.7.0 - November 02, 2021

### Added
- Support for rendering images on feeds that conform to Media RSS Specification

### Fixed
- An issue where a feed item with missing pubDate caused the widget to crash

## 1.6.0 - October 25, 2021

### Fixed
- An issue where clearing the search box in the configuration panel resulted in an error

## 1.5.0 - October 07, 2021

### Changed
- `70%` optimization in bundle size due to use of external modules
- Upgraded underlying Fluent UI component library from version 7 to 8

## 1.4.0 - April 21, 2021

### Fixed
- A bug where for some feeds, images could not be loaded
- A bug where for some feeds, the publication date of items wasn&#x27;t interpreted correctly
- A situation where for failing feeds, the widget kept showing a spinner

## 1.3.0 - February 04, 2021

### Changed
- More improvements to exception handling and logging

## 1.2.0 - February 04, 2021

### Changed
- Updates to Portuguese translations after review
- Improvements to exception handling and logging

### Fixed
- Fixed a bug where updating admin configuration as an admin didn&#x27;t result in clearing local cache

## 1.0.0 - March 17, 2020
Initial release 🚀