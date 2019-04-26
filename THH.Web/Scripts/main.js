
var hzy = {
    //存放dom 对象类
    domObj: {
        //左边菜单外部容器
        hzyNavMenu: $('nav.hzy-navMenu'),
        //选项卡 div 容器
        hzynavTabcenter: $('content .hzy-navTab-center'),
        //
        pageContent: $('#pageContent'),
        //皮肤样式名称
        skinNames: ['index-skin-primary',
            'index-skin-cyan',
            'index-skin-green',
            'index-skin-indigo',
            'index-skin-grey',
            'index-skin-pink',
            'index-skin-purple',
            'index-skin-red',
            'index-skin-teal',
            'index-skin-orange'],
        winHeader: $('#hzy-container header'),
    },
    //设置主题 index:左边皮肤索引，topIndex:顶部皮肤索引
    setTheme: function (index, topIndex) {
        if (!isNaN(parseInt(index))) {
            localStorage.setItem("web-theme-leftmenu", index);
            var webThemeIndex = localStorage.getItem("web-theme-leftmenu");
            if (webThemeIndex == null) {
                index = 0;
            }

            hzy.domObj.hzyNavMenu.find('.hzy-navMenu-sidebar').removeClass("sidebar-nav1");
            hzy.domObj.hzyNavMenu.find('.hzy-navMenu-sidebar').removeClass("sidebar-nav");
            if (index == 1) {
                hzy.domObj.hzyNavMenu.find('.hzy-navMenu-sidebar').addClass("sidebar-nav1");
            }
            else if (index == 0) {
                hzy.domObj.hzyNavMenu.find('.hzy-navMenu-sidebar').addClass("sidebar-nav");
            }
        }

        if (!isNaN(parseInt(topIndex))) {
            for (var i = 0; i < hzy.domObj.skinNames.length; i++) {
                hzy.domObj.winHeader.removeClass(hzy.domObj.skinNames[i]);
            }
            hzy.domObj.winHeader.addClass(hzy.domObj.skinNames[topIndex]);
            localStorage.setItem("web-theme-top", topIndex);
        }

    },
    //程序初始化
    init: function () {

        $("#menu").metisMenu({
            toggle: true
        });

        $('[data-toggle="tooltip"]').tooltip();

        //初始化皮肤
        hzy.setTheme(localStorage.getItem("web-theme-leftmenu"), localStorage.getItem("web-theme-top"));

        //路由事件
        hzyRouter.settings.callback = function (t, h, p) {
            //t:标题 h:链接地址 p:参数
            var hash = top.window.location.hash;
            var arry = hash.split("#!");
            hzy.tabs.add({
                text: t,
                href: arry[2]
            });
            hzy.menu.active(arry[2]);
        }

        hzy.menu.active();

        $("#hzy-container").on("click", "[hzy-router-href]", function () {
            var href = $(this).attr("hzy-router-href");
            var text = $(this).attr("hzy-router-text");
            hzyRouter.load(text, href);
        });

        resize();
        window.onresize = function () {
            resize();
        };

        function resize() {
            var dom = hzy.domObj.hzyNavMenu;
            var menuOpenState = localStorage.getItem('menuOpenState');
            if (hzy.isPc()) {
                dom.removeClass('hzy-navMenu-left-220');
                dom.addClass('hzy-navMenu-left0');
                if (menuOpenState) {
                    if (menuOpenState == 'hzy-navMenu-width80') {
                        dom.find('.hzy-navMenu-sidebar').addClass('sidebar-nav2'); //添加 鼠标悬停 样式
                        $('content').removeClass('hzy-left220').removeClass('hzy-left0').addClass('hzy-left80');
                    } else {
                        dom.find('.hzy-navMenu-sidebar').removeClass('sidebar-nav2'); //移除 鼠标悬停 样式
                        $('content').removeClass('hzy-left0').removeClass('hzy-left80').addClass('hzy-left220');
                    }
                    dom.removeClass('hzy-navMenu-width80').removeClass('hzy-navMenu-width220').addClass(menuOpenState);
                }
            } else {
                dom.removeClass('hzy-navMenu-left0');
                dom.addClass('hzy-navMenu-left-220');
                dom.find('.hzy-navMenu-sidebar').removeClass('sidebar-nav2'); //移除 鼠标悬停 样式
                $('content').removeClass('hzy-left220').removeClass("hzy-left80").addClass('hzy-left0');
            }
        }

    },
    isPc: function () {
        return window.innerWidth > 768;
    },
    //菜单 操作类
    menu: {
        toggle: function ($this, isOpen) {
            if (isNaN(parseInt(isOpen)) && $this)
                $this = $($this);
            var dom = hzy.domObj.hzyNavMenu;

            if (!isNaN(parseInt(isOpen))) {
                if (isOpen == 2 && hzy.isPc()) {
                    hzy.menu.leftW220(dom);
                }
                else if (isOpen == 1)
                    hzy.menu.leftW80(dom);
            }



            //pc 版本
            if (hzy.isPc()) {
                dom.removeClass('hzy-navMenu-left0');
                dom.removeClass('hzy-navMenu-left-220');
                if (dom.hasClass('hzy-navMenu-width220')) {
                    if ($this)
                        hzy.menu.leftW220(dom);
                    else
                        hzy.menu.leftW80(dom);
                } else {
                    if ($this)
                        hzy.menu.leftW80(dom);
                    else
                        hzy.menu.leftW220(dom);
                }
            } else {
                dom.removeClass('hzy-navMenu-width80');
                dom.removeClass('hzy-navMenu-width220');
                dom.addClass('hzy-navMenu-width220-xs');
                if (dom.hasClass('hzy-navMenu-left0')) {
                    dom.removeClass('hzy-navMenu-left0');
                    dom.addClass('hzy-navMenu-left-220');
                    $('content').removeClass('hzy-left220').addClass('hzy-left0');
                } else {
                    dom.removeClass('hzy-navMenu-left-220');
                    dom.addClass('hzy-navMenu-left0');
                    $('content').removeClass('hzy-left0').addClass('hzy-left220');
                }

            }

        },
        leftW220: function (dom) {
            dom.removeClass('hzy-navMenu-width220').addClass('hzy-navMenu-width80');
            dom.find('.hzy-navMenu-sidebar').addClass('sidebar-nav2'); //添加 鼠标悬停 样式
            localStorage.setItem('menuOpenState', 'hzy-navMenu-width80');

            $('content').removeClass('hzy-left220').removeClass('hzy-left0').addClass('hzy-left80');
        },
        leftW80: function (dom) {
            dom.removeClass('hzy-navMenu-width80').addClass('hzy-navMenu-width220');
            dom.find('.hzy-navMenu-sidebar').removeClass('sidebar-nav2'); //移除 鼠标悬停 样式
            localStorage.setItem('menuOpenState', 'hzy-navMenu-width220');

            $('content').removeClass('hzy-left0').removeClass('hzy-left80').addClass('hzy-left220');
        },
        active: function (href) {//菜单激活
            if (!href) {
                var hash = window.location.hash;
                if (!hash) return;
                href = hzyRouter.analysisHash(hash).key;
            }
            $('.metismenu a').removeClass('active');
            //$('.metismenu li').removeClass('active');
            var activeDom = $('.metismenu a[hzy-router-href="' + href + '"]');
            activeDom.addClass('active');
            //var ul = activeDom.parent().parent();
            //var pli = activeDom.parent().parent().parent();
            //if (pli.prop('tagName') == "LI") {
            //    pli.find("a:first");
            //}
        }
    },
    //选项卡类
    tabs: {
        //添加标签 obj={href:,text:}
        add: function (obj) {
            //var _url = href.substr(2);
            var ul = hzy.domObj.hzynavTabcenter.find('ul');
            var lis = ul.find('li');
            lis.removeClass('active');
            var flag = 0;
            //var url = '#!' + obj.text + '#!' + obj.href;
            for (var i = 0; i < lis.length; i++) {
                var btn = $(lis[i]).find('a[hzy-router-href="' + obj.href + '"]');
                //检测是否存在 标签页中
                if (btn.length > 0) {
                    //console.log(btn);
                    //存在，执行选中 并定位
                    flag = $(lis[i]);
                    $(lis[i]).addClass("active");
                    break;
                }
            }

            if (flag == 0) {
                //加入标签 
                flag = '<li class="hzy-navTab-li active" title="' + obj.text + '">\
                                <a href="javascript:void(0)" hzy-router-href="'+ obj.href + '" hzy-router-text="' + obj.text + '">\
                                    <span>' + obj.text + '</span>\
                                </a>\
                                <i class="fa fa-close" onclick="hzy.tabs.close(event,$(this).parent())"></i>\
                            </li>';
                ul.append(flag);
                //创建 iframe
                hzy.tabs.createIframe(obj.href);
            }
            hzy.tabs.location($(flag));
            hzy.tabs.actice($(flag));
        },
        //创建 iframe
        createIframe: function (href) {
            console.log("加载 " + href);
            var PageContent = hzy.domObj.pageContent;
            PageContent.find("iframe").removeClass("hzy-iframe-active");
            //href = window.hzyRouter.analysis(href).key;
            href = href.indexOf('#!') >= 0 ? href.substr(2) : href;
            var name = 'adminIframe-' + href;
            var html = '<iframe class="hzy-iframe hzy-iframe-active" frameborder="0" name="' + name + '"></iframe>';
            PageContent.append(html);
            var iframe = PageContent.find('iframe:visible');

            hzy.tabs.loadIframe(iframe, href);
        },
        //关闭选项卡标签
        close: function (event, $this) {
            //阻止事件冒泡
            event.stopPropagation();
            $this = $($this);
            hzy.tabs.upOrNextLoad($this, function () {
                var href = $this.find('a').attr('hzy-router-href');
                var PageContent = hzy.domObj.pageContent;
                var name = 'adminIframe-' + (href.indexOf('#!') >= 0 ? href.substr(2) : href);
                PageContent.find("iframe[name='" + name + "']").remove();
                $this.remove();
            });
            return false;
        },
        //如果标签页面被关闭，调用该函数 来检查 加载上一个页面还是下一个页面
        upOrNextLoad: function (dom, callback) {
            //判断该关闭的选项卡是否是 选中状态  选中需要对 标签定位做调整
            dom = $(dom);
            var newDom = '';
            if (dom.hasClass("active")) {
                var up = dom.prev();//获取上一个元素
                var next = dom.next();//获取下一个元素
                if (up.length == 1) {
                    newDom = up;
                    //hzy.tabs.actice(up);
                } if (next.length == 1) {
                    newDom = next;
                    //hzy.tabs.actice(next);
                }
                var text = newDom.find("a").attr("hzy-router-text");
                var href = newDom.find("a").attr("hzy-router-href");
                hzyRouter.load(text, href);
            }
            if (callback) callback();
        },
        //激活
        actice: function (dom) {
            var dom = $(dom);

            //if (!dom.hasClass("active")) {
            //    dom.add("active");
            //}

            var href = dom.find('a').attr('hzy-router-href');
            var name = 'adminIframe-' + (href.indexOf('#!') >= 0 ? href.substr(2) : href);
            var PageContent = hzy.domObj.pageContent;
            //请求页面并加载在页面中
            var iframe = PageContent.find("iframe[name='" + name + "']");
            if (!iframe.hasClass('hzy-iframe-active')) {
                PageContent.find("iframe").removeClass("hzy-iframe-active");
                iframe.addClass("hzy-iframe-active");
            }
        },
        //选项卡 选中后定位
        location: function (dom) {
            var dom = $(dom);
            var href = dom.find('a').attr('hzy-router-href');

            var lookDiv = hzy.domObj.hzynavTabcenter;//可见区域
            var ul = lookDiv.find("ul");
            var ulW = ul.find("li").length * 120;

            ul.css("width", ulW);
            var lookW = lookDiv.width();
            var lookLeft = lookDiv.offset().left;
            var ulleft = ul.offset().left;

            var thisDomInUlLeft = 0;//当前元素在 ul 中的 偏移量
            var lis = ul.find("li");
            for (var i = 0; i < lis.length; i++) {
                if ($(lis[i]).find('a').attr('hzy-router-href') == href) {
                    thisDomInUlLeft = (i + 1) * 120; break;
                }
            }

            var thisleft = parseInt((ulleft + thisDomInUlLeft));//当前选中的 li 偏移量
            //如果菜单藏入右边 那么向左移动
            if (thisleft >= parseInt(lookLeft + lookW)) {
                ul.animate({ "left": "-=" + parseInt(thisleft - parseInt(lookLeft + lookW)) + "px" }, 50);
            }
            //如果菜单藏入左边 那么向右移动
            if (parseInt(thisleft - 120) < lookLeft) {
                ul.animate({ "left": "+=" + parseInt(lookLeft - thisleft + 120) + "px" }, 50);
            }

        },
        //左移动
        leftMove: function () {
            var lookDiv = hzy.domObj.hzynavTabcenter;//可见区域
            var ul = lookDiv.find('ul');

            var lookW = lookDiv.width();
            var lookLeft = lookDiv.offset().left;
            var ulleft = ul.offset().left;
            //找出与左边 250 零界点最近的 一个 li
            ul.find("li").each(function (i, e) {
                var thisleft = ulleft + (i * 120);
                if (thisleft >= parseInt(lookLeft - 120) && thisleft <= lookLeft) {
                    hzy.tabs.location($(this));
                    return false;
                }
            });
        },
        //右移动
        rightMove: function () {
            var lookDiv = hzy.domObj.hzynavTabcenter;//可见区域
            var ul = lookDiv.find('ul');

            var lookW = lookDiv.width();
            var lookLeft = lookDiv.offset().left;
            var ulleft = ul.offset().left;
            //找出与右边 零界点最近的 一个 li
            ul.find("li").each(function (i, e) {
                var thisleft = ulleft + (i * 120);
                thisleft = (thisleft + 120);
                if (thisleft > (lookLeft + lookW) && thisleft <= ((lookLeft + lookW)) + 120) {
                    hzy.tabs.location($(this));
                    return false;
                }
            });
        },
        //移除其他选项卡
        removeOtherTab: function () {
            var hzynavTabcenter = hzy.domObj.hzynavTabcenter;
            var ul = hzynavTabcenter.find('ul');
            var PageContent = hzy.domObj.pageContent;
            var lis = ul.find("li:gt(0)");
            lis.each(function (i, e) {
                if (!$(this).hasClass("active")) {
                    var href = $(this).find('a').attr('hzy-router-href');
                    var name = 'adminIframe-' + (href.indexOf('#!') >= 0 ? href.substr(2) : href);
                    PageContent.find("iframe[name='" + name + "']").remove();
                    return $(this).remove();
                }
            });
            var acticeLi = ul.find("li.active");
            hzy.tabs.location(acticeLi);
            hzy.tabs.actice(acticeLi);
        },
        //移除所有选项卡
        removeAllTab: function () {
            var hzynavTabcenter = hzy.domObj.hzynavTabcenter;
            var ul = hzynavTabcenter.find('ul');
            var PageContent = hzy.domObj.pageContent;
            ul.find("li:gt(0)").each(function (i, e) {
                var href = $(this).find('a').attr('hzy-router-href');
                var name = 'adminIframe-' + (href.indexOf('#!') >= 0 ? href.substr(2) : href);
                PageContent.find("iframe[name='" + name + "']").remove();
            });
            ul.find("li:gt(0)").remove();
            var home = ul.find("li:eq(0)");
            hzy.tabs.location(home);
            hzy.tabs.actice(home);

            var text = home.find("a").attr("hzy-router-text");
            var href = home.find("a").attr("hzy-router-href");
            hzyRouter.load(text, href);
        },
        //刷新当前选中的选项卡
        refreshThisTab: function (dom) {
            var li = "";
            if (dom) {
                li = $(dom);
                hzy.tabs.actice(li);
            }
            else {
                var hzynavTabcenter = hzy.domObj.hzynavTabcenter;
                li = hzynavTabcenter.find('ul li.hzy-navTab-li.active');
                hzy.tabs.actice(li);
            }
            var PageContent = hzy.domObj.pageContent;
            var href = $(li).find('a').attr('hzy-router-href');
            var name = 'adminIframe-' + (href.indexOf('#!') >= 0 ? href.substr(2) : href);
            var iframe = PageContent.find("iframe[name='" + name + "']");

            hzy.tabs.loadIframe(iframe, iframe.attr("src"));
        },
        // iframe 加载
        loadIframe: function (dom, src) {
            var _section = top.window.$("section.hzy-main");
            if (_section.find(".hzy-iframe-loader").length > 0) {
                _section.find(".hzy-iframe-loader").show();
            } else {
                _section.append("<div class='hzy-iframe-loader vertical-align text-center'><div class=\"loader-circle loader vertical-align-middle\" data-type=\"circle\"></div></div>");
            }

            dom.attr('src', src).on('load', function () {

                setTimeout(function () {
                    _section.find(".hzy-iframe-loader").hide();
                }, 100);

            });
        }


    },
    //全屏 类
    fullScreen: function () {
        var isFullScreen = false;
        var requestFullScreen = function () { //全屏
            var de = document.documentElement;
            if (de.requestFullscreen) {
                de.requestFullscreen();
            } else if (de.mozRequestFullScreen) {
                de.mozRequestFullScreen();
            } else if (de.webkitRequestFullScreen) {
                de.webkitRequestFullScreen();
            } else {
                alert("该浏览器不支持全屏");
            }
        };
        //退出全屏 判断浏览器种类
        var exitFull = function () {
            // 判断各种浏览器，找到正确的方法
            var exitMethod = document.exitFullscreen || //W3C
                document.mozCancelFullScreen || //Chrome等
                document.webkitExitFullscreen || //FireFox
                document.webkitExitFullscreen; //IE11
            if (exitMethod) {
                exitMethod.call(document);
            } else if (typeof window.ActiveXObject !== "undefined") { //for Internet Explorer
                var wscript = new ActiveXObject("WScript.Shell");
                if (wscript !== null) {
                    wscript.SendKeys("{F11}");
                }
            }
        };

        return {
            handleFullScreen: function ($this) {
                $this = $($this);
                if (isFullScreen) {
                    exitFull();
                    isFullScreen = false;
                    $this.find("i").removeClass("wb-contract");
                    $this.find("i").addClass("wb-expand");
                } else {
                    requestFullScreen();
                    isFullScreen = true;
                    $this.find("i").removeClass("wb-expand");
                    $this.find("i").addClass("wb-contract");
                }
            },
        };

    }()

}