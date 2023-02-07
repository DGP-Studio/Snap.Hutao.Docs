# 常见的程序异常

## Win32Exception
- 异常：`An error occurred trying to start process 'PowerShell' with working directory 'C:\WINDOWS\system32'. 文件名或扩展名太长`
- 问题来源：没有解除 Windows 目录长度限制
- 解决方案：下载 [EnableLongPaths.zip](https://d.hut.ao/d/tools/EnableLongPaths.zip) 后解压，运行解压后的 `.reg` 文件
