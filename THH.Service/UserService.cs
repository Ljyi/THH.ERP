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
    public class UserService
    {
        private IRepository<User> userRepository = null;
        public bool isSave = true;

        public UserService()
        {
            userRepository = new RepositoryBase<User>();
        }

        public List<User> GetUsers()
        {
            return userRepository.Entities.ToList();
        }
        public User GetUser(int id)
        {
            return userRepository.Find(id);
        }
        public User Find()
        {
            return userRepository.Entities.FirstOrDefault();
        }
        public void Add()
        {
            try
            {
                List<User> userList = new List<User>() {
                new User()
                {
                    Email = "979671716@qq.com",
                    LogingName = "ljy",
                    Password = "123",
                    UserName = "李军毅",
                    CreateUser = "李军毅",
                    CredateTime = DateTime.Now
                },
                new User()
                {
                    Email = "979671716@qq.com",
                    LogingName = "Admin",
                    Password = "123456",
                    UserName = "管理员",
                    CreateUser = "李军毅",
                    CredateTime = DateTime.Now
                },
            };
                userRepository.Insert(userList);
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
                throw;
            }
        }
        public User Login(string loginName, string password)
        {
            return new User();
        }
    }
}
