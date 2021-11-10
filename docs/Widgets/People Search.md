## 1.6.0 - November 10, 2021

### Added
- Full support for &lt;span style&#x3D;&quot;color:white;background-color:black&quot;&gt;&amp;nbsp;dark&amp;nbsp;&lt;/span&gt; themes in MS Teams and SharePoint

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

Initial release

