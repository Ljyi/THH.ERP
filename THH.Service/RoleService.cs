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
    public class RoleService
    {
        private IRepository<Role> roleRepository = null;
        public RoleService()
        {
            roleRepository = new RepositoryBase<Role>();
        }
        public void Add()
        {
            List<Role> roleList = new List<Role>() {
                 new Role()
                 {
                    RoleName ="普通员工",
                    Status="N",
                    CreateUser="李军毅",
                    CredateTime = DateTime.Now
                },
                 new Role()
                 {
                    RoleName ="超级管理员",
                    Status="N",
                    CreateUser="李军毅",
                    CredateTime = DateTime.Now
                }
            };
            roleRepository.Insert(roleList);
        }
    }
}
