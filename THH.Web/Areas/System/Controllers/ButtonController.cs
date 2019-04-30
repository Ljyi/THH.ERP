using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using THH.Model.Dto;
using THH.Service;
using THH.Web.BaseApplication;

namespace THH.Web.Areas.System.Controllers
{
    public class ButtonController : ServicedController<SysButtonService>
    {
        // GET: System/Button
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
        public JsonResult GetButtonGrid(int limit = 0, int offset = 0)
        {
            List<ButtonDto> buttonDtoDtos = Service.GetButtonGrid(limit, offset);
            return Json(new { total = buttonDtoDtos.Count, rows = buttonDtoDtos }, JsonRequestBehavior.AllowGet);
        }
        #endregion
    }
}