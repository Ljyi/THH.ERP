namespace THH.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class modiflog : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Log", "CreateDate", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Log", "CreateDate");
        }
    }
}
