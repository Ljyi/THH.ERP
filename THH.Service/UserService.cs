using AutoMapper;
using System.Collections.Generic;
using System.Linq;
using THH.DAL;
using THH.DAL.Repository;
using THH.Model;
using THH.Model.Dto;

namespace THH.Service
{
    public class UserService
    {
        private IRepository<User> userRepository = null;
        private IRepository<Role> roleRepository = null;
        public bool isSave = true;

        public UserService()
        {
            userRepository = new RepositoryBase<User>();
            roleRepository = new RepositoryBase<Role>();
        }

        public List<User> GetUsers()
        {
            return userRepository.Entities.ToList();
        }
        public User GetUser(int id)
        {
            return userRepository.Find(id);
        }
        public UserDto Find()
        {
            //Mapper.Initialize(cfg =>
            //{
            //    cfg.AllowNullCollections = true;
            //    cfg.CreateMap<User, UserDto>();
            //});
            User user = userRepository.Entities.FirstOrDefault();
            return Mapper.Map<User, UserDto>(user);
        }

        public List<UserDto> GetUserGrid(int limit, int offset, string userName, string loginName)
        {
            var user = userRepository.Entities.ToList();
            return Mapper.Map<List<User>, List<UserDto>>(user);
        }
        //public void Add()
        //{
        //    try
        //    {
        //        List<User> userList = new List<User>() {
        //        new User()
        //        {
        //            Email = "979671716@qq.com",
        //            LogingName = "ljy",
        //            Password = "123",
        //            UserName = "李军毅",
        //            CreateUser = "李军毅",
        //            CredateTime = DateTime.Now
        //        },
        //        new User()
        //        {
        //            Email = "979671716@qq.com",
        //            LogingName = "Admin",
        //            Password = "123456",
        //            UserName = "管理员",
        //            CreateUser = "李军毅",
        //            CredateTime = DateTime.Now
        //        },
        //    };
        //        userRepository.Insert(userList);
        //    }
        //    catch (Exception ex)
        //    {
        //        string msg = ex.Message;
        //        throw;
        //    }
        //}
        public User Login(string loginName, string password)
        {
            return new User();
        }
    }
}
