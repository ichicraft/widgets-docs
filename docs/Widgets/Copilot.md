## 1.5.0 - February 24, 2026

### Added
- Input support for prompts
   - Format your prompt input between square brackets like so: Summarize this document: [file]
   - The prompt will be presented like this: Summarize this document: **file**
   - When the user clicks on the prompt, they will be asked to complete it first, before it is executed.

### Fixed
- Pay-as-you-go licensing check in Microsoft Teams client &amp; web for SharePoint agents

## 1.4.0 - October 16, 2025

### Added
- Support for longer instructions for prompts
- Descriptions for prompts, displayed as a tooltip when hovering over them

### Changed
- Validate Copilot license when running in MS Teams
- Improved UI for chat and prompts

### Fixed
- An issue where the Copilot agent timed out when missing data from cache (now triggers an automatic reload)
- Chat inline suggestions menu overflowing outside the widet

## 1.3.0 - October 03, 2025

### Changed
- Widget is refactored to use centrally provided logging components.

## 1.2.0 - September 01, 2025

### Changed
- Increased widget&#x27;s max width from 2 to 6 columns
- Our monitoring services now support tracking over ichicraft.com domain

## 1.1.0 - August 19, 2025

### Added
- Tooltips for widget permissions

### Changed
- Removed Copilot license check, because we cannot validate the pay-as-you-go license model
- Removed User.Read permission

### Fixed
- Missing translations in default widget description

## 1.0.0 - August 18, 2025

Initial release 🚀