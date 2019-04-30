using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using THH.DAL;
using THH.DAL.Repository;
using THH.Model;
using THH.Model.Dto;

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

        public List<RoleDto> GetRoleGrid(int limit, int offset)
        {
            var user = roleRepository.Entities.ToList();
            return Mapper.Map<List<Role>, List<RoleDto>>(user);
        }
    }
}
