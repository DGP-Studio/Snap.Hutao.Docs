---
headerDepth: 2
icon: iconfont icon-warn
category: [FAQ]
order: 2
comment: false
description: Snap Hutao utilizes specific error codes to indicate particular errors. If you encounter a program error during usage and have an error code, you can try searching for it on this page.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/advanced/exceptions.html&has_description=False
---

# Common Program Exceptions

This document lists common issues and corresponding solutions that may occur while using Snap Hutao.

---

## **Return Code: 2002**

- **Source**: Information returned by MiHoYo
- **Cause**: The miHoYo BBS account is not initialized.
- **Solution**:
  - MiYouShe account: Use the official MiYouShe mobile app to log in to your account and set a community username to initialize it.
  - HoYoLAB account: Use the official HoYoLAB mobile app or the web version to log in to your account and set a community username to initialize it.

## **Return Code: -10001**

- **Source**: Information returned by MiHoYo, including `Return Code: -10001` and `Return Code: -100`
- **Cause**:
  1. Cookie expired or network error.
  2. System time error.
- **Solution**:
  1. Click "Refresh Cookie" in the account panel.
  2. Remove the account and add it again.
  3. Enable automatic time synchronization in system settings and synchronize immediately.

## **Status: 1034 Verification Failed**

- **Cause**: The Real-time Notes feature is blocked by the MiHoYo anti-bot system.
- **Solution**:
  1. Go to the "Real-time Notes" feature.
  2. Click the "Verify Current User and Role" button in the upper right corner.
  3. Complete the verification as prompted.
  4. If the problem persists, repeat the above steps.

::: warning Notes

1. Changing your password can reset the device login status.
2. If multiple bots or devices frequently access MiYouShe data, it may trigger MiYouShe's security restrictions, which cannot be avoided temporarily.
   :::

## **HttpRequestException Metadata Download Failed**

### **ConnectionError**

- **Cause**: Failed to connect to the Snap Hutao server.
- **Solution**: Check your network proxy or if you have [unlocked Windows container Loopback limit](loopback.md).

### **403 / 404 / 418**

- **Solution**: Update to the [latest version](../quick-start.md#全新安装).

### **502**

- **Cause**: Failed to connect to the Snap Hutao server.
- **Solution**: Check your network or contact the development team.

## **`653366069` Request Exception**

- **Cause**: Unable to connect to the MiYouShe / HoYoLAB server.
- **Solution**:
  - Ignore occasional errors.
  - If the error persists, check your network connection.
  - Check if you have [unlocked Windows container Loopback limit](loopback.md).

## **Resource Download Failed**

- Failure to download some static resources will not significantly affect usage; the client will automatically retry when needed.

### **`Received an unexpected EOF or 0 bytes from the transport stream.`**

- **Cause**: Download limit or network fluctuations.
- **Solution**: Close Snap Hutao and try again later, or switch to a different network environment.

## **Problem Finding Required Modules**

- **Error Messages**:
  1. Could not read any module, the protection driver may have been loaded.
  2. Timeout when finding modules.
- **Solution**: Snap Hutao will close the game process; the user can try launching the game again.

## **Application Installation Failed, Error Message: Internal Error 0x80073D05**

- **Cause**: Residual files were not cleaned up after uninstallation.
- **Solution**:
  1. Open `%appdata%/../Local/Packages`.
  2. Delete the `60568DGPStudio.SnapHutao_wbnnev551gwxy` folder (use `NSudo_LG` if permissions are insufficient).

## **Prompt 0x8007007E or Cannot find the specified file/module**

- **Cause**: Missing MSVC runtime library.
- **Solution**: Install the latest version of [MSVC runtime library (x64)](https://aka.ms/vs/17/release/vc_redist.x64.exe).
