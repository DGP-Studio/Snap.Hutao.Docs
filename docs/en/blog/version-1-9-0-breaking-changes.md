---
category: [Dev Logs]
order: 1
comment: false
---

# Explanation of Breaking Changes in Version 1.9.0

This document is applicable to users upgrading from Snap Hutao versions **1.4.11 to 1.8.4** to version 1.9.0 and higher.

## Introduction

Snap Hutao is a Windows sandbox application in MSIX format, providing the convenience of installation and the security of AppX applications. Mandatory code signing in installation packages is a crucial factor in ensuring security. If the installation package is modified, Windows App Installer will raise an error due to the signature being compromised, preventing user installation. We can see this practice everywhere in today's mobile operating systems. On the Windows platform, due to strict identity verification procedure, the prices of code signing certificates have remained high.

Before version 1.4.11, Snap Hutao used a self-signed certificate. In this mode, users had to manually install DGP-Studio's certificate to allow the installation of applications signed by DGP-Studio's certificate on their computers. Starting from version 1.4.11, Snap Hutao was listed on the Microsoft Store, and Microsoft provided a GUID `35C8E923-85DF-49A7-9172-B39DC6312C52` for Hutao's developer account. This GUID was used as the publisher name of Snap Hutao, providing a special free signature (only used for Microsoft Store apps). If you are accustomed to updating the Snap Hutao with MSIX packages, you should always see this GUID in the publisher column.

Listing on the Microsoft Store eliminated the need for Snap Hutao users to manually install the signing certificate and supported the distribution of Snap Hutao installation packages, reducing a significant amount of costs for the development team. However, the cumbersome approval process often disrupted the development plans of the Snap Hutao. Therefore, over the past six months, the development team has been seeking a solution. SignPath is a company based in Vienna, Austria, that provides code signing integration software. In early December 2023, the Snap Hutao development team successfully obtained sponsorship from the SignPath Foundation, allowing us to use their code signing certificates for Snap Hutao free of charge. This greatly assisted the Snap Hutao project by not only allowing the Snap Hutao to get rid of constraints of the Microsoft Store but also avoiding the high annual certificate fees.

**Due to the migration to a new certificate causing package name conflicts, Snap Hutao provides the following detailed explanation to assist all users in updating to version 1.9.0 and future versions.**

## Upgrade to Version 1.9.0

### Version Release

Snap Hutao version 1.9.0 is scheduled to be released on the weekend before Christmas 2023. We will publish the download links for the installation package through GitHub, Jihu GitLab, this official website, and the community.

### Uninstall Old Versions

Directly installing this package will cause problems depending on your system version due to package name and signature conflicts.

| System Version |                                                      Expected Issues                                                      |
| :------------: | :-----------------------------------------------------------------------------------------------------------------------: |
|   Windows 10   |                                  Unable to install; signature and package name conflicts                                  |
|   Windows 11   | Installation successful;<br/>Coexistence with old versions of Snap Hutao with the same name causes program runtime errors |

Due to the above issue, you need to uninstall the old version of Snap Hutao first and then install the 1.9.0 version package.

> **How to uninstall Snap Hutao**: Find Snap Hutao in the Start menu, right-click, and select uninstall; another quick method is to find it in Windows App Settings and choose uninstall.

**Your important data (including logged-in miHoYo accounts, wish records, achievement data, Spiral Abyss records, My Character cache data, and development plans) will not be lost, they are still stored in your local Hutao data directory on your computer.** However, the following data will be reset:

1. Snap Hutao runtime count
2. Data folder path **(if you previously modified the data directory, remember your data directory path)**
3. Hutao account (Hutao Passport) login status
4. Closed Hutao announcement flags
5. Development plan preset level information
6. Dashboard card status on the homepage
7. Auto-click function status

### Install the New Version

![1.8.5 Version Installer](/images/202312/1-8-5-installer.png)

Run the 1.9.0 version installer you have already downloaded. In the installation interface, you should see the publisher as `SignPath Foundation`. Click install to install the all-new version of Snap Hutao!

**If you modified the data directory location in the old version, you need to select the data directory path again in the settings after starting to restore the data. If you have never set a data directory, your data will be loaded directly without additional setup.**

## Future Plans

> Microsoft Store, future releases, software security...

In the Microsoft Store, the application publisher name must be a GUID assigned by Microsoft, not a "custom" name like `SignPath Foundation`. We anticipate that we will not continue to release updates in the Microsoft Store in the future unless we have a better way to handle coexistence issues between different signature packages. Although Snap Hutao will no longer go through Microsoft's certification, under SignPath's restrictions, Snap Hutao will only be able to compile and build release packages directly from the GitHub code repository. This means that the code in the user's installation package is 100% sourced from our GitHub code repository, and anyone has the authority to review and participate in development.

Starting from version 1.9.0 of the client, we will integrate a software update module to adapt to the new release method. We will minimize the operations required for user updates as much as possible. As this feature is brand new, we are still in the deployment process. Please continue to pay attention to our in-app announcements and community for information!
