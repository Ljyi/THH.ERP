using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using THH.DAL;
using THH.DAL.Repository;
using THH.Model;

namespace THH.Service
{
    public class SysFunctionService
    {
        private IRepository<SysFunction> sysFunctionRepository = null;
        public SysFunctionService()
        {
            sysFunctionRepository = new RepositoryBase<SysFunction>();
        }
        public void Add()
        {
            List<SysFunction> sysFunctionList = new List<SysFunction>() {
                new SysFunction()
                 {
                    SysMenuId =2,
                    SysButtonId =1,
                    CreateUser="李军毅",
                    CredateTime = DateTime.Now
                },
                 new SysFunction()
                 {
                    SysMenuId =2,
                    SysButtonId =2,
                    CreateUser="李军毅",
                    CredateTime = DateTime.Now
                },
                new SysFunction(){
                    SysMenuId =2,
                    SysButtonId =3,
                    CreateUser="李军毅",
                    CredateTime = DateTime.Now
                },
                new SysFunction(){
                    SysMenuId =2,
                    SysButtonId =4,
                    CreateUser="李军毅",
                    CredateTime = DateTime.Now
                },
                new SysFunction(){
                    SysMenuId =2,
                    SysButtonId =5,
                    CreateUser="李军毅",
                    CredateTime = DateTime.Now
                },
                new SysFunction(){
                    SysMenuId =2,
                    SysButtonId =6,
                    CreateUser="李军毅",
                    CredateTime = DateTime.Now
                },
                new SysFunction(){
                    SysMenuId =2,
                    SysButtonId =7,
                    CreateUser="李军毅",
                    CredateTime = DateTime.Now
                },
                new SysFunction(){
                    SysMenuId =2,
                    SysButtonId =8,
                    CreateUser="李军毅",
                    CredateTime = DateTime.Now
                }
            };
            for (int i = 2; i < 8; i++)
            {
                if (sysFunctionList.FirstOrDefault().SysMenuId != i)
                {
                    sysFunctionList.ForEach(p =>
                    {
                        p.SysMenuId = i;
                    });
                    sysFunctionRepository.Insert(sysFunctionList);
                }
            }
        }
    }
}
