## 1.24.0 - September 09, 2026

### Added
- Plans that were shared with you through a group now appear in the Planner tab. You can add tasks to them and open their tasks, the same as your own plans.
- Swedish 🇸🇪, Danish 🇩🇰, Norwegian 🇳🇴, Finnish 🇫🇮 and Turkish 🇹🇷 language support.

### Changed
- Dutch 🇳🇱 texts now address you informally and use consistent wording throughout.
- The Planner tab opens faster. Plan and bucket lists are fetched when you start adding or editing a task, instead of every time the widget loads.
- The plan and bucket fields in task details are no longer selectable when there is nothing else to choose, and a plan with a single bucket fills that bucket in for you.
- A plan that has no buckets now says so in the add-task menu, instead of offering an empty list with no explanation.
- Various under-the-hood updates to keep the widget current with the platform.

### Fixed
- The plan name is shown under each Planner task again, instead of being left blank.
- The bucket field in Planner task details now lists the buckets of the task's plan. It was permanently empty and greyed out.
- A task you add while the Planner tab is showing only tasks assigned to you is now assigned to you, so it no longer disappears the next time the list refreshes.
- The plan field in task details now offers only the plans a task can actually be moved to, instead of accepting a move that fails when you save.
- Changing a task's plan now clears its bucket and asks you to pick one that belongs to the new plan, instead of failing on save.
- Notes added to a task you have just created are now saved without reporting an error.
- An error message from a failed action now disappears once a later action succeeds or you close the task, instead of staying on screen.
- Links on To Do tasks now open in an isolated tab, and only ordinary web addresses are opened.

## 1.23.0 - August 25, 2026

### Changed
- Language files are now loaded on demand instead of being bundled with the widget, reducing its download size.

## 1.22.0 - August 10, 2026

### Added
- Hungarian, Romanian and Simplified Chinese translations
- Website url for Admin Center

### Changed
- Improved UI for admin & user config

## 1.21.0 - October 03, 2025

### Changed
- Widget is refactored to use centrally provided logging components.

## 1.20.0 - August 19, 2025

### Changed
- Removed User.Read.All permission (replaced by Directory.Read.All, which is granted by default)

## 1.19.0 - June 19, 2025

### Added
- Italian 🇮🇹 translations added, allowing Italian-speaking users to navigate and use the software in their native language.

## 1.18.0 - April 24, 2025

### Added
- Support was added for linked resources in To Do, such as email attachments for flagged emails.

## 1.17.0 - March 12, 2025

### Changed
- Improve polish translations

## 1.16.0 - March 05, 2025

### Fixed
- An issue where it was impossible to filter on specific plans in the Planner tab

## 1.15.0 - February 19, 2025

### Added
- Polish 🇵🇱 translations added, allowing Polish-speaking users to navigate and use the software in their native language
- Person detail cards added to user picker controls used in widget settings

### Changed
- Various under-the-hood performance updates 

## 1.14.0 - January 20, 2025

### Fixed
- An issue where priority and due date filters didn&#x27;t work correctly for To Do tasks

## 1.13.0 - December 16, 2024

### Added
- Badge count when the widget is used as a buddy in the new Buddy Bar

## 1.12.0 - November 11, 2024

### Fixed
- An issue that caused the Planner tab to fail rendering when tasks were assigned to users that no longer exist
- An issue where Shared Board owners could select personal To Do lists that don&#x27;t work for other users
- An issue where users without a M365 license or without their mailbox in M365, caused the widget to fail in the To Do tab without giving a proper error message

## 1.11.0 - November 08, 2024

### Added
- &#x27;Edit&#x27; functionality for ToDo and Planner tasks
- &#x27;Add&#x27; functionality for Planner tasks
- &#x27;Checklist&#x27; functionality for Planner tasks

### Changed
- Improved UI for tasks


## 1.10.0 - September 10, 2024

### Changed
- Improved German translations.

## 1.9.0 - March 21, 2024

### Changed
- Upgraded Fluent UI 8 dependency to match version used by Boards Core.

## 1.8.0 - December 22, 2023

### Fixed
- An issue where duplicate diagnostics were logged

## 1.7.0 - December 13, 2023

### Changed
- Internal refactoring of logging logic

### Fixed
- An issue where &quot;recently completed tasks&quot; showed all completed tasks, regardless of when they were completed

## 1.6.0 - November 30, 2023

### Changed
- Optimization of widget script bundle size

## 1.5.0 - December 16, 2022

### Changed
- The default setting is now that users can update configuration of this widget

## 1.4.0 - December 14, 2022

### Added
- Support for lists in To Do (show list info, choose lists to show, add items to list)
- Choose which plans to show in Planner pane
- Filter capabilities on both Planner &amp; To Do tasks
- Option to show either To Do or Planner (not both per se)

### Changed
- Visual improvements

## 1.3.0 - October 07, 2021

### Changed
- `81%` optimization in bundle size due to use of external modules
- Upgraded underlying Fluent UI component library from version 7 to 8

## 1.0.0 - January 29, 2020
Initial release 🚀