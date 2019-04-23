using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using THH.DAL;
using THH.Model;

namespace THH.Service
{
    public class SysMenuService
    {
        private DAL.Repository.IRepository<SysMenu> sysMenuRepository = null;
        public SysMenuService()
        {
            sysMenuRepository = new RepositoryBase<SysMenu>();
        }
        public void Add()
        {
            List<SysMenu> sysMenuList = new List<SysMenu>() {
                 new SysMenu()
                 {
                    MenuName = "基本设置",
                    MenuCode = "BaseSet",
                    Url = "Home",
                    ParentId = 0,
                    MenuLevel = 0,
                    SortNumber = 1,
                    Status = 1,
                    IsDelete = false,
                    CreateUser = "李军毅",
                    CredateTime = DateTime.Now,
                },
                 new SysMenu()
                 {
                    MenuName = "系统管理",
                    MenuCode = "Home",
                    Url = "SystemManager",
                    ParentId = 0,
                    MenuLevel = 0,
                    SortNumber = 1,
                    Status = 1,
                    Icon="icon wb-settings",
                    IsDelete = false,
                    CreateUser = "李军毅",
                    CredateTime = DateTime.Now,
                },
                 new SysMenu()
                 {
                    MenuName = "菜单管理",
                    MenuCode = "Menu",
                    Url = "MenuManager",
                    ParentId = 2,
                    MenuLevel = 1,
                    SortNumber = 1,
                    Status = 1,
                    IsDelete = false,
                    CreateUser = "李军毅",
                    CredateTime = DateTime.Now,
                },
                 new SysMenu()
                 {
                    MenuName = "用户管理",
                    MenuCode = "User",
                    Url = "UserManager",
                    ParentId = 2,
                    MenuLevel = 2,
                    SortNumber = 2,
                    Status = 1,
                    IsDelete = false,
                    CreateUser = "李军毅",
                    CredateTime = DateTime.Now,
                },
                 new SysMenu()
                 {
                    MenuName = "日志信息",
                    MenuCode = "Log",
                    Url = "Log",
                    ParentId = 2,
                    MenuLevel = 2,
                    SortNumber = 3,
                    Status = 1,
                    IsDelete = false,
                    CreateUser = "李军毅",
                    CredateTime = DateTime.Now,
                },
                 new SysMenu()
                 {
                    MenuName = "系统设置",
                    MenuCode = "SystemSet",
                    Url = "SystemSetup",
                    ParentId = 2,
                    MenuLevel = 2,
                    SortNumber = 4,
                    Status = 1,
                    IsDelete = false,
                    CreateUser = "李军毅",
                    CredateTime = DateTime.Now,
                },
                 new SysMenu()
                 {
                    MenuName = "显示设置",
                    MenuCode = "DisplaySettings",
                    Url = "Display",
                    ParentId = 6,
                    MenuLevel = 3,
                    SortNumber = 1,
                    Status = 1,
                    IsDelete = false,
                    CreateUser = "李军毅",
                    CredateTime = DateTime.Now,
                },
                 new SysMenu()
                 {
                    MenuName = "日志设置",
                    MenuCode = "LogSettings",
                    Url = "Log",
                    ParentId = 6,
                    MenuLevel = 3,
                    SortNumber = 2,
                    Status = 1,
                    IsDelete = false,
                    CreateUser = "李军毅",
                    CredateTime = DateTime.Now,
                },
            };
            sysMenuRepository.Insert(sysMenuList);
        }
    }
}
