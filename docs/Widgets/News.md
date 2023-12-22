## 1.29.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## 1.28.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic


## 1.27.0 - December 11, 2023

### Changed
- The widget now uses higher resolution images for news articles

## 1.26.0 - November 30, 2023

### Changed
- Optimization of widget script bundle size

## 1.25.0 - November 23, 2023

### Fixed
- Slow initial loading time
- Removed icon thumbnail image

## 1.24.0 - November 13, 2023

### Changed
- Implemented retrying fetching news articles on sporadic API errors

### Added
- Auto refreshing is now available, making sure items keep updating in the background when window is open for a longer period of time



## 1.23.0 - November 08, 2023

### Fixed
- An issue where once boosted news articles were no longer visible in certain configurations

## 1.22.0 - November 02, 2023

### Changed
- Sites now display the Site logo thumbnail instead of the Site logo
- News posts now use a different thumbnail url, resulting in higher resolution images in most cases

## 1.21.0 - October 11, 2023

### Added
- News preview in admin config
- Option to change the overlay color and opacity

### Changed
- Improved UX of user picker fields
- Empty widget now shows thumbnail icon

## 1.20.0 - October 02, 2023

### Added
- Autoplay on slides
- Audience mechanism on selected sites
- Expanded push mechanism on selected sites
- Ability for users to manage their own sites

### Changed
- Improved news post rendering
- Improved overall UI and UX
- Improved site selection functionality
- Sites now display their own icon
- Simplified followed sites feature

## 1.19.0 - September 01, 2023

### Changed
- Site titles in news items are now clickable and navigate to appropriate site

### Fixed
- An issue where searching for sites in the followed sites picker resulted in endless refreshes
- An issue where in a specific scenario, news items could show up twice in the widget

## 1.18.0 - August 22, 2023

### Fixed
- An issue with error handling for News article thumbnails
- Unnecessary use of the date-fns package

## 1.17.0 - August 14, 2023

### Added
- Number of views per article
- A new &#x27;Open in new window&#x27; button from within a dialog
- An animation when hovering over an article

### Changed
- The number of articles placed on a grid row, offering more space for articles
- Small visual improvements

### Fixed
- A bug where sometimes the recent sites can&#x27;t be loaded in the Create News Post dialog

## 1.16.0 - July 11, 2023

### Added
- Support for SharePoint audience targeting
- Possibility to create new news articles straight from the widget header
- Support for the Repost Page content type (news from external sources)

### Changed
- Carrousel is updated to reflect new style

## 1.15.0 - December 15, 2022

### Changed
- Allow Shared Board owners to specify the sites that serve as news source for the widget


## 1.14.0 - November 11, 2022

### Changed
- Greatly improved the loading speed of the widget

## 1.13.0 - September 02, 2022

### Added
- [#239] Support for boosted news articles
- Optional click event tracking for Boards Analytics feature

## 1.12.0 - June 17, 2022

### Fixed
- An issue where (hub) site navigation was visible when viewing a news article in the lightbox
- An issue where filtering for items coming from the root site also included news articles from other sites
- An issue where adding sites to followed sites didn&#x27;t clear local cache of followed sites immediately

## 1.11.0 - May 17, 2022

### Changed
- Reverted API permissions again to Sites.Read.All since we no longer use Graph API to follow/unfollow but use SharePoint Social API instead

### Fixed
- An issue caused by the SharePoint API and the Graph API returning inconsistent lists of followed sites

## 1.10.0 - May 11, 2022

### Fixed
- Revert required API permission level to Sites.ReadWrite.All because (un)following sites requires these permissions

## 1.9.0 - April 24, 2022

### Added
- All new design for this widget that goes along nicely with the new design for Ichicraft Boards

## 1.8.0 - November 10, 2021

### Added
- Full support for <span style="color:white;background-color:black">&nbsp;dark&nbsp;</span> themes in MS Teams and SharePoint

## 1.7.0 - October 25, 2021

### Fixed
- An issue where clearing the search box in the configuration panel resulted in an error

## 1.6.0 - October 07, 2021

### Changed
- `72%` optimization in bundle size due to use of external modules
- Upgraded underlying Fluent UI component library from version 7 to 8

## 1.5.0 - August 25, 2021

### Updated
- Improved search experience when adding sites to configured source sites

## 1.4.0 - April 19, 2021

### Fixed
- Fixed a bug where news articles wouldn&#x27;t open in a dialog in MS Viva Connections

## 1.3.0 - March 12, 2021

### Fixed
- Fixed a bug where opening items from other domains (in multi-geo setup) in a dialog resulted in an error

## 1.2.0 - March 12, 2021

### Added
- Support for Multi-Geo tenants
- Support for mult-language content

### Changed
- Improved error handling and exception logging
- Updates in Portuguese resources after review

### Fixed
- Minor bug where essential/pushed sites were in some scenarios also rendered as followed sites in user config

## 1.0.0 - March 16, 2020
Initial release