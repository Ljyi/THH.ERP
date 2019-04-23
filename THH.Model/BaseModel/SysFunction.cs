using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using THH.Model.BaseModule;

namespace THH.Model
{
    [Table("SysFunction")]
    public class SysFunction : BaseModel
    {
        /// <summary>
        /// 主键Id（自增）
        /// </summary>
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required]
        public override int Id { get; set; }
        /// <summary>
        /// 菜单Id
        /// </summary>
        [Required]
        public int SysMenuId { get; set; }
        public virtual SysMenu SysMenu { get; set; }
        /// <summary>
        /// 按钮Id
        /// </summary>
        [Required]
        public int SysButtonId { get; set; }
        public virtual SysButton SysButton { get; set; }
        /// <summary>
        /// 授权Code
        /// </summary>
        public string FunctionCode { get; set; }
        /// <summary>
        ///状态
        /// </summary>
        public string Status { get; set; }
    }
}
