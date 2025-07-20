---
headerDepth: 2
category: [Announcement]
icon: iconfont icon-debug
order: 2
comment: false
description: Snap Hutao is an open-source program released on GitHub. We also utilize the GitHub Issues feature to collect feedback and address any issues. You can submit problem reports through GitHub Issues.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/statements/bug-report.html
---

# Submitting a Bug Report

If you encounter a reproducible issue or one that you cannot fix yourself while using Snap Hutao, you can inform the developers by submitting a bug report.

![suggestion](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01jXBMbe1g6du15k9kx_!!1797064093.jpg_.webp)

## Before Submitting an Issue

Before creating a new Issue, please complete the following checklist:

- [ ] Ensure you are using the latest version of the Snap Hutao client.
- [ ] Use the search function to look for your issue and check the [Known Issues](../advanced/known-issue.md) document.
- [ ] Search the project's Issue page to see if there are any existing issues that are the same or similar.

If you still cannot find a solution after completing the above steps, you can create a new Issue on GitHub.

## How to Submit an Issue

### Preparation Before Submitting an Issue

When submitting an Issue, please make sure to provide the following information:

1. **Device Information**

   - [ ] Your device ID.
   - [ ] Your operating system version.

2. **Issue Description**

   - [ ] Describe your issue in detail so that the developers can reproduce the problem based on your description.
     - How was the issue triggered?
     - What kind of error messages were displayed by the program or the operating system?
     - What troubleshooting steps have you tried, and what were the results?

3. **Program Crash Information**

- If your issue involves a program crash, please look for `.NET errors` related to Snap Hutao in the Windows Event Viewer and attach the detailed content in your Issue.

### How to Submit the Issue

- Go to the [GitHub submission page](https://github.com/DGP-Studio/Snap.Hutao/issues/new/choose).
- Fill in the content according to the template and submit.

If you are not sure what a good issue looks like, please refer to some [high-quality issues](https://github.com/DGP-Studio/Snap.Hutao/issues?q=is%3Aissue%20label%3A%E4%BC%98%E8%B4%A8%E9%97%AE%E9%A2%98).

## Remote Debugging

When developers cannot reproduce certain issues on their own devices, they may need to perform remote debugging to locate the problem. If you agree to participate in remote debugging, a designated administrator will add you as a friend via QQ/Discord and invite you to a remote assistance group for communication.

**The computer participating in remote debugging must meet the following conditions:**

- At least 15GB of free hard drive space.
- Sufficient network traffic to support the debugging operations.

### Preparation Before Debugging

1.  Perform steps `1~3` in [Contribute Code - Setting Up Snap Hutao Project](../development/contribute.md).
2.  Download and install the [Netease UU](https://uuyc.163.com/) remote tool or [Parsec](https://parsec.app/).

Remote debugging will help us solve problems more quickly. Thank you for your support!
