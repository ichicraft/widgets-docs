## 1.1.0-alpha.1 - September 09, 2022

## 20220909.1 - September 09, 2022

## 20220909.1 - September 09, 2022

## 1.18.0 - August 25, 2022

### Added
- Option to open a Power BI visual in full screen

## 1.17.0 - July 21, 2022

### Changed
- PBI content in hidden carrousel slides is no longer loaded in the background. Instead, it&#x27;s loaded upon navigating to the slide. This is to prevent unnecessary burdening of the browser.

## 1.16.0 - July 12, 2022

### Fixed
- An issue where long words with no spaces could break the UI of list views of Power BI content

### Changed
- Behavior of zooming in on content is now consistent with the Tableau Reports widget. This means that to open the zoomed in report you now have to click either the title of the widget or the zoom button in the widget header. Clicking on the content (report) itself will no longer 

## 1.15.0 - June 22, 2022

### Changed
- Power BI content not visible in the carousel is now lazily loaded, giving priority to initially visible content

## 1.14.0 - May 24, 2022

### Changed
- Added automatic browser refresh when token retrieval fails
- Improved resizing of widgets and effect this has on responsive reports
- Used PBI bootstrap to speed up loading of PBI content
- Introduced a retry button for when the widget isn&#x27;t able to render somehow

## 1.13.0 - May 13, 2022

### Fixed
- An issue where report page navigation didn&#x27;t offer a scroll bar if the number of pages exceeds page height

### Changed
- Color scheme used by report page navigation

## 1.12.0 - May 10, 2022

### Added
- An option to render alternative page navigation next to a report

## 1.11.0 - May 06, 2022

### Fixed
- An issue where a custom PBI Content title was falsely overwritten in some scenarios

## 1.10.0 - May 05, 2022

### Added
- New layout mode &quot;List&quot;, to display a list of items instead of displaying Power BI content directly.

## 1.9.0 - May 03, 2022

### Added
- Possibility to select a specific page in an embedded report to display by default
- Possibility to hide page navigation in embedded reports

### Fixed
- Handling of title generating based on selected Power BI content

## 1.8.0 - May 02, 2022

### Added
- The possibility to open different Power BI content in the lightbox than what is shown in the widget.

### Changed
- The term &quot;(Power BI) Tile&quot; is replaced with &quot;(Power BI) Content&quot; to better reflect that we support different types of content to be rendered.

## 1.7.0 - March 08, 2022

### Added
- The ability to pick and display a report directly from a workspace

### Changed
- Automatic authentication token refresh in the background (for long browser sessions)
- Sorting of dropdown lists is now alphabetical

## 1.6.0 - November 10, 2021

### Added
- Full support for <span style="color:white;background-color:black">&nbsp;dark&nbsp;</span> themes in MS Teams and SharePoint

## 1.5.0 - October 25, 2021

### Fixed
- An issue where clearing the search box in the configuration panel resulted in an error

## 1.4.0 - October 07, 2021

### Changed
- `84%` optimization in bundle size due to use of external modules
- Upgraded underlying Fluent UI component library from version 7 to 8

## 1.3.0 - June 04, 2021

### Added
- Support for Power BI Apps, you can now view complete reports/apps in a single widget

### Changed
- Improved visualization of loading Power BI data

## 1.2.0 - February 04, 2021

### Changed
- Updates to Portuguese translations after review
- Improvements to exception handling and logging
### Fixed
- Fixed a bug where updating admin configuration as an admin didn&#x27;t result in clearing local cache

## 1.0.0 - March 16, 2020
Initial release