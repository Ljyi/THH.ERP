using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using THH.DAL;
using THH.DAL.Repository;
using THH.Model;
using THH.Model.BaseModule;

namespace THH.Service
{
    public class SysButtonService
    {
        private IRepository<SysButton> sysButtonRepository = null;
        public SysButtonService()
        {
            sysButtonRepository = new RepositoryBase<SysButton>();
        }
        public void Add()
        {
            List<SysButton> sysButtonList = new List<SysButton>() {
                 new SysButton()
                 {
                    ButtonCode ="Add",
                    ButtonName="新增",
                    InputType="Input",
                    ButtonStyle="",
                    ButtonIocn="",
                    Status="N",
                    CreateUser="李军毅",
                    CredateTime = DateTime.Now
                },
                 new SysButton()
                 {
                    ButtonCode ="Edit",
                    ButtonName="编辑",
                    InputType="Input",
                    ButtonStyle="",
                    ButtonIocn="",
                    Status="N",
                    CreateUser="李军毅",
                    CredateTime = DateTime.Now
                },
                 new SysButton()
                 {
                    ButtonCode ="Browse",
                    ButtonName="浏览",
                    InputType="Input",
                    ButtonIocn="",
                    ButtonStyle="",
                    Status="N",
                    CreateUser="李军毅",
                    CredateTime = DateTime.Now
                },
                 new SysButton()
                 {
                    ButtonCode ="Delete",
                    ButtonName="删除",
                    InputType="Input",
                    ButtonIocn="",
                    ButtonStyle="",
                    Status="N",
                    CreateUser="李军毅",
                    CredateTime = DateTime.Now
                },
                 new SysButton()
                 {
                    ButtonCode ="Submit ",
                    ButtonName="提交",
                    InputType="Input",
                    ButtonIocn="",
                    ButtonStyle="",
                    Status="N",
                    CreateUser="李军毅",
                    CredateTime = DateTime.Now
                },
                 new SysButton()
                 {
                    ButtonCode ="Confirm ",
                    ButtonName="确认",
                    InputType="Input",
                    ButtonIocn="",
                    ButtonStyle="",
                    Status="N",
                    CreateUser="李军毅",
                    CredateTime = DateTime.Now
                },
                 new SysButton()
                 {
                    ButtonCode ="Approval ",
                    ButtonName="审核",
                    InputType="Input",
                    ButtonIocn="",
                    ButtonStyle="",
                    Status="N",
                    CreateUser="李军毅",
                    CredateTime = DateTime.Now
                },
                 new SysButton()
                 {
                    ButtonCode ="Reject ",
                    ButtonName="拒绝",
                    InputType="Input",
                    ButtonIocn="",
                    ButtonStyle="",
                    Status="N",
                    CreateUser="李军毅",
                    CredateTime = DateTime.Now
                }
            };
            sysButtonRepository.Insert(sysButtonList);
        }
    }
}
