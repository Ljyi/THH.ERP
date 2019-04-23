using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace THH.Model
{
    /// <summary>
    /// 用户权限
    /// </summary>
    [Table("UserRights")]
    public class UserRights : BaseModel
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required]
        public override int Id { get; set; }
        /// <summary>
        /// 用户ID
        /// </summary>
        [Required]
        public int UserId { get; set; }
        /// <summary>
        /// 功能Id
        /// </summary>
        [Required]
        public int SysFunctionId { get; set; }
        public virtual SysFunction SysFunction { get; set; }
    }
}
