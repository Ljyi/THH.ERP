using System.Web.Optimization;

namespace THH.Web
{
    public class BundleConfig
    {
        // 有关捆绑的详细信息，请访问 https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/signalr").Include(
            "~/Scripts/jquery.signalr-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
           "~/Scripts/jquery.validate.js",
           "~/Scripts/jquery.validate.unobtrusive.js"));

            // 使用要用于开发和学习的 Modernizr 的开发版本。然后，当你做好
            // 生产准备就绪，请使用 https://modernizr.com 上的生成工具仅选择所需的测试。
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));
            bundles.Add(new StyleBundle("~/Content/css").Include(
                     "~/Content/bootstrap.css",
                     "~/Content/bootstrap-theme.css",
                     "~/Content/css/font-awesome.css",
                     "~/Content/site.css",
                     "~/Content/thh.css",
                     "~/Content/skins/_all-skins.css"
                     ));
            //admin-lte
            bundles.Add(new ScriptBundle("~/bundles/admin-lte").Include(
               "~/Content/admin-lte/js/app.js"));

            bundles.Add(new StyleBundle("~/admin-lte/css").Include(
                  "~/Content/admin-lte/css/AdminLTE.css",
                  "~/Content/admin-lte/css/skins/_all-skins.css"));

            //bootstrap-table
            bundles.Add(new ScriptBundle("~/bundles/bootstrap-table").Include(
               "~/Content/bootstrap-table/js/bootstrap-table.js",
               "~/Content/bootstrap-table/js/bootstrap-table-locale-all.js",
               "~/Content/bootstrap-table/js/bootstrap-table-zh-CN.js"));

            bundles.Add(new StyleBundle("~/bootstrap-table/css").Include(
                  "~/Content/bootstrap-table/css/bootstrap-table.css"));
        }
    }
}
