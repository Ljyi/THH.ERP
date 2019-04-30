using System.Collections.Generic;
using System.Web.Mvc;
using THH.Model.Dto;
using THH.Service;
using THH.Web.BaseApplication;

namespace THH.Web.Areas.System.Controllers
{
    public class MenuController : ServicedController<SysMenuService>
    {
        // GET: System/Menu
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
        public JsonResult GetMenuGrid(int limit = 0, int offset = 0)
        {
            List<MenuDto> menuDtoDtos = Service.GetMenuGrid(limit, offset);
            return Json(new { total = menuDtoDtos.Count, rows = menuDtoDtos }, JsonRequestBehavior.AllowGet);
        }
        #endregion
    }
}