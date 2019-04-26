﻿using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using THH.DAL;
using THH.DAL.Repository;
using THH.Model;
using THH.Model.Dto;

namespace THH.Service
{
    public class UserRoleService
    {
        private IRepository<UserRole> userRoleRepository = null;
        public UserRoleService()
        {
            userRoleRepository = new RepositoryBase<UserRole>();
        }
        public void Add()
        {
            List<UserRole> userRoleList = new List<UserRole>() {
                 new UserRole()
                 {
                    RoleId =1,
                    UserId=1,
                    CreateUser="李军毅",
                    CredateTime = DateTime.Now
                }
            };
            userRoleRepository.Insert(userRoleList);
        }
        public List<UserRole> GetUserRoles()
        {
            return userRoleRepository.Entities.ToList();
        }
        public IEnumerable<UserRoleDto> GetUserRole()
        {
            try
            {
                IQueryable<UserRole> userRoles = userRoleRepository.Entities;
                IEnumerable<UserRoleDto> userRoleDto = Mapper.Map<IEnumerable<UserRole>, IEnumerable<UserRoleDto>>(userRoles);
                return userRoleDto;
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
                throw;
            }
        }
    }
}
