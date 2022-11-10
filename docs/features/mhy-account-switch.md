---
headerDepth: 0
---

# 米游社多帐号切换

::: tip
本文档所描述的帐号切换指的是用于获取游戏数据的米游社帐号，不是原神游戏内的帐号
:::

## 添加一个新的米游社帐号

- 在程序主界面的左下角，设置的上方管理你的米游社帐号。在弹出的面板中你可以
  - 选择通过内置浏览器登录
    - 部分杀毒软件可能会对获取到的Cookie进行静默处理，导致Cookie不完整，如有此类错误提示，请自行关闭并重试
  - 或直接输入米游社 Cookie 来添加你的米游社帐号至胡桃工具箱
        - **在登录帐号时，你应该使用浏览器的隐身模式登录米游社，而不是退出你当前的米游社帐号**
- 完成后，你就可以在帐号管理面板切换已登录的米游社帐号了

![米游社多帐号切换](/images/202210/hutao-login.png)

## 如何获取 Cookie

### 浏览器书签

- 将 <a href="javascript:(()=>{_=(n)=>{for(i in(r=document.cookie.split(';'))){var a=r[i].split('=');if(a[0].trim()==n)return a[1]}};c=_('account_id')||alert('无效的 Cookie , 请重新登录!');c&&navigator.clipboard.writeText(document.cookie)&&alert(' Cookie 已经成功获取, 点击确定将 Cookie 复制到剪贴板。')})();" class="badge tip" style="padding: .25rem .5rem;border-radius: .25rem;font-size: .85rem;">米游社·获取Cookie</a> 添加为浏览器书签
  - 你可以直接拖动上方绿色方块中的链接到你的书签栏来执行该步骤

- 在无痕窗口中打开 [米游社](https://bbs.mihoyo.com/ys) ，登录帐号
- 点击添加的书签
- 此时，你的米游社 Cookie 应该会显示在弹出的窗口中
- 点击确定， Cookie 就被复制到剪贴板了

### 控制台执行脚本

```javascript
(() => {
    _ = (n) => {
        for (i in (r = document.cookie.split(';'))) {
            var a = r[i].split('=');
            if (a[0].trim() == n)
                return a[1]
        }
    };
    c = _('account_id') || alert('无效的 Cookie , 请重新登录!');
    if(c)
        console.log(document.cookie) 
    c && navigator.clipboard.writeText(document.cookie) && alert(' Cookie 已经成功获取, 点击确定将 Cookie 复制到剪贴板。如果未复制入剪贴板请手动复制下方的文字。')
})()
```

- 启动浏览器，打开米游社并登录
- 按F12打开浏览器控制台
- 执行上方的代码，即可获取你的米游社 Cookie

## 常见问题：米游社帐号登录状态经常失效，添加的帐号消失

* 我们通过储存帐号的米游社 Cookie 来维持登录状态。
* 但是当用户在浏览器或其它设备上**注销帐号**后， 维持登录状态的 Cookie 将**失效**。
* 这会导致胡桃工具箱上的米游社帐号在启动后被自动移除。
* 此情况也可能因为网络连接问题导致无法检查Cookie有效性，故出现此情况后请优先重启胡桃工具箱。
