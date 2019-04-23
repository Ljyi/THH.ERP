namespace THH.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ModifyFunction : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.SysFunction", "FunctionCode", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.SysFunction", "FunctionCode");
        }
    }
}
