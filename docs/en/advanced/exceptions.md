---
headerDepth: 2
icon: debug
category: [FAQ]
order: 2
---

# Common Program Exceptions
This document covers solutions of **foreseeable client error**

## RuntimeEnvironmentException

- Exception: `RuntimeEnvironmentException`
  - Hint: `Unable to set registry key without enabling long path`
- Issue source: Windows long path limit is set to be limited at 256 characters by default
- Solution: Download [EnableLongPaths.zip](https://d.hut.ao/d/tools/EnableLongPaths.zip), unzip it and run `.reg` file
  as administrator

## Return Code: -10001

- This error comes directly from MiHoYo BBS, hints include
  - `Return Code: -10001`
  - `Return Code: -100`
- Issue source
  1. Cookie expired
  2. Network error
  3. System time is not accurate
- Solution
  1. In the account panel, execute `Refresh Cookies`
  2. Remove your account and add it again
  3. Sync your system time

## HttpRequestException Metadata Download Failed
### 403 (Forbidden) / 404 (Not Found)
Solution: Update your Snap Hutao to latest version

### 502 (Bad Gateway)
> Associated Issue: [https://github.com/DGP-Studio/Snap.Hutao/issues/100](https://github.com/DGP-Studio/Snap.Hutao/issues/100)

This HTTP Exception occurs when Snap Hutao failed to fetch remote resource (usually static image and configuration)

![HttpRequestException](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Tb2RUm1g6du5YeNuy_!!1797064093.jpg)


If you are using proxy software, you may need to turn it off or using TUN mode proxy;
otherwise you need to use [Windows 8 AppContainer Loopback Utility](https://www.telerik.com/fiddler/add-ons) to remove
[Windows APP Container Loopback limits](https://learn.microsoft.com/zh-CN/windows/iot-core/develop-your-app/loopback).
