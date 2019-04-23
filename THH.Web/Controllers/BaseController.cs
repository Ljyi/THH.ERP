using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using THH.Web.Authorization;

namespace THH.Web.Controllers
{
    [SysAuthorize]
    public class BaseController : Controller
    {
    }
}