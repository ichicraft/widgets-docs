## 1.19.0 - June 29, 2023

### Fixed
- An issue where provisioning the app storage list failed due to limited permissions

## 1.18.0 - June 28, 2023

### Fixed
- An issue where improper initialisation of the Apps list caused an error in some occasions

## 1.17.0 - June 27, 2023

### Added
- A new experimental feature that enables integration with Azure Virtual Desktop applications and desktops
- The ability to reuse the same app across multiple widget variants

### Changed
- Storage of apps is now done in a designated SharePoint list instead of apps being part of the greater Ichicraft Boards configuration

## 1.15.0 - June 12, 2023



### Added
- Added new button to widget header to quickly add new apps
- CSS override options for more visual control over Apps
- Personalized URLs by using the tokens [User.Email] or [User.UPN]

### Changed
- Improved user experience in the User Configuration for adding/removing apps
- Improved Layout option behaviour
- Improved carousel design

## 1.13.0 - December 19, 2022

### Added
- Support for users and shared board owners to create their own apps

## 1.12.0 - November 30, 2022

### Fixed
- An issue where in some cases the app tiles continuously triggered redraws of hidden div elements (LineEllipsis)

## 1.11.0 - November 24, 2022

### Fixed
- An issue where a dialog doesn&#x27;t render nicely on mobile devices
- An issue where not in all cases an event is raised on app-click

### Changed
- There is now a 32 character limit on app titles
- If title doesn&#x27;t fit on two lines, we now show ellipsis (...) to make this clear

## 1.10.0 - September 05, 2022

### Added
- [#234] An even better way to manage apps with a redesigned layout picker
- A new setting to configure the click behavior of an app item

## 1.9.0 - August 25, 2022

### Added
- Functionality to group/categorize apps
- Easy image picker/uploader for app icons
- Option to use a Fluent UI font icon instead of an image for app icons
- Option to use characters as an app icon
- Option to style the app with different foreground and background colors

## 1.8.0 - June 15, 2022

### Changed
- Removed unnessecary cache feature that caused confusion

## 1.7.0 - June 02, 2022

### Fixed
- An issue with the carousel buttons not rendering correctly

## 1.6.0 - June 02, 2022

### Changed
- Improved user picker readability for long group names

## 1.5.0 - November 10, 2021

### Added
- Full support for <span style="color:white;background-color:black">&nbsp;dark&nbsp;</span> themes in MS Teams and SharePoint

## 1.4.0 - October 25, 2021

### Fixed
- An issue where clearing the search box in the configuration panel resulted in an error

## 1.3.0 - October 07, 2021

### Changed
- `85%` optimization in bundle size due to use of external modules
- Upgraded underlying Fluent UI component library from version 7 to 8

## 1.2.0 - February 04, 2021

### Changed
- Updates to Portuguese translations after review
- Improvements to exception handling and logging

## 1.0.0 - March 16, 2020
Initial release