namespace THH.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddSysButton : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.SysButton", "ButtonIocn", c => c.String(maxLength: 100));
            AlterColumn("dbo.SysButton", "ButtonStyle", c => c.String(maxLength: 100));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.SysButton", "ButtonStyle", c => c.String());
            AlterColumn("dbo.SysButton", "ButtonIocn", c => c.String(nullable: false, maxLength: 100));
        }
    }
}
