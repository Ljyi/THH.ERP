using System.Collections.Generic;
using System.Web.Mvc;
using THH.Model.Dto;
using THH.Service;
using THH.Web.BaseApplication;

namespace THH.Web.Areas.System.Controllers
{
    public class UserController : ServicedController<UserService>
    {
        // GET: System/User
        public ActionResult Index()
        {
            return View();
        }
        #region 列表(Grid)
        /// <summary>
        /// 采购订单
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public JsonResult GetUserGrid(int limit = 0, int offset = 0, string userName = "", string loginName = "")
        {
            ///   int supplierID = ServiceHelper.GetCurrentUser().UserID;
            List<UserDto> userDtos = Service.GetUserGrid(limit, offset, userName, loginName);
            return Json(new { total = userDtos.Count, rows = userDtos }, JsonRequestBehavior.AllowGet);
        }
        #endregion
    }
}