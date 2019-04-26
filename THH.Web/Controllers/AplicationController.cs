using System.Web.Mvc;
using THH.Service;

namespace THH.Web.Controllers
{
    public class AplicationController : Controller
    {
        // GET: Aplication
        public ActionResult Index()
        {
            UserService userService = new UserService();
            var userDto = userService.Find();
            userDto.IsAdmin = true;
            return View();
        }
    }
}