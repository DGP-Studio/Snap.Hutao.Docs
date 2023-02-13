# 常见的程序异常

## Win32Exception
- 异常：`An error occurred trying to start process 'PowerShell' with working directory 'C:\WINDOWS\system32'. 文件名或扩展名太长`
- 问题来源：没有解除 Windows 目录长度限制
- 解决方案：下载 [EnableLongPaths.zip](https://d.hut.ao/d/tools/EnableLongPaths.zip) 后解压，运行解压后的 `.reg` 文件

## Return Code: -10001
- 该异常实际上来源于米游社的返回信息，包括：
  - `Return Code: -10001`
  - `Return Code: -100`
- 问题来源：Cookie 过期或网络异常
- 问题排查方案：
  - 在设置中，使用签到功能，判断 Cookie 是否可用
    - 若失败，可多尝试几次
    - 若多次失败，则 Cookie 失效。在胡桃工具箱中重新添加该帐号