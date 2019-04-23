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
    public class UserRightsService
    {
        private IRepository<UserRights> userRightsRepository = null;
        public UserRightsService()
        {
            userRightsRepository = new RepositoryBase<UserRights>();
        }
        public void Add()
        {
            List<UserRights> permissionsList = new List<UserRights>() {
                 new UserRights()
                 {
                     UserId=1,
                     SysFunctionId=7,
                     CreateUser="李军毅",
                     CredateTime = DateTime.Now
                },
                new UserRights()
                 {
                     UserId=1,
                     SysFunctionId=8,
                     CreateUser="李军毅",
                     CredateTime = DateTime.Now
                },
                new UserRights()
                 {
                     UserId=1,
                     SysFunctionId=9,
                     CreateUser="李军毅",
                     CredateTime = DateTime.Now
                },
                new UserRights()
                 {
                     UserId=1,
                     SysFunctionId=10,
                     CreateUser="李军毅",
                     CredateTime = DateTime.Now
                },
                new UserRights()
                 {
                     UserId=1,
                     SysFunctionId=11,
                     CreateUser="李军毅",
                     CredateTime = DateTime.Now
                }
            };
            for (int i = 0; i < 3; i++)
            {
                if (permissionsList.FirstOrDefault().UserId != i)
                {
                    permissionsList.ForEach(p =>
                    {
                        p.UserId = i;
                    });
                    userRightsRepository.Insert(permissionsList);
                }
            }
        }

        public List<UserRights> GetUserRights(int userId)
        {
            return userRightsRepository.Entities.ToList();
        }
    }
}
